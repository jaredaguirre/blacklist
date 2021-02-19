const clipboardy = require('clipboardy');
const ipRegex = require('ip-regex');

clipboardy.read()
    .then((text) => {
        let ip_list = text.match(ipRegex());
        if(ip_list.length == 0){
            console.log('Seems like there is not any IP on the clipboard!');
        }
        else{
            let proctorInput = '';

            for(let i = 0; i < ip_list.length ;i++){
                proctorInput += `${ip_list[i]},\n`;
            }

            clipboardy.writeSync(proctorInput);
            console.log('Copied to the clipboard: ');
            console.log(ip_list);
        }
    })
    .catch((text) => console.log(text))