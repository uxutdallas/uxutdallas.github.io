function loadJSON()
{
    var data_file = {
        "key": "MANDRIL API KEY",
        "message": {
            "from_email": "Oliver Queen",
            "to": [
                {
                    "email": "uxutd@gmail.com",
                    "name": "RECIPIENT NAME (OPTIONAL)",
                    "type": "to"
                }
            ],
            "autotext": "true",
            "subject": "Hey guys, CAN I STILL JOIN THE JUSTICE LEAGUE ?",
            "html": "EMAIL body here, and yes you can totally rock HTML content here."
        }
    };
    var http_request = new XMLHttpRequest();
    try{
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();
    }catch (e){
        // Internet Explorer Browsers
        try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }catch (e) {
            try{
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){
                // Something went wrong
                alert("Something went wrong, try again later");
                return false;
            }
        }
    }
    http_request.onreadystatechange = function(){
        if (http_request.readyState === 4 )
        {
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);


        }
    };
    http_request.open("GET", data_file, true);
    http_request.send(data_file);
}