
chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: Array.from({ length: 1000 }, (_, i) => i + 1), // clear old rules

    addRules: [
      // Generic ad patterns
      { id: 1, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads", resourceTypes: ["script","image","xmlhttprequest","sub_frame"] }},
      { id: 2, priority: 1, action: { type: "block" }, condition: { urlFilter: "adserver", resourceTypes: ["script","image","xmlhttprequest"] }},
      { id: 3, priority: 1, action: { type: "block" }, condition: { urlFilter: "banner", resourceTypes: ["image","script","xmlhttprequest","sub_frame"] }},
      { id: 4, priority: 1, action: { type: "block" }, condition: { urlFilter: "sponsor", resourceTypes: ["script","image","xmlhttprequest"] }},

      // Google / AdRoll
      { id: 5, priority: 1, action: { type: "block" }, condition: { urlFilter: "doubleclick.net", resourceTypes: ["script","image","xmlhttprequest","sub_frame"] }},
      { id: 6, priority: 1, action: { type: "block" }, condition: { urlFilter: "googlesyndication.com", resourceTypes: ["script","image","xmlhttprequest","sub_frame"] }},
      { id: 7, priority: 1, action: { type: "block" }, condition: { urlFilter: "adservice.google.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 8, priority: 1, action: { type: "block" }, condition: { urlFilter: "adroll.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Popups / Tracking
      { id: 9, priority: 1, action: { type: "block" }, condition: { urlFilter: "popads", resourceTypes: ["script","sub_frame"] }},
      { id: 10, priority: 1, action: { type: "block" }, condition: { urlFilter: "tracking", resourceTypes: ["script","xmlhttprequest"] }},

      // Flash banners
      { id: 11, priority: 1, action: { type: "block" }, condition: { urlFilter: ".swf", resourceTypes: ["object","sub_frame"] }},

      // Video ads
      { id: 12, priority: 1, action: { type: "block" }, condition: { urlFilter: "videoads", resourceTypes: ["media","xmlhttprequest"] }},
      { id: 13, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads/video", resourceTypes: ["media","xmlhttprequest"] }},

      // Yandex
      { id: 14, priority: 1, action: { type: "block" }, condition: { urlFilter: "an.yandex.ru", resourceTypes: ["script","image","xmlhttprequest","sub_frame"] }},
      { id: 15, priority: 1, action: { type: "block" }, condition: { urlFilter: "mc.yandex.ru", resourceTypes: ["script","xmlhttprequest","image"] }},
      { id: 16, priority: 1, action: { type: "block" }, condition: { urlFilter: "yandexadexchange.net", resourceTypes: ["script","image","xmlhttprequest","sub_frame"] }},
      { id: 17, priority: 1, action: { type: "block" }, condition: { urlFilter: "yandex.ru/ads", resourceTypes: ["script","image","xmlhttprequest","sub_frame"] }},
      { id: 18, priority: 1, action: { type: "block" }, condition: { urlFilter: "yandex.ru/clid", resourceTypes: ["xmlhttprequest","script"] }},

      // Apple
      { id: 19, priority: 1, action: { type: "block" }, condition: { urlFilter: "iadsdk.apple.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 20, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.apple.com", resourceTypes: ["script","xmlhttprequest","image"] }},
      { id: 21, priority: 1, action: { type: "block" }, condition: { urlFilter: "iad.apple.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Xiaomi
      { id: 22, priority: 1, action: { type: "block" }, condition: { urlFilter: "adv.sec.miui.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 23, priority: 1, action: { type: "block" }, condition: { urlFilter: "data.mistat.xiaomi.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 24, priority: 1, action: { type: "block" }, condition: { urlFilter: "api.ad.xiaomi.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Realme
      { id: 25, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.realme.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 26, priority: 1, action: { type: "block" }, condition: { urlFilter: "log.ad.realme.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Oppo
      { id: 27, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.heytapmobi.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Vivo
      { id: 28, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.vivo.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Samsung
      { id: 29, priority: 1, action: { type: "block" }, condition: { urlFilter: "config.samsungads.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 30, priority: 1, action: { type: "block" }, condition: { urlFilter: "gpm.samsungqbe.com", resourceTypes: ["script","xmlhttprequest"] }},

      // Lenovo
      { id: 31, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.lenovo.com", resourceTypes: ["script","image","xmlhttprequest"] }},

      // HP
      { id: 32, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.hpplay.cn", resourceTypes: ["script","image","xmlhttprequest"] }},

      // Dell
      { id: 33, priority: 1, action: { type: "block" }, condition: { urlFilter: "dellads.dell.com", resourceTypes: ["xmlhttprequest","script","image"] }},

      // ------------------------------
      // Additional popular networks for higher efficiency
      { id: 34, priority: 1, action: { type: "block" }, condition: { urlFilter: "cdn.taboola.com", resourceTypes: ["script","image","xmlhttprequest"] }},
      { id: 35, priority: 1, action: { type: "block" }, condition: { urlFilter: "cdn.outbrain.com", resourceTypes: ["script","image","xmlhttprequest"] }},
      { id: 36, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.pubmatic.com", resourceTypes: ["script","xmlhttprequest","image"] }},
      { id: 37, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.mopub.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 38, priority: 1, action: { type: "block" }, condition: { urlFilter: "ads.admob.com", resourceTypes: ["script","xmlhttprequest"] }},
      { id: 39, priority: 1, action: { type: "block" }, condition: { urlFilter: "propellerads.com", resourceTypes: ["script","sub_frame"] }},
      { id: 40, priority: 1, action: { type: "block" }, condition: { urlFilter: "popcash.net", resourceTypes: ["script","sub_frame"] }}
      
    ]
  });
});
