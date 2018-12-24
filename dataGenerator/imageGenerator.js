import { writeFileSync } from 'fs';
var svg2img = require('svg2img');

export default function(params) {
  return new Promise(function(resolve) {
    const { dir, id, number } = params;
    svg2img(svg(params), { format: 'jpg', quality: 92 }, function(
      error,
      buffer,
    ) {
      writeFileSync(`${dir}/${id}_${number}.jpg`, buffer);
      resolve();
    });
  });
}

function svg(params) {
  const { batch, category, condition, number, title, id } = params;

  const _iconPath =
    batch === true
      ? '<path fill="#bbb" d="M138.713 46.131l.608.367.609-.367 9.124-5.497 5.844-3.52V16.14l-.733-.365-1.74-.866-13.104-6.524-13.103 6.524-1.741.866-.733.365v20.975l5.844 3.52zm4.753-24.545l-4.145 2.496-4.145-2.496-7.39-4.453 11.535-5.744 11.536 5.744zm-2.889 21.03V26.45l11.809-7.113v16.167zm-2.512-16.167v16.168l-11.809-7.114V19.335zM104.661 46.131l.609.367.609-.367 9.124-5.497 5.844-3.52V16.14l-.733-.365-1.74-.866-13.104-6.524-13.104 6.524-1.74.866-.734.365v20.975l5.845 3.52zm4.753-24.545l-4.144 2.496-4.145-2.496-7.39-4.453 11.535-5.744 11.536 5.744zm-2.888 21.03V26.45l11.809-7.113v16.167zm-2.513-16.167v16.168l-11.808-7.114V19.335zM137.986 88.684l.608.366.61-.366 9.123-5.497 5.845-3.52V58.692l-.734-.365-1.74-.866-13.104-6.524-13.103 6.523-1.741.866-.733.366v20.974l5.844 3.52zm4.753-24.546l-4.145 2.497-4.144-2.497-7.391-4.452 11.535-5.744 11.536 5.744zM139.85 85.17V69.002l11.808-7.113v16.167zm-2.513-16.168V85.17l-11.808-7.114V61.888zM103.935 88.684l.608.366.609-.366 9.124-5.497 5.844-3.52V58.692l-.733-.365-1.74-.866-13.104-6.524L91.44 57.46l-1.741.866-.733.366v20.974l5.844 3.52zm4.753-24.546l-4.145 2.497-4.145-2.497-7.39-4.452 11.535-5.744 11.536 5.744zm-2.889 21.032V69.002l11.809-7.113v16.167zm-2.512-16.168V85.17l-11.809-7.114V61.888z"/>'
      : '<path fill="#bbb" d="M119.607 83.756l1.148.656 1.15-.656 17.223-9.839 11.032-6.3V30.075l-1.385-.654-3.285-1.55-24.735-11.677L96.021 27.87l-3.286 1.55-1.384.654v37.542l11.032 6.301zm8.972-43.933l-7.824 4.468-7.823-4.468-13.951-7.97 21.774-10.28 21.776 10.28zm-5.452 37.643V48.528l22.29-12.732v28.938zm-4.743-28.938v28.938l-22.29-12.732V35.795z"/>';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="100">
  <rect width="100%" height="100%" fill="#eee"/>
  ${_iconPath}
  <text x="3" y="14" font-family="Arial" font-size="12px" fill="#666">${category}</text>
  <text x="94%" y="12" font-family="Arial" font-size="14px" fill="#333">${number}</text>
  <text x="5" y="36" font-family="Arial" font-size="14px" fill="#111">${title}</text>
  <text x="5" y="48" font-family="Arial" font-size="13px" fill="#444">${condition}</text>
  <text x="2" y="96%" font-family="Arial" font-size="10px" fill="#666">${id}</text>  
  
</svg>`;
}