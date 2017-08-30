/**
 * querySelector wrapper
 *
 * @param {string} selector Selector to query
 * @param {Element} [scope] Optional scope element for the selector
 */
export function qs(selector, scope) {
  return (scope || document).querySelector(selector);
}
/**
 * addEventListener wrapper
 *
 * @param {Element|Window} target Target Element
 * @param {string} type Event name to bind to
 * @param {Function} callback Event callback
 * @param {boolean} [capture] Capture the event
 */
export function $on(target, type, callback, capture) {
  target.addEventListener(type, callback, !!capture);
}

/**
 * Attach a handler to an event for all elements matching a selector.
 *
 * @param {Element} target Element which the event must bubble to
 * @param {string} selector Selector to match
 * @param {string} type Event name
 * @param {Function} handler Function called when the event bubbles to target
 *                           from an element matching selector
 * @param {boolean} [capture] Capture the event
 */
export function $delegate(target, selector, type, handler, capture) {
  const dispatchEvent = event => {
    const targetElement = event.target;
    const potentialElements = target.querySelectorAll(selector);
    let i = potentialElements.length;

    while (i--) {
      if (potentialElements[i] === targetElement) {
        handler.call(targetElement, event);
        break;
      }
    }
  };

  $on(target, type, dispatchEvent, !!capture);
}

/**
 * Encode less-than and ampersand characters with entity codes to make user-
 * provided text safe to parse as HTML.
 *
 * @param {string} s String to escape
 *
 * @returns {string} String with unsafe characters escaped with entity codes
 */
export const escapeForHTML = s => s.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');

/**
 * Used to load JSONP url's and receive their data.
 *
 * @param {url?callback=yourfunc or &callback=yourfunc} url to load, contains the callback function parameter.
 *
 * @returns {JSON} Returns data from JSONP endpoint.
 */
export const $fetchJSONP = (unique => url =>
new Promise(rs => {
  const script = document.createElement('script');
const name = `_jsonp_${unique++}`;

if (url.match(/\?/)) {
  url += `&callback=${name}`;
} else {
  url += `?callback=${name}`;
}

script.src = url;
window[name] = json => {
  rs(new Response(JSON.stringify(json)));
  console.log('here');
  script.remove();
  delete window[name];
};

document.body.appendChild(script);
})
)(0);


export const $getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};


export function  getWeather(zip) {
  console.log(`Fetching: ${zip}`);
  let gravy = '45b608b94ef13a346b94101ef639d4cc'; // Scene of Sound
  let potatoes = `https://api.openweathermap.org/data/2.5/forecast?q=${zip},us&APPID=${gravy}`;

  var fetchHeaders = new Headers();
  var fetchInit = {
    method: 'GET',
    headers: fetchHeaders,
    cache: 'default'
  };

  var myRequest = new Request(potatoes, fetchInit);
  console.log('bark');


  fetch(myRequest)
    .then(
      (response)=> {
    if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' +
      response.status);
    return;
  }
  console.log('meow')
  response.json().then( (data) => {

   console.log(this);
});
  console.log('howl')
}
)
.catch(function (err) {
    console.log('Fetch Error : No fetch for you!');
  });
}