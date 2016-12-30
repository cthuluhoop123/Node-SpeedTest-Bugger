const speedTest = require('speedtest-net');
const test = speedTest({maxTime: 5000});

const Twit = require('twit')

const T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
})

var timer = setInterval(testing, 3600000)

function testing(){
  test.on('data', data => {
      if(data.speeds.download < 10){
          T.post('statuses/update', { status: 'Hey, I pay $70/M for 20Mbps down and 1Mbps up. Why am i getting ' +
          data.speeds.download + ' down and ' + data.speeds.upload + ' up? I am very disappointed.'}, function(err, data, response) {
        })
      }
  });
  test.on('error', err => {
    console.log(err);
  });
}
