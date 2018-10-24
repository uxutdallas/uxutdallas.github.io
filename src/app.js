import jump from 'jump.js';
import { styler, timeline, listen, easing } from "popmotion";
require('./styles/app.scss');

document.addEventListener('DOMContentLoaded', function() {
  const App = new Application;
  App.handleAnchorNavigation();
  App.handleEmbeddedSocialMedia();
  App.handleJoinUsModal();
  App.handleMobileNavigation();
  App.subscribeToBrowserWidthChange();
}, false);


class Application {
  constructor() {
    this.state = {
      anchorNavigating: false,
      modalOpen: false,
      mobileNavOpen: false,
      embeddedSocialMediaIsAdded: false,
    }

    this.handleBrowserWidthChange = this.addEmbeddedSocialMediaIfNeeded.bind(this);
    this.mobileWidth = 950;
  }

  static isMobileDevice() {
    return (typeof window.orientation !== "undefined") ||
    (navigator.userAgent.indexOf('IEMobile') !== -1) ||
    window.innerWidth <= this.mobileWidth;
  }

  addEmbeddedSocialMediaIfNeeded(e) {
    const width = e.target.innerWidth;
    if (width > this.mobileWidth && !this.state.embeddedSocialMediaIsAdded) {
      this.handleEmbeddedSocialMedia();
    }
  }

  subscribeToBrowserWidthChange = () => {
    if (this.constructor.isMobileDevice()) {
      window.addEventListener("resize", this.handleBrowserWidthChange);
    }
  }

  unsubscribeFromBrowserWidthChange = () => {
    window.removeEventListener("resize", this.handleBrowserWidthChange);
  }

  handleAnchorNavigation() {
    const nodes = ["introduction", "events", "sponsors", "contact"]

    nodes.map((node) => {
      const triggers =  document.querySelectorAll(`.${node}-node`);
      const target = document.querySelector(`#${node}`);

      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          if (!this.state.anchorNavigating) {
            this.state.anchorNavigating = true;

            jump(target, {
              offset: -80,
              callback: () => this.state.anchorNavigating = false,
            });
          }
        });
      });
    })
  }

  handleEmbeddedSocialMedia() {
    if (!this.constructor.isMobileDevice()) {
      this.state.embeddedSocialMediaIsAdded = true;
      this.unsubscribeFromBrowserWidthChange();
      // TWITTER
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.getElementsByTagName("head")[0].appendChild(script);

      // FACEBOOK
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.async = true;
        js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=122107125107711';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }

  handleMobileNavigation() {
    const navigationButton = document.querySelector('.mobile-menu-trigger');
    const mobileNavigationContainer = document.querySelector(".mobile-navigation");
    const shade = document.querySelector('.mobile-nav-shade');
    const mobileNavigationItems = document.querySelectorAll(".mobile-nav-li");

    const toggleMobileNavigation = () => {
      [navigationButton, mobileNavigationContainer, shade].map((e) => {
        e.classList.toggle("is-active");
      })
    }

    mobileNavigationItems.forEach((e) => e.addEventListener("click", () => toggleMobileNavigation()));
    navigationButton.addEventListener("click", () => toggleMobileNavigation());
  }

  handleJoinUsModal() {
    const openModalButton = document.querySelector('.open-modal');
    const cancelModalButton = document.querySelector('.modal-cancel');

    const modalShade = styler(document.querySelector('.modal-shade'));
    const modalContainer = styler(document.querySelector('.modal-container'));
    const modal = styler(document.querySelector('.modal'));
    const modalSections = Array.from(document.querySelector('.modal').children).map(styler);
    const sectionLabels = modalSections.map((s, i) => 'section' + i);

    const tweenUp = (track, duration = 500, yFrom = 100) => ({
      track,
      duration,
      from: { y: yFrom, opacity: 0 },
      to: { y: 0, opacity: 1 },
      ease: { y: easing.backOut, opacity: easing.linear }
    });

    const setStylers = (v) => {
      if (v.shade !== undefined) modalShade.set('opacity', v.shade);
      if (v.modal !== undefined) modal.set(v.modal);
      sectionLabels.forEach((label, i) => {
        if (v[label] !== undefined) modalSections[i].set(v[label])
      });
    };

    const showContainers = () => {
      modalShade.set('display', 'block');
      modalContainer.set('display', 'flex');
    };

    const hideContainers = () => {
      modalShade.set('display', 'none');
      modalContainer.set('display', 'none');
    };

    const openModal = () => {
      this.state.modalOpen = true;
      showContainers();

      timeline([
        { track: 'shade', from: 0, to: 1, ease: easing.linear },
        '-100',
        tweenUp('modal'),
        '-200',
        [...modalSections.map((s, i) => tweenUp(sectionLabels[i], 300, 50)), 50]
      ]).start(setStylers);
    }

    const cancelModal = () => {
      timeline([
        {
          track: 'modal',
          duration: 200,
          from: { y: 0, opacity: 1 },
          to: { y: 100, opacity: 0 },
          ease: { y: easing.easeIn, opacity: easing.linear }
        },
        '-100',
        { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 200 }
      ]).start({
        update: setStylers,
        complete: hideContainers
      });
    }

    const okModal = () => {
      timeline([
        {
          track: 'modal',
          duration: 200,
          from: { y: 0, opacity: 1 },
          to: { y: -200, opacity: 0 },
          ease: { y: easing.easeOut, opacity: easing.linear }
        },
        '-100',
        { track: 'shade', from: 1, to: 0, ease: easing.linear, duration: 300 }
      ]).start({
        update: setStylers,
        complete: hideContainers
      });
    }

    listen(openModalButton, 'click').start(openModal);
    listen(cancelModalButton, 'click').start(cancelModal);
  }
}
