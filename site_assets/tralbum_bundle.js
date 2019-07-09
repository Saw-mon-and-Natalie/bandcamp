/* 
    concatenation of 

    tpl_fan_tralbum, 
    share.js, 
    share2.js, 
    expando.js, 
    peekaboo_list.js, 
    shows.js, 
    discography.js, 
    tralbum_fixup_mobile.js, 
    peekaboo_text.js, 
    share_tralbum_phone.js, 
    autolyrics.js, 
    albumpage.js, 
    api.js, 
    tralbum_updater.js, 
    inventory_updater.js, 
    buy_full_discography_vm.js, 
    tralbumish.js, 
    artists_page.js, 
    tpl_label_band_selector, 
    band_selector.js, 
    grid_band_selector.js, 
    cart_vm.js, 
    cart.js, 
    please_wait_panel.js, 
    country_names.js, 
    country_list.js, 
    download_panel_vm.js, 
    gift_panel_vm.js, 
    download_panel.js, 
    geo.js, 
    fan_action.js, 
    payment_type_panel.js, 
    change_payment_method_vm.js, 
    change_payment_method_panel.js, 
    gift_panel.js, 
    currency_codes.js, 
    tpl_cart, 
    fan_tralbum.js, 
    collected_by.js, 
    tpl_share_tralbum_phone, 
    tralbum_collectors_api.js, 
    fan_tralbum_collectors.js, 
    tralbum_collectors.js, 
    video_element_wrapper.js, 
    video.js, 
    crossframe.js, 
    limits.js, 
    owner_streaming.js, 
    fan_controls_2.js, 
    recommendations_footer.js 
*/

/* ------------- tpl_fan_tralbum --------------- */

if ('undefined' === typeof window.Templ) {
    Log.server('Premature template registration: ' + ["fan/band_follow", "fan/band_follow_mailing_list_opt_in", "fan/band_first_follow_dialog", "limits/band_play_limits_dialog", "tralbum_common/share_collect_controls", "tralbum_common/share_embed_panel", "tralbum_common/tralbum_collect_controls", "tralbum_common/package_buy_button", "tralbum_common/you_own_this_package_css", "tralbum_common/you_own_this", "tralbum_common/tralbum_collectors", "fan/collection/grid/also_collected_by_deets", "fan/collection/grid/also_collected_by_review_innards", "fan/collection/grid/also_collected_by_no_review_innards", "_autocomplete_search_widget", "_tralbum_physical_gift_title", "menubar"], 'warn');
} else {
    Templ.register({
        "fan/band_follow": ["\n", {
            "blocks": [{
                "attachment": ["\n<button type=\"button\" class=\"follow-unfollow subscribed compound-button\">\n    <div>", {
                    "nodelist": ["Subscribed!"],
                    "type": "translate"
                }, "</div>\n</button>\n"],
                "expression": "is_subscribed ",
                "type": "ncondition"
            }, {
                "attachment": ["\n<a class=\"dismiss-link dismiss-tooltip\"></a>\n<button id=\"follow-unfollow\" type=\"button\" class=\"follow-unfollow", {
                    "blocks": [{
                        "attachment": [" following"],
                        "expression": "is_following ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " compound-button\">\n    <div>", {
                    "blocks": [{
                        "attachment": [{
                            "nodelist": ["Follow"],
                            "type": "translate"
                        }],
                        "expression": "!is_following ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "nodelist": ["Following"],
                            "type": "translate"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "</div>\n</button>\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n"],
        "fan/band_follow_mailing_list_opt_in": ["<div class=\"heading\">\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "nodelist": ["\n        You are now following ", {
                        "nodelist": [{
                            "filters": [["h", []]],
                            "name": "artist",
                            "type": "variable"
                        }],
                        "type": "translateVariable",
                        "var_name": "artist_name"
                    }, " and will receive a notification\n        whenever they release new music. Would you also like to join their mailing list, or their label’s mailing list?\n        "],
                    "type": "translate"
                }, "\n    "],
                "expression": "label ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        ", {
                    "nodelist": ["\n        You are now following ", {
                        "nodelist": [{
                            "filters": [["h", []]],
                            "name": "artist",
                            "type": "variable"
                        }],
                        "type": "translateVariable",
                        "var_name": "artist_name"
                    }, " and will receive a notification\n        whenever they release new music. Would you also like to join their mailing list?\n        "],
                    "type": "translate"
                }, "\n    "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n</div>\n", {
            "blocks": [{
                "attachment": ["\n<div class=\"notify-me-container\">\n    <div class=\"notify-me-inner first\">\n        <label for=\"notify-me-band\">\n            <input id=\"notify-me-band\" name=\"notify-me-band\" type=\"checkbox\" data-bind=\"checked: false\">\n            <div class=\"notify-me-message\">", {
                    "nodelist": ["Add me to the mailing list for ", {
                        "nodelist": [{
                            "filters": [["h", []]],
                            "name": "artist",
                            "type": "variable"
                        }],
                        "type": "translateVariable",
                        "var_name": "seller"
                    }, "."],
                    "type": "translate"
                }, "</div>\n        </label>\n    </div>\n    <div class=\"notify-me-inner\">\n        <label for=\"notify-me-label\">\n            <input id=\"notify-me-label\" name=\"notify-me-label\" type=\"checkbox\" data-bind=\"checked: false\">\n            <div class=\"notify-me-message\">", {
                    "nodelist": ["Add me to the mailing list for ", {
                        "nodelist": [{
                            "filters": [["h", []]],
                            "name": "label",
                            "type": "variable"
                        }],
                        "type": "translateVariable",
                        "var_name": "seller"
                    }, "."],
                    "type": "translate"
                }, "</div>\n        </label>\n    </div>\n</div>\n"],
                "expression": "label ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n<div class=\"email-abuse\">\n    ", {
            "nodelist": ["\n    Emails will be sent to ", {
                "nodelist": [{
                    "filters": [["h", []]],
                    "name": "email_address",
                    "type": "variable"
                }],
                "type": "translateVariable",
                "var_name": "email_address"
            }, ".\n    "],
            "type": "translate"
        }, "\n</div>\n"],
        "fan/band_first_follow_dialog": ["<div class=\"band-first-follow-message\">\n\n", {
            "blocks": [{
                "attachment": ["\n\t<div class=\"band-first-follow-image\">\n\t\t<img class=\"band-image\" alt=\"Band Profile Image\" title=\"", {
                    "filters": [["a", []]],
                    "name": "band_name",
                    "type": "variable"
                }, "\" ", {
                    "filters": [["image", ["41"]]],
                    "name": "band_image_id",
                    "type": "variable"
                }, " />\n\t</div>\n"],
                "expression": "(band_image_id) ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    ", {
            "nodelist": ["You’re now following ", {
                "filters": [["h", []]],
                "name": "band_name",
                "type": "variable"
            }, ", which means you’ll get an update in\n        your music feed whenever they release new music, and ", {
                "nodelist": ["<span class=\"fan-email\">", {
                    "filters": [["h", []]],
                    "name": "fan_email",
                    "type": "variable"
                }, "</span>"],
                "type": "translateVariable",
                "var_name": "email_address"
            }, " has\n        been added to their mailing list."],
            "type": "translate"
        }, "<br/><br/>\n\n    ", {
            "blocks": [{
                "attachment": [{
                    "nodelist": ["You can undo this action by tapping the Follow button again."],
                    "type": "translate"
                }],
                "expression": "is_mobile ",
                "type": "ncondition"
            }, {
                "attachment": [{
                    "nodelist": ["You can undo this action by clicking the Follow button again."],
                    "type": "translate"
                }],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n</div>"],
        "limits/band_play_limits_dialog": ["<div class=\"play-limits-dialog\">\n    <div class=\"play-limits-dialog-header\">\n\n    ", {
            "blocks": [{
                "attachment": ["\n        <div id=\"play-limits-dialog-fan-img\" style=\"background-image:url(", {
                    "filters": [["image_url", ["'fan_bio_thumb'"]]],
                    "name": "fan_image_id",
                    "type": "variable"
                }, ");\"></div>\n    "],
                "expression": "fan_image_id && (band_image_id  || tralbum_art_id) ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n        <div class=\"play-limits-dialog-heart\">\n            <img id=\"play-limits-dialog-heart-img\" src=\"", {
            "filters": [],
            "name": "static_siteroot",
            "type": "variable"
        }, "/img/heartbreak", {
            "blocks": [{
                "attachment": ["@2x"],
                "expression": "is_mobile ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, ".png\" />\n        </div>\n\n    ", {
            "blocks": [{
                "attachment": ["\n        <div id=\"play-limits-dialog-band-img\" style=\"background-image:url(", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [["image_url", ["'fan_bio_thumb'"]]],
                            "name": "band_image_id",
                            "type": "variable"
                        }],
                        "expression": "band_image_id ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [["art_url", ["'art_thumb'"]]],
                            "name": "tralbum_art_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, ");\"></div>\n    "],
                "expression": "fan_image_id && (band_image_id  || tralbum_art_id) ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    </div>\n    <h2>", {
            "nodelist": ["The time has come to open thy heart/wallet."],
            "type": "translate"
        }, "</h2>\n    <div class=\"play-limits-dialog-perks", {
            "blocks": [{
                "attachment": [" no-pkg-art"],
                "expression": "is_mobile || !tralbum_art_id ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n    \n    ", {
            "blocks": [{
                "attachment": ["\n        <div class=\"play-limits-dialog-pkg-art\">\n            <img class=\"pkg-image\" alt=\"", {
                    "filters": [["a", []]],
                    "name": "tralbum_title",
                    "type": "variable"
                }, "\" title=\"", {
                    "filters": [["a", []]],
                    "name": "tralbum_title",
                    "type": "variable"
                }, "\" ", {
                    "filters": [["art", ["'art_thumb'"]]],
                    "name": "tralbum_art_id",
                    "type": "variable"
                }, " />\n        </div>\n    "],
                "expression": "!is_mobile && tralbum_art_id ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "nodelist": ["\n            ", {
                        "nodelist": ["Buy this album to:"],
                        "type": "translate"
                    }, "\n        "],
                    "to": "buy_text",
                    "type": "capture"
                }, "\n    "],
                "expression": "purchase_type == 'album' ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        ", {
                    "nodelist": ["\n            ", {
                        "nodelist": ["Buy this track to:"],
                        "type": "translate"
                    }, "\n        "],
                    "to": "buy_text",
                    "type": "capture"
                }, "\n    "],
                "expression": "purchase_type == 'track' ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        ", {
                    "nodelist": ["\n            ", {
                        "nodelist": ["Buy this item to:"],
                        "type": "translate"
                    }, "\n        "],
                    "to": "buy_text",
                    "type": "capture"
                }, "\n    "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n        <div class=\"play-limits-dialog-bullets\">\n            <span class=\"play-limits-dialog-bullets-title\">", {
            "filters": [],
            "name": "buy_text",
            "type": "variable"
        }, "</span>\n            <ul>\n                <li><span>", {
            "nodelist": ["directly support ", {
                "nodelist": ["<span class=\"band-name\">", {
                    "filters": [["a", []]],
                    "name": "band_name",
                    "type": "variable"
                }, "</span>"],
                "type": "translateVariable",
                "var_name": "band_name"
            }, ""],
            "type": "translate"
        }, "</span></li>\n                <li><span>", {
            "nodelist": ["get unlimited streaming"],
            "type": "translate"
        }, "</span></li>\n                <li><span>", {
            "nodelist": ["get a high-quality download"],
            "type": "translate"
        }, "</span></li>\n            </ul>\n        </div>\n    </div>\n\n    <div class=\"play-limits-dialog-button-pane\">\n        <button id=\"play-limits-dialog-buy-btn\">", {
            "nodelist": ["Purchase info"],
            "type": "translate"
        }, "</button>\n        <button id=\"play-limits-dialog-cancel-btn\" class=\"weak\">", {
            "nodelist": ["No thanks"],
            "type": "translate"
        }, "</button>\n    </div>\n\n    ", {
            "blocks": [{
                "attachment": ["\n        <div class=\"play-limits-dialog-footer\">\n            <span>", {
                    "nodelist": ["Already own this? <a ", {
                        "nodelist": ["href=\"", {
                            "filters": [["h", []]],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "/login?from=ltnlgn\""],
                        "type": "translateVariable",
                        "var_name": "login_link"
                    }, ">Log in</a> to your fan account or <a ", {
                        "nodelist": ["href=\"", {
                            "filters": [["h", []]],
                            "name": "siteroot_https",
                            "type": "variable"
                        }, "/fans?from=ltnlrn\""],
                        "type": "translateVariable",
                        "var_name": "learn_link"
                    }, ">learn more</a>."],
                    "type": "translate"
                }, "</span>\n        </div>\n    "],
                "expression": "!logged_in ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n</div>\n"],
        "tralbum_common/share_collect_controls": ["\n\n\n<div class=\"share-collect-controls", {
            "blocks": [{
                "attachment": [" exclusive-case", {
                    "blocks": [{
                        "attachment": [" new-badged"],
                        "expression": "embed_info.exembed_is_new ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }],
                "expression": "embed_info.exclusive_embeddable ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n    <ul>\n        ", {
            "blocks": [{
                "attachment": ["\n        <li class=\"share-embed\">\n    \t\t<span class=\"bc-ui2 share-embed-icon\"></span>\n    \t\t<span class=\"share-embed-label\"><button type=\"button\">", {
                    "blocks": [{
                        "attachment": [{
                            "nodelist": ["Share / Embed / Exclusive"],
                            "type": "translate"
                        }],
                        "expression": "embed_info.exclusive_embeddable ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "nodelist": ["Share / Embed"],
                            "type": "translate"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "</button>\n            ", {
                    "blocks": [{
                        "attachment": [{
                            "blocks": [{
                                "attachment": ["<span class=\"newbadge\">", {
                                    "nodelist": ["new"],
                                    "type": "translate"
                                }, "</span>"],
                                "expression": "embed_info.exembed_is_new ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }],
                        "expression": "embed_info.exclusive_embeddable ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "</span>\n        </li>\n        "],
                "expression": "embed_info.public_embeddable ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        <li class=\"exclusive-embed\">\n            <span class=\"bc-ui2 share-embed-icon\"></span>\n            <span class=\"share-embed-label\"><button type=\"button\">", {
                    "nodelist": ["Exclusive Embed"],
                    "type": "translate"
                }, "</button></span>\n            ", {
                    "blocks": [{
                        "attachment": ["<span class=\"newbadge\">", {
                            "nodelist": ["new"],
                            "type": "translate"
                        }, "</span>"],
                        "expression": "embed_info.exembed_is_new ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        </li>\n        "],
                "expression": "embed_info.exclusive_embeddable ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        \n        ", {
            "blocks": [{
                "attachment": ["\n        <a id=\"collect-anchor\"></a>\n        "],
                "expression": "embed_info.public_embeddable || embed_info.no_track_preorder ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    </ul>    \n</div>"],
        "tralbum_common/share_embed_panel": ["\n<div class=\"share-embed-container\">\n  <div class=\"share-embed-container-indicator\"></div>\n  <div class=\"share-embed-container-inner\">\n\n    <div class=\"close round3\"><span class=\"bc-ui\">x</span></div>\n\n\n    \n    ", {
            "blocks": [{
                "attachment": ["\n      ", {
                    "nodelist": [{
                        "blocks": [{
                            "attachment": [" (@", {
                                "filters": [["a", []]],
                                "name": "twitter_username",
                                "type": "variable"
                            }, ")"],
                            "expression": "twitter_username ",
                            "type": "ncondition"
                        }],
                        "type": "ef"
                    }],
                    "to": "twitter_username",
                    "type": "capture"
                }, "\n      ", {
                    "blocks": [{
                        "attachment": ["\n      ", {
                            "nodelist": [{
                                "nodelist": ["omg best track ever", {
                                    "filters": [],
                                    "name": "twitter_username",
                                    "type": "variable"
                                }, ": "],
                                "type": "translate"
                            }],
                            "to": "tweet_text",
                            "type": "capture"
                        }, "\n      "],
                        "expression": "is_track ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n      ", {
                            "nodelist": [{
                                "nodelist": ["omg best album ever", {
                                    "filters": [],
                                    "name": "twitter_username",
                                    "type": "variable"
                                }, ": "],
                                "type": "translate"
                            }],
                            "to": "tweet_text",
                            "type": "capture"
                        }, "\n      "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n      \n      ", {
                    "nodelist": [{
                        "blocks": [{
                            "attachment": [{
                                "nodelist": ["Listen/download"],
                                "type": "translate"
                            }],
                            "expression": "download_pref == 1 ",
                            "type": "ncondition"
                        }, {
                            "attachment": [{
                                "nodelist": ["Listen/purchase"],
                                "type": "translate"
                            }],
                            "expression": "download_pref == 2 ",
                            "type": "ncondition"
                        }, {
                            "attachment": [{
                                "nodelist": ["Listen to"],
                                "type": "translate"
                            }],
                            "type": "else_ncondition"
                        }],
                        "type": "ef"
                    }, ": <a href=\"", {
                        "filters": [["a", []]],
                        "name": "linkback",
                        "type": "variable"
                    }, "\">", {
                        "nodelist": ["", {
                            "filters": [["h", []]],
                            "name": "title",
                            "type": "variable"
                        }, " by ", {
                            "filters": [["h", []]],
                            "name": "artist",
                            "type": "variable"
                        }, ""],
                        "type": "translate"
                    }, "</a>"],
                    "to": "tumblr_caption_html",
                    "type": "capture"
                }, "\n    <div class=\"share-buttons panel-section first\">\n      <ul class=\"share-buttons-list social-controls\" data-url=\"", {
                    "filters": [["a", []]],
                    "name": "linkback",
                    "type": "variable"
                }, "\">\n        <li class=\"facebook-like-ctrl\" data-stat=\"like_button\" data-stat-off=\"dislike_button\"></li>\n        <li class=\"twitter-ctrl btn\" data-text=\"", {
                    "filters": [["a", []]],
                    "name": "tweet_text",
                    "type": "variable"
                }, "\" data-stat=\"tweet_button\"></li>\n        <li class=\"tumblr-ctrl btn\" data-type=\"audio\" data-text=\"", {
                    "filters": [["a", []]],
                    "name": "tumblr_caption_html",
                    "type": "variable"
                }, "\" data-stat=\"tumblr_button\"></li>\n      </ul>\n    </div>\n    "],
                "expression": "enable_social_buttons ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n\n    \n    <div class=\"embed-other-services panel-section ", {
            "blocks": [{
                "attachment": ["first"],
                "expression": "!enable_social_buttons ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n      <a>", {
            "blocks": [{
                "attachment": [{
                    "nodelist": ["Embed this track"],
                    "type": "translate"
                }],
                "expression": "is_track ",
                "type": "ncondition"
            }, {
                "attachment": [{
                    "nodelist": ["Embed this album"],
                    "type": "translate"
                }],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "<div class=\"icons\"><div class=\"small bc-ui2\">", {
            "nodelist": ["small"],
            "type": "translate"
        }, "</div><div class=\"medium bc-ui2\">", {
            "nodelist": ["medium"],
            "type": "translate"
        }, "</div><div class=\"large bc-ui2\">", {
            "nodelist": ["large"],
            "type": "translate"
        }, "</div></div></a>\n    </div>\n\n    \n    ", {
            "blocks": [{
                "attachment": ["\n    <div class=\"embed-other-services-exclusive panel-section\">\n      <a>", {
                    "nodelist": ["Exclusive embed"],
                    "type": "translate"
                }, "</a>\n      <div class=\"hint\">\n      ", {
                    "blocks": [{
                        "attachment": ["\n      ", {
                            "nodelist": ["Exclusive embeds let blogs and websites stream tracks that you aren’t streaming on your public Bandcamp page."],
                            "type": "translate"
                        }, "\n      "],
                        "expression": "is_track ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n      ", {
                            "nodelist": ["Exclusive embeds let blogs and websites stream tracks that you aren’t streaming on your public album page."],
                            "type": "translate"
                        }, "\n      "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n    </div>\n   </div>\n   "],
                "expression": "embed_info.exclusive_embeddable ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    \n    \n    <div class=\"email-im-link panel-section\">\n      <dl>\n        \n        <dt>", {
            "nodelist": ["Email"],
            "type": "translate"
        }, "</dt>\n        <dd><input type=\"text\" value=\"", {
            "filters": [["a", []]],
            "name": "linkback",
            "type": "variable"
        }, "\" name=\"email-im-link\" class=\"email-im-link-text\"></dd>\n      </dl>\n    </div>\n\n  </div>\n</div>\n"],
        "tralbum_common/tralbum_collect_controls": ["\n\n", {
            "blocks": [{
                "attachment": ["\n  ", {
                    "nodelist": [{
                        "nodelist": ["Add this album to your wishlist"],
                        "type": "translate"
                    }],
                    "to": "add_this_title",
                    "type": "capture"
                }, "\n  ", {
                    "nodelist": [{
                        "nodelist": ["Remove this album from your wishlist"],
                        "type": "translate"
                    }],
                    "to": "remove_this_title",
                    "type": "capture"
                }, "\n"],
                "expression": "collect_item_type == 'album' ",
                "type": "ncondition"
            }, {
                "attachment": ["\n  ", {
                    "nodelist": [{
                        "nodelist": ["Add this track to your wishlist"],
                        "type": "translate"
                    }],
                    "to": "add_this_title",
                    "type": "capture"
                }, "\n  ", {
                    "nodelist": [{
                        "nodelist": ["Remove this track from your wishlist"],
                        "type": "translate"
                    }],
                    "to": "remove_this_title",
                    "type": "capture"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n<li id=\"collect-item\" class=\"", {
            "blocks": [{
                "attachment": ["wishlist"],
                "expression": "!is_collected || is_private_fan ",
                "type": "ncondition"
            }, {
                "attachment": ["purchased"],
                "expression": "is_purchased == true ",
                "type": "ncondition"
            }, {
                "attachment": ["wishlisted"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\">\n    <span id=\"wishlist-msg\" class=\"action compound-button\" title=\"", {
            "filters": [],
            "name": "add_this_title",
            "type": "variable"
        }, "\">\n        <span class=\"bc-ui2 collect-item-icon\"></span>\n        <span class=\"collect-msg\">\n            <span><a>", {
            "nodelist": ["Wishlist"],
            "type": "translate"
        }, "</a></span>\n        </span>\n    </span>\n    \n    <span id=\"wishlisted-msg\" class=\"compound-button\">\n        <span class=\"action\" title=\"", {
            "filters": [],
            "name": "remove_this_title",
            "type": "variable"
        }, "\">\n            <span class=\"bc-ui2 collect-item-icon\"></span>\n            <span class=\"collect-msg\">\n                <span><a>", {
            "nodelist": ["In Wishlist"],
            "type": "translate"
        }, "</a></span>\n            </span>\n        </span>\n        <span class=\"wishlist-wrapper\">\n            <a target=\"_blank\" class=\"view\" href=\"", {
            "filters": [["a", []]],
            "name": "fan_trackpipe_url",
            "type": "variable"
        }, "/wishlist\">\n                ", {
            "nodelist": ["view"],
            "type": "translate"
        }, "\n            </a>\n            <div class=\"signup-tooltip-outer wishlist-button-tooltip-outer\"></div>\n        </span>\n    </span>\n    \n    <span id=\"purchased-msg\" class=\"collect-msg compound-button\">\n        <span class=\"bc-ui2 collect-item-icon\"></span>\n        <span><a target=\"_blank\" href=\"", {
            "filters": [["a", []]],
            "name": "fan_trackpipe_url",
            "type": "variable"
        }, "\">", {
            "nodelist": ["You own this"],
            "type": "translate"
        }, "</a></span>\n    </span>\n</li>\n<div id=\"wishlist-alert\">\n    ", {
            "nodelist": ["Unable to save changes to your wishlist."],
            "type": "translate"
        }, "\n</div>\n"],
        "tralbum_common/package_buy_button": [{
            "blocks": [{
                "attachment": ["\n    ", {
                    "filters": [],
                    "name": "_buy_text",
                    "type": "variable"
                }, "&nbsp;\n"],
                "expression": "cant_buy_package ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "nodelist": ["\n            <button class=\"order_package_link buy-link ", {
                                "blocks": [{
                                    "attachment": ["subscriber-only-buy-link", {
                                        "blocks": [{
                                            "attachment": [" subscriber-view"],
                                            "expression": "is_pkg_subscriber || member_of_current_band ",
                                            "type": "ncondition"
                                        }],
                                        "type": "ef"
                                    }],
                                    "expression": "package.subscriber_only ",
                                    "type": "ncondition"
                                }],
                                "type": "ef"
                            }, "\" type=\"button\" data-pkg=\"", {
                                "filters": [["attr", []]],
                                "name": "package_index",
                                "type": "variable"
                            }, "\">\n                ", {
                                "filters": [],
                                "name": "_buy_text",
                                "type": "variable"
                            }, "\n            </button>&nbsp;\n        "],
                            "to": "_buy_button_inner",
                            "type": "capture"
                        }, "\n    "],
                        "expression": "!package_sold_out ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    \n    ", {
                    "blocks": [{
                        "attachment": ["\n        <a class=\"buy-link subscribe-link\" data-pkg=\"", {
                            "filters": [["attr", []]],
                            "name": "package_index",
                            "type": "variable"
                        }, "\" href=\"", {
                            "filters": [["band_url", []], ["a", []]],
                            "name": "pkg_sub.url_bits",
                            "type": "variable"
                        }, "/", {
                            "filters": [],
                            "name": "pkg_sub.url_fragment",
                            "type": "variable"
                        }, "\">", {
                            "filters": [],
                            "name": "_buy_text",
                            "type": "variable"
                        }, "</a>\n        ", {
                            "filters": [],
                            "name": "_buy_button_inner",
                            "type": "variable"
                        }, "\n    "],
                        "expression": "package.subscriber_only && !(is_pkg_subscriber || member_of_current_band) ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        ", {
                            "filters": [],
                            "name": "_buy_button_inner",
                            "type": "variable"
                        }, "\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }],
        "tralbum_common/you_own_this_package_css": ["<style>\n", {
            "attribs": {},
            "collection_name": "packages_data",
            "nodelist": ["\n    ", {
                "expression": "forloop.index0 ",
                "type": "let",
                "variable": "package_index"
            }, "\n    ", {
                "expression": "(package.quantity_warning && package.quantity_available <= 0) || (package.quantity_limits && package.quantity_limits <= 0) ",
                "type": "let",
                "variable": "sold_out"
            }, "\n\n    ", {
                "blocks": [{
                    "attachment": ["\n        .owns-p-", {
                        "filters": [],
                        "name": "package.id",
                        "type": "variable"
                    }, " #package-price-", {
                        "filters": [],
                        "name": "package.id",
                        "type": "variable"
                    }, " .you-own-this.physical,\n        .owns-p-", {
                        "filters": [],
                        "name": "package.id",
                        "type": "variable"
                    }, " #package-price-", {
                        "filters": [],
                        "name": "package.id",
                        "type": "variable"
                    }, " .compound-button.buy-again-wrapper {\n            display: block;\n        }\n        .owns-p-", {
                        "filters": [],
                        "name": "package.id",
                        "type": "variable"
                    }, " #package-price-", {
                        "filters": [],
                        "name": "package.id",
                        "type": "variable"
                    }, " .compound-button.main-button {\n            display: none;\n        }\n    "],
                    "expression": "!sold_out ",
                    "type": "ncondition"
                }],
                "type": "ef"
            }, "\n"],
            "reversed": null,
            "type": "for",
            "variable_name": "package"
        }, "\n</style>"],
        "tralbum_common/you_own_this": [{
            "expression": "(you_own_this_type == 'digital' || you_own_this_type == 'buyfulldisco') ",
            "type": "let",
            "variable": "link_to_collection"
        }, "\n\n", {
            "expression": "false ",
            "type": "let",
            "variable": "buy_again_link"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "blocks": [{
                        "attachment": ["\n            ", {
                            "nodelist": ["\n                \n                <button class='download-link buy-link buy-again' type=\"button\">Buy again (admin)</button>\n            "],
                            "to": "buy_again_link",
                            "type": "capture"
                        }, "\n        "],
                        "expression": "is_admin ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n            ", {
                            "nodelist": ["\n                \n                <button class='download-link buy-link buy-again' type=\"button\">Buy again (dev)</button>\n            "],
                            "to": "buy_again_link",
                            "type": "capture"
                        }, "\n        "],
                        "expression": "env == 'dev' ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n            ", {
                            "nodelist": ["\n                \n                <button class='download-link buy-link buy-again' type=\"button\">Buy again (staging)</button>\n            "],
                            "to": "buy_again_link",
                            "type": "capture"
                        }, "\n        "],
                        "expression": "env == 'staging' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "you_own_this_type",
                "operator": "==",
                "right": "'digital'",
                "type": "condition"
            }, {
                "attachment": ["\n        ", {
                    "nodelist": ["\n            ", {
                        "template_name": "'tralbum_common/package_buy_button'",
                        "type": "include"
                    }, "\n        "],
                    "to": "buy_again_link",
                    "type": "capture"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "you_own_this_type",
                "operator": "==",
                "right": "'physical'",
                "type": "condition"
            }, {
                "attachment": ["\n        ", {
                    "blocks": [{
                        "attachment": ["\n            ", {
                            "nodelist": ["\n                \n                <button class='buy-link buy-again' type=\"button\" data-bind=\"click: fullDiscographyBuyDialog\">Buy again (admin)</button>\n            "],
                            "to": "buy_again_link",
                            "type": "capture"
                        }, "\n        "],
                        "expression": "is_admin ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n            ", {
                            "nodelist": ["\n                \n                <button class='buy-link buy-again' type=\"button\" data-bind=\"click: fullDiscographyBuyDialog\">Buy again (dev)</button>\n            "],
                            "to": "buy_again_link",
                            "type": "capture"
                        }, "\n        "],
                        "expression": "env == 'dev' ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n            ", {
                            "nodelist": ["\n                \n                <button class='buy-link buy-again' type=\"button\" data-bind=\"click: fullDiscographyBuyDialog\">Buy again (staging)</button>\n            "],
                            "to": "buy_again_link",
                            "type": "capture"
                        }, "\n        "],
                        "expression": "env == 'staging' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "you_own_this_type",
                "operator": "==",
                "right": "'buyfulldisco'",
                "type": "condition"
            }, {
                "attachment": ["\n        ", {
                    "nodelist": ["\n            <a href=\"", {
                        "filters": [["a", []]],
                        "name": "crowdfunding_campaign_data.url",
                        "type": "variable"
                    }, "\" class=\"crowdfunding-view-pledge\">", {
                        "nodelist": ["view pledge"],
                        "type": "translate"
                    }, "</a>\n        "],
                    "to": "view_pledge_link",
                    "type": "capture"
                }, "\n"],
                "child_condition": null,
                "child_relation": null,
                "left": "you_own_this_type",
                "operator": "==",
                "right": "'crowdfunding-campaign'",
                "type": "condition"
            }],
            "type": "case"
        }, "\n\n<h3 class=\"you-own-this ", {
            "filters": [],
            "name": "you_own_this_type",
            "type": "variable"
        }, "\">\n    <span class=\"bc-ui2 you-own-this-icon\"></span>\n    <span>\n        ", {
            "blocks": [{
                "attachment": ["\n            ", {
                    "nodelist": ["You pledged ", {
                        "filters": [["money", ["2"]], ["h", []]],
                        "name": "pledge_amount",
                        "type": "variable"
                    }, ""],
                    "type": "translate"
                }, "\n        "],
                "expression": "you_own_this_type == 'crowdfunding-campaign' ",
                "type": "ncondition"
            }, {
                "attachment": ["\n            ", {
                    "blocks": [{
                        "attachment": ["<a class=\"you-own-this-link\" target=\"_blank\" href=\"", {
                            "filters": [["a", []]],
                            "name": "tralbum_collect_info.fan_trackpipe_url",
                            "type": "variable"
                        }, "\">"],
                        "expression": "link_to_collection ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, {
                    "nodelist": ["You own this"],
                    "type": "translate"
                }, {
                    "blocks": [{
                        "attachment": ["</a>"],
                        "expression": "link_to_collection ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n    </span>\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "filters": [],
                    "name": "buy_again_link",
                    "type": "variable"
                }, "\n    "],
                "expression": "buy_again_link && !is_phone ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        ", {
                    "filters": [],
                    "name": "view_pledge_link",
                    "type": "variable"
                }, "\n    "],
                "expression": "view_pledge_link && !is_phone ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n</h3>\n", {
            "blocks": [{
                "attachment": ["\n    <h4 class=\"compound-button buy-again-wrapper\">", {
                    "filters": [],
                    "name": "buy_again_link",
                    "type": "variable"
                }, "</h4>\n"],
                "expression": "buy_again_link && is_phone ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    <h4 class=\"compound-button buy-again-wrapper\">", {
                    "filters": [],
                    "name": "view_pledge_link",
                    "type": "variable"
                }, "</h4>\n"],
                "expression": "view_pledge_link && is_phone ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n\n"],
        "tralbum_common/tralbum_collectors": [{
            "expression": "thumbs.length ",
            "type": "let",
            "variable": "max_thumbs"
        }, "\n\n", {
            "attribs": {},
            "collection_name": "reviews",
            "nodelist": ["\n\t", {
                "expression": "forloop.index ",
                "type": "let",
                "variable": "loop_index"
            }, "\n    ", {
                "template_name": "'fan/collection/grid/also_collected_by_review_innards'",
                "type": "include"
            }, "\n"],
            "reversed": null,
            "type": "for",
            "variable_name": "review"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    <a class=\"more-writing\">", {
                    "nodelist": ["more..."],
                    "type": "translate"
                }, "</a>\n    <span class=\"loading loading-writing\" style=\"display: none;\"></span>\n"],
                "expression": "more_reviews_available ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n<div class=\"no-writing\">\n", {
            "attribs": {},
            "collection_name": "thumbs",
            "nodelist": ["\n\t", {
                "expression": "forloop.index ",
                "type": "let",
                "variable": "loop_index"
            }, "\n    ", {
                "template_name": "'fan/collection/grid/also_collected_by_no_review_innards'",
                "type": "include"
            }, "\n"],
            "reversed": null,
            "type": "for",
            "variable_name": "fan"
        }, "\n</div>\n\n", {
            "blocks": [{
                "attachment": ["\n\t<a class=\"more-thumbs\">", {
                    "nodelist": ["more..."],
                    "type": "translate"
                }, "</a>\n\t<span class=\"loading loading-thumbs\" style=\"display: none;\"></span>\n"],
                "expression": "more_thumbs_available ",
                "type": "ncondition"
            }],
            "type": "ef"
        }],
        "fan/collection/grid/also_collected_by_deets": [{
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "6 ",
                    "type": "let",
                    "variable": "max_reviews"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n         ", {
                            "expression": "3 ",
                            "type": "let",
                            "variable": "max_reviews"
                        }, "\n    "],
                        "expression": "reviews.length > max_reviews ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "expression": "!max_reviews ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "expression": "0 ",
            "type": "let",
            "variable": "num_reviews_shown"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "80 ",
                    "type": "let",
                    "variable": "max_thumbs"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n         ", {
                            "expression": "50 ",
                            "type": "let",
                            "variable": "max_thumbs"
                        }, "\n    "],
                        "expression": "no_reviews.length > max_thumbs ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "expression": "!max_thumbs ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "expression": "0 ",
            "type": "let",
            "variable": "num_thumbs_shown"
        }, "\n\n", {
            "attribs": {
                "limit": "max_reviews"
            },
            "collection_name": "reviews",
            "nodelist": ["\n    ", {
                "expression": "forloop.index ",
                "type": "let",
                "variable": "loop_index"
            }, "\n    ", {
                "template_name": "'fan/collection/grid/also_collected_by_review_innards'",
                "type": "include"
            }, "\n    ", {
                "expression": "num_reviews_shown + 1 ",
                "type": "let",
                "variable": "num_reviews_shown"
            }, "\n"],
            "reversed": null,
            "type": "for",
            "variable_name": "review"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    <a class=\"more-writing\">", {
                    "nodelist": ["more..."],
                    "type": "translate"
                }, "</a>\n"],
                "expression": "reviews.length > max_reviews && !single_toggle ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n<div class=\"no-writing\">\n", {
            "attribs": {
                "limit": "max_thumbs"
            },
            "collection_name": "no_reviews",
            "nodelist": ["\n    ", {
                "expression": "forloop.index ",
                "type": "let",
                "variable": "loop_index"
            }, "\n    ", {
                "template_name": "'fan/collection/grid/also_collected_by_no_review_innards'",
                "type": "include"
            }, "\n    ", {
                "expression": "num_thumbs_shown + 1 ",
                "type": "let",
                "variable": "num_thumbs_shown"
            }, "\n"],
            "reversed": null,
            "type": "for",
            "variable_name": "fan"
        }, "\n\n", {
            "expression": "reviews.length + no_reviews.length ",
            "type": "let",
            "variable": "num_total"
        }, "\n", {
            "expression": "num_reviews_shown + num_thumbs_shown ",
            "type": "let",
            "variable": "num_shown"
        }, "\n", {
            "blocks": [{
                "attachment": ["\n", {
                    "expression": "num_total - num_shown ",
                    "type": "let",
                    "variable": "total_to_display"
                }, "\n<a class=\"more-everything\" \n   data-more-reviews=\"", {
                    "blocks": [{
                        "attachment": ["true"],
                        "expression": "num_reviews_shown < reviews.length ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["false"],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" \n   data-more-thumbs=\"", {
                    "blocks": [{
                        "attachment": ["true"],
                        "expression": "num_thumbs_shown < no_reviews.length ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["false"],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\">\n\t", {
                    "blocks": [{
                        "attachment": ["and 1 other"],
                        "expression": "total_to_display== 1",
                        "type": "ncondition"
                    }, {
                        "attachment": ["and ", {
                            "filters": [["h", []]],
                            "name": "total_to_display",
                            "type": "variable"
                        }, " others"],
                        "type": "else_ncondition"
                    }],
                    "type": "translatePlural"
                }, "\n</a>\n"],
                "expression": "single_toggle && num_shown < num_total ",
                "type": "ncondition"
            }, {
                "attachment": ["\n<a class=\"ellipsis show-more\">\n    <div class=\"ellipsis-bg\"></div>\n    <div class=\"ellipsis-text\">&hellip;</div>\n</a>\n"],
                "expression": "show_more_collectors ",
                "type": "ncondition"
            }, {
                "attachment": ["\n<a class=\"more-thumbs\">", {
                    "nodelist": ["more..."],
                    "type": "translate"
                }, "</a>\n"],
                "expression": "no_reviews.length > max_thumbs ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n</div>\n"],
        "fan/collection/grid/also_collected_by_review_innards": ["<div class=\"writing\">\n    <a class=\"pic\" href=\"", {
            "filters": [["fan_page_url", []], ["a", []]],
            "name": "review.username",
            "type": "variable"
        }, "?from=", {
            "filters": [["a", []]],
            "name": "from_parm",
            "type": "variable"
        }, "\">\n        ", {
            "blocks": [{
                "attachment": ["\n        <div class=\"tooltip\">\n            <div class=\"round3\">\n                <img class=\"grid lazy\" src=\"/img/0.gif\" data-original=\"", {
                    "filters": [["image_url", ["50"]]],
                    "name": "review.image_id",
                    "type": "variable"
                }, "\" style=\"display: inline-block;\"/>\n                <div class=\"name\">", {
                    "filters": [["h", []]],
                    "name": "review.name",
                    "type": "variable"
                }, "</div>\n            </div>\n        </div>\n        "],
                "expression": "show_tooltips ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        ", {
            "blocks": [{
                "attachment": ["\n        <img class=\"thumb lazy\" src=\"/img/0.gif\" data-original=\"", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [["image_url", ["50"]]],
                            "name": "review.image_id",
                            "type": "variable"
                        }],
                        "expression": "is_phone ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [["image_url", ["42"]]],
                            "name": "review.image_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" style=\"display: inline-block\" alt=\"", {
                    "filters": [["a", []]],
                    "name": "review.name",
                    "type": "variable"
                }, " thumbnail\">\n        "],
                "expression": "loop_index > 20 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        <img class=\"thumb\" src=\"", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [["image_url", ["50"]]],
                            "name": "review.image_id",
                            "type": "variable"
                        }],
                        "expression": "is_phone ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [["image_url", ["42"]]],
                            "name": "review.image_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" alt=\"", {
                    "filters": [["a", []]],
                    "name": "review.name",
                    "type": "variable"
                }, " thumbnail\"/>\n        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n    </a>\n    <div class=\"text\">\n        ", {
            "blocks": [{
                "attachment": ["\n            <a class=\"censor round3\"\n                data-fan-id=\"", {
                    "filters": [["a", []]],
                    "name": "review.fan_id",
                    "type": "variable"
                }, "\"\n                data-item-type=\"", {
                    "filters": [["a", []]],
                    "name": "review.item_type",
                    "type": "variable"
                }, "\"\n                data-item-id=\"", {
                    "filters": [["a", []]],
                    "name": "review.item_id",
                    "type": "variable"
                }, "\"\n                data-fan-name=\"", {
                    "filters": [["a", []]],
                    "name": "review.name",
                    "type": "variable"
                }, "\"\n            >\n                X\n            </a>\n        "],
                "expression": "member_of_current_band ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        <a class=\"name notSkinnable\" href=\"", {
            "filters": [["fan_page_url", []], ["a", []]],
            "name": "review.username",
            "type": "variable"
        }, "?from=", {
            "filters": [["a", []]],
            "name": "from_parm",
            "type": "variable"
        }, "\">", {
            "filters": [["h", []]],
            "name": "review.name",
            "type": "variable"
        }, "</a>\n        ", {
            "filters": [["html_autolink", ["'target=\"_blank\"'"]], ["newline_to_gap", []]],
            "name": "review.why",
            "type": "variable"
        }, "\n        ", {
            "blocks": [{
                "attachment": ["\n            <span class=\"fav-track\">", {
                    "nodelist": ["Favorite track: ", {
                        "nodelist": [{
                            "filters": [["h", []]],
                            "name": "review.fav_track_title",
                            "type": "variable"
                        }],
                        "type": "translateVariable",
                        "var_name": "fave_track"
                    }, "."],
                    "type": "translate"
                }, "</span>\n        "],
                "expression": "review.fav_track_title ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n</div>\n"],
        "fan/collection/grid/also_collected_by_no_review_innards": ["<a class=\"fan pic", {
            "blocks": [{
                "attachment": [" just"],
                "expression": "fan.why ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\" href=\"", {
            "filters": [["fan_page_url", []], ["a", []]],
            "name": "fan.username",
            "type": "variable"
        }, "?from=", {
            "filters": [["a", []]],
            "name": "from_parm",
            "type": "variable"
        }, "\">\n    ", {
            "blocks": [{
                "attachment": ["\n    <div class=\"tooltip\">\n        <div class=\"round3\">\n        \t<img class=\"grid lazy\" src=\"/img/0.gif\" data-original=\"", {
                    "filters": [["image_url", ["50"]]],
                    "name": "fan.image_id",
                    "type": "variable"
                }, "\" style=\"display: inline-block;\"/>\n            <div class=\"name\">", {
                    "filters": [["h", []]],
                    "name": "fan.name",
                    "type": "variable"
                }, "</div>\n            ", {
                    "blocks": [{
                        "attachment": ["\n            <div class=\"writing\">\n                &ldquo;", {
                            "filters": [],
                            "name": "fan.why",
                            "type": "variable"
                        }, "&rdquo;\n            </div>\n            "],
                        "expression": "fan.why ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        </div>\n    </div>\n    "],
                "expression": "show_tooltips ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    ", {
            "blocks": [{
                "attachment": ["\n    <div class=\"just-icon-bg\"></div>\n    <div class=\"just-icon\">&ldquo;</div>\n    "],
                "expression": "fan.why ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    ", {
            "blocks": [{
                "attachment": ["\n    <img class=\"thumb lazy\" src=\"/img/0.gif\" data-original=\"", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [["image_url", ["50"]]],
                            "name": "fan.image_id",
                            "type": "variable"
                        }],
                        "expression": "is_phone ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [["image_url", ["42"]]],
                            "name": "fan.image_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" style=\"display: inline-block\" alt=\"", {
                    "filters": [["a", []]],
                    "name": "fan.name",
                    "type": "variable"
                }, " thumbnail\">\n    "],
                "expression": "loop_index > max_thumbs ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    <img class=\"thumb\" src=\"", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [["image_url", ["50"]]],
                            "name": "fan.image_id",
                            "type": "variable"
                        }],
                        "expression": "is_phone ",
                        "type": "ncondition"
                    }, {
                        "attachment": [{
                            "filters": [["image_url", ["42"]]],
                            "name": "fan.image_id",
                            "type": "variable"
                        }],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" alt=\"", {
                    "filters": [["a", []]],
                    "name": "fan.name",
                    "type": "variable"
                }, " thumbnail\"/>\n    "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n</a>\n"],
        "_autocomplete_search_widget": [{
            "blocks": [{
                "attachment": ["\n<div id=\"autocomplete-discover\" data-bind=\"css: {'autocompleted': showDiscover}\" class=\"header-rework-2018\">\n    <a class=\"discover-link best-selling\" data-bind=\"click: function () { discoverJumpRedirect('all'); }\">\n        <div>", {
                    "nodelist": ["best selling"],
                    "type": "translate"
                }, "</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link rock\" data-bind=\"click: function () { discoverJumpRedirect('rock'); }\">\n        <div>rock</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link hip-hop\" data-bind=\"click: function () { discoverJumpRedirect('hip-hop-rap'); }\">\n        <div>hip-hop/rap</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link alternative\" data-bind=\"click: function () { discoverJumpRedirect('alternative'); }\">\n        <div>alternative</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link electronic\" data-bind=\"click: function () { discoverJumpRedirect('electronic'); }\">\n        <div>electronic</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link metal\" data-bind=\"click: function () { discoverJumpRedirect('metal'); }\">\n        <div>metal</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link experimental\" data-bind=\"click: function () { discoverJumpRedirect('experimental'); }\">\n        <div>experimental</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link pop\" data-bind=\"click: function () { discoverJumpRedirect('pop'); }\">\n        <div>pop</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"discover-link\" data-bind=\"click: function () { discoverJumpRedirect('all'); }\">\n        <div>", {
                    "nodelist": ["view more"],
                    "type": "translate"
                }, "</div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n</div>\n"],
                "expression": "cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n<div id=\"autocomplete-results\" ", {
            "blocks": [{
                "attachment": ["class=\"fade-in\""],
                "expression": "!cfg.header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": ["class=\"header-rework-2018\""],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, " data-bind=\"css: {'autocompleted': show}\" class=\"", {
            "blocks": [{
                "attachment": ["header-rework-2018"],
                "expression": "cfg.header_rework_2018 ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n    <a class=\"results-genre\" href=\"\" data-bind=\"visible: genreName, click: discoverGenre\">\n        <div class=\"genre-label\" data-bind=\"visible: genreName\">\n            ", {
            "nodelist": ["Explore ", {
                "nodelist": ["<span data-bind=\"text: genreName\"></span>"],
                "type": "translateVariable",
                "var_name": "genre"
            }, " music "],
            "type": "translate"
        }, "\n        </div>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <p class=\"results-label\" data-bind=\"visible: genreName\">", {
            "nodelist": ["Or browse results titled ", {
                "nodelist": ["<span data-bind=\"text: genreName\"></span>"],
                "type": "translateVariable",
                "var_name": "genre"
            }, ":"],
            "type": "translate"
        }, "</p>\n    <ul id=\"autocomplete-result-item\" class=\"results-list\" data-bind=\"css:{'tag-room': tagUrl}, foreach: autocompleteResults\">\n        <li class=\"results-item\" data-bind=\"attr: {id: 'results-item-' + $index()}\">\n            <a data-bind=\"attr:{href: url}\">\n                <div class=\"results-art\" data-bind=\"css: {'blank-img': noImg, 'square': !artType, 'package-thumb': artType, 'round': roundArt}\">\n                <!-- ko if: !noImg -->\n                    <img data-bind=\"attr: {src: img}, css: {'round': roundArt}\"></img>\n                <!-- /ko -->\n                </div>\n                <div class=\"results-info\">\n                    <span class=\"results-title\" data-bind=\"text: name\"></span>\n                    <p class=\"results-name\">\n                    <span data-bind=\"visible: bandName\">", {
            "nodelist": ["by ", {
                "nodelist": ["<span data-bind=\"text: bandName\"></span>"],
                "type": "translateVariable",
                "var_name": "artist_name"
            }, ""],
            "type": "translate"
        }, "</span><span data-bind=\"visible: !bandName\"><span data-bind=\"text: bandName\"></span></p>\n                    <span class=\"results-type\" data-bind=\"text: typeText\"></span>\n                </div>\n            </a>\n        </li>\n    </ul>\n    <a class=\"see-all\" id=\"see-all\" href=\"\" data-bind=\"visible: hasAutocompleteResults\">\n        ", {
            "nodelist": ["See all results"],
            "type": "translate"
        }, "\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n    <a class=\"autocomplete-tags\" id=\"autocomplete-tags\" data-bind=\"attr:{href: tagUrl}, visible: tagUrl\">\n        <span class=\"tag-label\">", {
            "nodelist": ["Music tagged with"],
            "type": "translate"
        }, " </span>\n        <span class=\"tag\" data-bind=\"text: tagName\"></span>\n        <div class=\"shape-container\">\n            <span class=\"arrow\"></span>\n        </div>\n    </a>\n</div>\n"],
        "_tralbum_physical_gift_title": [{
            "blocks": [{
                "attachment": ["\n    ", {
                    "nodelist": ["Gift – CD, ", {
                        "filters": [],
                        "name": "merch_title",
                        "type": "variable"
                    }, ""],
                    "type": "translate"
                }, "\n"],
                "expression": "merch_type == 1 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "nodelist": ["Gift – Vinyl, ", {
                        "filters": [],
                        "name": "merch_title",
                        "type": "variable"
                    }, ""],
                    "type": "translate"
                }, "\n"],
                "expression": "merch_type == 2 || merch_type == 15 || merch_type == 16 || merch_type == 17 || merch_type == 18 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "nodelist": ["Gift - Cassette, ", {
                        "filters": [],
                        "name": "merch_title",
                        "type": "variable"
                    }, ""],
                    "type": "translate"
                }, "\n"],
                "expression": "merch_type == 3 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "nodelist": ["Gift – ", {
                        "filters": [],
                        "name": "merch_title",
                        "type": "variable"
                    }, ""],
                    "type": "translate"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n"],
        "menubar": ["\n\n\n\n", {
            "expression": "!menubar.force_no_control && (page_identities.is_page_band_member || page_identities.is_admin) ",
            "type": "let",
            "variable": "has_full_access"
        }, "\n", {
            "expression": "page_identities.page_band_parent_label_id && !page_identities.page_band.authed ",
            "type": "let",
            "variable": "has_limited_access"
        }, "\n", {
            "expression": "has_full_access || has_limited_access ",
            "type": "let",
            "variable": "has_access"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "page_identities.bands[0] ",
                    "type": "let",
                    "variable": "b"
                }, "\n    ", {
                    "expression": "b.name ",
                    "type": "let",
                    "variable": "artistsmenu_title"
                }, "\n    ", {
                    "expression": "true ",
                    "type": "let",
                    "variable": "artistsmenu_show_photo"
                }, "\n    ", {
                    "expression": "b.photo ",
                    "type": "let",
                    "variable": "artistsmenu_photo"
                }, "\n    ", {
                    "expression": "b.is_pro ",
                    "type": "let",
                    "variable": "artistsmenu_show_pro"
                }, "\n"],
                "expression": "page_identities.bands.length >= 1 ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "\"artists\" ",
                    "type": "let",
                    "variable": "artistsmenu_title"
                }, "\n    ", {
                    "expression": "false ",
                    "type": "let",
                    "variable": "artistsmenu_show_photo"
                }, "\n    ", {
                    "expression": "nil ",
                    "type": "let",
                    "variable": "artistsmenu_photo"
                }, "\n    ", {
                    "expression": "menubar.any_pro ",
                    "type": "let",
                    "variable": "artistsmenu_show_pro"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "\"\" ",
                    "type": "let",
                    "variable": "hide_unless_has_full_access"
                }, "\n"],
                "expression": "page_identities.page_band && has_full_access ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "\"hidden-while-loading\" ",
                    "type": "let",
                    "variable": "hide_unless_has_full_access"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "\"\" ",
                    "type": "let",
                    "variable": "hide_unless_has_access"
                }, "\n    ", {
                    "expression": "\"hidden-while-loading\" ",
                    "type": "let",
                    "variable": "hide_if_has_access"
                }, "\n"],
                "expression": "page_identities.page_band && has_access ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "\"hidden-while-loading\" ",
                    "type": "let",
                    "variable": "hide_unless_has_access"
                }, "\n    ", {
                    "expression": "\"\" ",
                    "type": "let",
                    "variable": "hide_if_has_access"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "\"\" ",
                    "type": "let",
                    "variable": "hide_if_not_logged_in_label"
                }, "\n    ", {
                    "expression": "\"hidden-while-loading\" ",
                    "type": "let",
                    "variable": "hide_if_logged_in_label"
                }, "\n"],
                "expression": "page_identities.page_band && page_identities.page_band.is_label && has_full_access ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "\"hidden-while-loading\" ",
                    "type": "let",
                    "variable": "hide_if_not_logged_in_label"
                }, "\n    ", {
                    "expression": "\"\" ",
                    "type": "let",
                    "variable": "hide_if_logged_in_label"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "expression": "false ",
                            "type": "let",
                            "variable": "wide"
                        }, "\n        ", {
                            "expression": "true ",
                            "type": "let",
                            "variable": "extra_wide"
                        }, "\n    "],
                        "expression": "menubar.unshipped_order_count && menubar.unshipped_order_count >= 10 ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        ", {
                            "expression": "true ",
                            "type": "let",
                            "variable": "wide"
                        }, "\n        ", {
                            "expression": "false ",
                            "type": "let",
                            "variable": "extra_wide"
                        }, "\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "expression": "page_identities.page_band && page_identities.page_band.is_label && menubar.artist_subscriptions_enabled ",
                "type": "ncondition"
            }, {
                "attachment": ["\n        ", {
                    "expression": "false ",
                    "type": "let",
                    "variable": "wide"
                }, "\n        ", {
                    "expression": "true ",
                    "type": "let",
                    "variable": "extra_wide"
                }, "\n"],
                "expression": "!hide_search && page_identities.fan ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "false ",
                    "type": "let",
                    "variable": "wide"
                }, "\n    ", {
                    "expression": "false ",
                    "type": "let",
                    "variable": "extra_wide"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "expression": "false ",
                    "type": "let",
                    "variable": "show_balance_number"
                }, "\n"],
                "expression": "!cfg.header_rework_2018 && page_identities.bands.length > 0 && page_identities.fan ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "expression": "true ",
                    "type": "let",
                    "variable": "show_balance_number"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n<div id=\"menubar-vm\" class=\"menubar-outer loading\" data-initial-values=\"", {
            "filters": [["json", []], ["a", []]],
            "name": "menubar",
            "type": "variable"
        }, "\">\n<div id=\"menubar\" class=\"menubar-2018 ", {
            "blocks": [{
                "attachment": ["out"],
                "expression": "(!page_identities.page_band || menubar.force_no_control) && (!has_full_access || (is_admin && page_identities.page_band != 0)) ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " ", {
            "blocks": [{
                "attachment": ["wide"],
                "expression": "wide ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " ", {
            "blocks": [{
                "attachment": ["extra-wide"],
                "expression": "extra_wide ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n<ul id=\"site-nav\" class=\"menubar-section horizontal\">\n\n    \n    <li class=\"bclogo white\"><a href=\"", {
            "filters": [["a", []]],
            "name": "siteroot_current",
            "type": "variable"
        }, "/?from=", {
            "blocks": [{
                "attachment": ["menubar_logo_logged_out"],
                "expression": "!(page_identities.user) ",
                "type": "ncondition"
            }, {
                "attachment": ["menubar_logo_logged_in"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\"><svg width=\"108px\" height=\"17px\" viewBox=\"0 0 127 20\"><use xlink:href=\"#bandcamp-logo-color-white\"></svg></a></li>\n    <li class=\"bclogo aqua\"><a href=\"", {
            "filters": [["a", []]],
            "name": "siteroot_current",
            "type": "variable"
        }, "/?from=", {
            "blocks": [{
                "attachment": ["menubar_logo_logged_out"],
                "expression": "!(page_identities.user) ",
                "type": "ncondition"
            }, {
                "attachment": ["menubar_logo_logged_in"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\"><svg width=\"108px\" height=\"17px\" viewBox=\"0 0 127 20\"><use xlink:href=\"#bandcamp-logo-color-bcaqua\"></svg></a></li>\n\n\n    <!-- ko if: showBandControls() || showLimitedAccessControls() -->\n    ", {
            "blocks": [{
                "attachment": ["\n    <li class=\"menubar-item hoverable ", {
                    "filters": [],
                    "name": "hide_unless_has_access",
                    "type": "variable"
                }, "\">\n        <a data-bind=\"attr: {href: artistsMenu.loggedInBand().dashboardUrl()}\">", {
                    "nodelist": ["dashboard"],
                    "type": "translate"
                }, "</a>\n    </li>\n    <li class=\"tralbum-tooltip-parent dash-link\" data-bind=\"css: {'show-tooltip': dashboardTooltipVM().showing}\">\n        <div class=\"tralbum-tooltip-outer\">\n            <div class=\"inner-circle-wrapper\">\n                <div class=\"inner-circle\"></div>\n                <div class=\"inner-circle-contents\">\n                    <a class=\"tooltip-action\" data-bind=\"click: dashboardTooltipVM().close, attr: {href: artistsMenu.loggedInBand().dashboardUrl()}, text: dashboardTooltipVM().centralText\"></a>\n                </div>\n            </div>\n            <div class=\"tralbum-tooltip\">\n                <div class=\"tralbum-tooltip-inner\">\n                    <span class=\"progress\" data-bind=\"text: dashboardTooltipVM().progress\"></span>\n                    <span data-bind=\"text: dashboardTooltipVM().tipText\"></span>\n                    <a class=\"dismiss-tooltip\" data-bind=\"click: dashboardTooltipVM().continueTips, text: dashboardTooltipVM().closeText\"></a>\n                </div>\n            </div>\n        </div>\n    </li>\n    "],
                "expression": "menubar.show_dashboard_link ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    ", {
            "blocks": [{
                "attachment": ["\n    <li class=\"dashboard-tooltip-parent\">\n        <div class=\"dashboard-tooltip-outer\">\n            <div class=\"inner-circle-wrapper\">\n                <div class=\"inner-circle\"></div>\n                <div class=\"inner-circle-contents\">\n                    <a class=\"tooltip-action\">", {
                    "nodelist": ["+ add"],
                    "type": "translate"
                }, "</a>\n                </div>\n            </div>\n            <div class=\"dashboard-tooltip\">\n                <div class=\"dashboard-tooltip-inner\">\n                    This is where you add an album, track, or merch.\n                    <a class=\"dismiss-tooltip\" href=\"#\">Got it</a>\n                </div>\n            </div>\n        </div>\n    </li>\n    "],
                "expression": "action_card && action_card.maybe_show_tooltip ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    <li class=\"menubar-item hoverable ", {
            "filters": [],
            "name": "hide_unless_has_access",
            "type": "variable"
        }, " add-menu\">\n        <a class=\"menubar-add-link\">", {
            "nodelist": ["+ add"],
            "type": "translate"
        }, "</a>\n        <ul class=\"menu hidden-while-loading\">\n            \n            <!-- ko if: showBandControls() || showLimitedAccessControls() -->\n            <ol data-bind=\"css: {'page-band-links': pageBand.isLabel()}\">\n                <li class=\"submenu-item\"><a data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/edit_album'}, click: addAlbumClick\">", {
            "nodelist": ["album"],
            "type": "translate"
        }, "</a></li>\n                <li class=\"submenu-item\"><a data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/edit_track'}, click: addTrackClick\">", {
            "nodelist": ["track"],
            "type": "translate"
        }, "</a></li>\n                <li class=\"submenu-item\"><a id=\"menubar-add-merch-link\" data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/edit_merch'}, click: addMerchClick\"><span class=\"add-music\">", {
            "nodelist": ["merch"],
            "type": "translate"
        }, "</span></a></li>\n            </ol>\n            <!-- /ko -->\n            <!-- ko if: showBandControls() && pageBand.isLabel() -->\n            <ol>\n                <li class=\"ui-widget-content ui-menu-divider\"></li>\n                <li class=\"submenu-item\"><a data-bind=\"click: addNewArtist\">", {
            "nodelist": ["new artist"],
            "type": "translate"
        }, "</a></li>\n                <li class=\"submenu-item\"><a data-bind=\"click: addExistingArtist\">", {
            "nodelist": ["existing artist"],
            "type": "translate"
        }, "</a></li>\n            </ol>\n            <!-- /ko -->\n        </ul>\n    </li>\n    <!-- /ko -->\n\n    \n\n    <!-- ko if: showBandControls() || showLimitedAccessControls() -->\n    \n    ", {
            "blocks": [{
                "attachment": ["\n        <li class=\"menubar-item hoverable ", {
                    "filters": [],
                    "name": "hide_unless_has_access",
                    "type": "variable"
                }, "\">\n            <a data-bind=\"attr: {href: ordersLinkHref}\"> <!-- clairenote change link to not pageband -->\n                ", {
                    "blocks": [{
                        "attachment": ["\n                    ", {
                            "nodelist": ["orders"],
                            "type": "translate"
                        }, "\n                "],
                        "expression": "menubar.unshipped_order_count == 0 ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                    ", {
                            "blocks": [{
                                "attachment": ["\n                        <span class=\"num order\">1</span> order\n                    "],
                                "expression": "menubar.unshipped_order_count== 1",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n                        <span class=\"num order\">", {
                                    "nodelist": [{
                                        "filters": [["h", []]],
                                        "name": "menubar.unshipped_order_count",
                                        "type": "variable"
                                    }],
                                    "type": "translateVariable",
                                    "var_name": "order_count"
                                }, "</span> orders\n                    "],
                                "type": "else_ncondition"
                            }],
                            "type": "translatePlural"
                        }, "\n                "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n            </a>\n        </li>\n    "],
                "expression": "menubar.unshipped_order_count ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    \n        <li class=\"menubar-item hoverable ", {
            "filters": [],
            "name": "hide_unless_has_access",
            "type": "variable"
        }, "\">\n            <a data-bind=\"attr: {href: statsLinkHref2018}\">", {
            "nodelist": ["stats"],
            "type": "translate"
        }, "</a>\n        </li>\n\n    ", {
            "blocks": [{
                "attachment": ["\n        <li class=\"menubar-item ", {
                    "blocks": [{
                        "attachment": ["hoverable"],
                        "expression": "menubar.artist_service_active ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n        <!-- ko if: pageBand.hasService() -->\n            <a><span class=\"subscription-name add-music has-children ", {
                    "filters": [],
                    "name": "hide_unless_has_access",
                    "type": "variable"
                }, " ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!menubar.artist_service_active ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">", {
                    "nodelist": ["subscription"],
                    "type": "translate"
                }, "</span></a>\n            <ul class=\"menu subscription-menu\">\n                <li class=\"submenu-item\"><a data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/' + pageBand.serviceUrlFragment() + '?from=menubar'}\"><strong data-bind=\"text: pageBand.serviceName\">", {
                    "filters": [["h", []]],
                    "name": "menubar.artist_service_name",
                    "type": "variable"
                }, "</strong></a></li> <!-- clairenote artist_service_name is for pageartist artist_service_has_subscribers too-->\n                <li class=\"submenu-item\"><a data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/edit_subscription?from=menubar'}\">", {
                    "nodelist": ["edit"],
                    "type": "translate"
                }, "</a></li>\n                <li class=\"", {
                    "blocks": [{
                        "attachment": ["ui-state-disabled"],
                        "expression": "!menubar.artist_service_has_subscribers ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " submenu-item\">\n                    <a ", {
                    "blocks": [{
                        "attachment": ["data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/subscribers?from=menubar'}\""],
                        "expression": "menubar.artist_service_has_subscribers ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, ">", {
                    "nodelist": ["subscribers"],
                    "type": "translate"
                }, "</a>\n                </li>\n                <li class=\"submenu-item\">\n                    <a data-bind=\"attr: {href: pageBand.trackpipeLocalUrl() + '/", {
                    "filters": [["a", []]],
                    "name": "menubar.artist_service_url_fragment",
                    "type": "variable"
                }, "?view=message_subscribers&from=menubar'}\">", {
                    "nodelist": ["message subscribers"],
                    "type": "translate"
                }, "</a>\n                </li>\n            </ul>\n        <!-- /ko -->\n        </li>\n    "],
                "expression": "menubar.artist_subscriptions_enabled ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    <!-- /ko -->\n    <!-- ko ifnot: showBandControls() || showLimitedAccessControls() -->\n    ", {
            "blocks": [{
                "attachment": ["\n        \n        <li class=\"search extended menubar-item ", {
                    "filters": [],
                    "name": "hide_if_has_access",
                    "type": "variable"
                }, "\">\n            <form class=\"autocomplete-form signup-tooltip-parent\" id=\"autocomplete-form\" action=\"/search\" method=\"get\" data-tooltip-id=\"s\">\n                <input id=\"search-field\" type=\"text\" class=\"you-autocomplete-me dismiss-tooltip-alt\" title=\"\" tabindex=\"1\" autocomplete=\"off\" maxlength=\"2048\" name=\"q\" placeholder=\"&nbsp;", {
                    "nodelist": ["Search and discover music"],
                    "type": "translate"
                }, "&nbsp;&nbsp;&nbsp;\"><button for=\"search-field\" class=\"left\" tabindex=\"2\" type=\"submit\" title=\"search\">\n                    <svg width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" class=\"svg-icon\"><use xlink:href=\"#menubar-search-input-icon\"></svg></button>\n                <input type=\"hidden\" name=\"from\" value=\"fanbar\">\n                <input type=\"hidden\" name=\"", {
                    "blocks": [{
                        "attachment": ["logged_out_menubar"],
                        "expression": "!(page_identities.user) ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["logged_in_menubar"],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" value=\"1\">\n                <div id=\"menubar-autocomplete-results\" class=\"menubar-autocomplete-results\" data-bind=\"with: AutocompleteVM\"> ", {
                    "template_name": "'_autocomplete_search_widget'",
                    "type": "include"
                }, " </div>\n                <div class=\"signup-tooltip-outer search-tooltip-outer header-2018\"></div>\n            </form>\n        </li>\n    "],
                "expression": "!hide_search ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    <!-- /ko -->\n</ul>\n\n<ul id=\"user-nav\" class=\"menubar-section horizontal\">\n<!-- ko if: user() -->\n\n    \n    <!-- ko if: partner() -->\n    <li class=\"menubar-item hoverable ", {
            "blocks": [{
                "attachment": ["hidden-while-loading"],
                "expression": "!page_identities.partner ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n        <a href=\"", {
            "filters": [["a", []]],
            "name": "siteroot",
            "type": "variable"
        }, "/partner\">", {
            "nodelist": ["partner"],
            "type": "translate"
        }, "</a>\n    </li>\n    <!-- /ko -->\n\n    <!-- ko if: showBandControls() || showLimitedAccessControls() -->\n    ", {
            "blocks": [{
                "attachment": ["\n        \n        \n        <li class=\"search extended menubar-item ", {
                    "filters": [],
                    "name": "hide_if_has_access",
                    "type": "variable"
                }, " hidden-while-loading\" data-bind=\"visible: altSearch()\">\n            <form class=\"autocomplete-form signup-tooltip-parent\" id=\"autocomplete-form\" action=\"/search\" method=\"get\" data-tooltip-id=\"s\">\n                <input id=\"search-field\" type=\"text\" class=\"you-autocomplete-me dismiss-tooltip-alt\" title=\"\" tabindex=\"1\" autocomplete=\"off\" maxlength=\"2048\" name=\"q\" placeholder=\"&nbsp;", {
                    "nodelist": ["Search and discover music"],
                    "type": "translate"
                }, "&nbsp;&nbsp;&nbsp;\"><button for=\"search-field\" class=\"left\" tabindex=\"2\" type=\"submit\" title=\"search\">\n                    <svg width=\"15\" height=\"16\" viewBox=\"0 0 15 16\" class=\"svg-icon\"><use xlink:href=\"#menubar-search-input-icon\"></svg></button>\n                <input type=\"hidden\" name=\"from\" value=\"fanbar\">\n                <input type=\"hidden\" name=\"", {
                    "blocks": [{
                        "attachment": ["logged_out_menubar"],
                        "expression": "!(page_identities.user) ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["logged_in_menubar"],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\" value=\"1\">\n                <div id=\"menubar-autocomplete-results\" class=\"menubar-autocomplete-results\" data-bind=\"with: AutocompleteVM\"> ", {
                    "template_name": "'_autocomplete_search_widget'",
                    "type": "include"
                }, " </div>\n                <div class=\"signup-tooltip-outer search-tooltip-outer header-2018\"></div>\n            </form>\n        </li>\n        \n        <li class=\"you-autocomplete-me menubar-item ", {
                    "filters": [],
                    "name": "hide_unless_has_access",
                    "type": "variable"
                }, " hoverable\" data-bind=\"click: showAltSearch, visible: !altSearch()\">\n            <a><svg width=\"26px\" height=\"26px\" viewBox=\"0 0 26 26\" class=\"svg-icon\"><use xlink:href=\"#menubar-search-icon\"></svg></a>\n        </li>\n    "],
                "expression": "!hide_search ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    <!-- /ko --> <!-- claire minimized search for artist -->\n\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "template_name": "'corp_hiring_banner'",
                    "type": "include"
                }, "\n    "],
                "expression": "has_corp_header ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    ", {
            "blocks": [{
                "attachment": ["\n    <li class=\"menubar-item hoverable menubar-gift-card-balance\">\n        <a href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/redeem\">\n            <svg class=\"icon gift-card-icon-bordered\" width=\"9px\" height=\"10px\" viewBox=\"0 0 9 10\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#gift-card-icon\"></use></svg>\n            <span class=\"gift-card-balance\">", {
                    "filters": [["money", ["1"]], ["h", []]],
                    "name": "menubar.gift_card_balance",
                    "type": "variable"
                }, " ", {
                    "filters": [["h", []]],
                    "name": "menubar.gift_card_balance.currency",
                    "type": "variable"
                }, "</span>\n        </a>\n    </li>\n    "],
                "expression": "menubar.gift_card_balance ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    ", {
            "blocks": [{
                "attachment": ["\n    <li data-bind=\"visible: hasCart\" class=\"menubar-item hoverable cart-wrapper ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!has_cart ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n        <a href=\"/cart\" ", {
                    "blocks": [{
                        "attachment": ["data-bind=\"click: goCart\""],
                        "expression": "menubar.is_tralbum_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " title=\"", {
                    "nodelist": ["cart"],
                    "type": "translate"
                }, "\">\n            <svg width=\"26\" height=\"26\" class=\"menubar-cart-icon svg-icon\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#menubar-cart-icon\"></use>\n                <text data-bind=\"text: numCartItemsDisplay\" x=\"15\" y=\"12\" dominant-baseline=\"middle\" text-anchor=\"middle\">\n                    ", {
                    "filters": [["h", []]],
                    "name": "cart_quantity",
                    "type": "variable"
                }, "\n                </text>\n            </svg>\n        </a>\n    </li>\n    "],
                "expression": "page_identities.user && !hide_cart_icon ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    <!-- ko if: (fan() && !fan().private) -->\n    ", {
            "blocks": [{
                "attachment": ["\n        <li id=\"feed-main\" class=\"signup-tooltip-parent menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(page_identities.user && page_identities.fan && !page_identities.fan.private) ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" data-tooltip-id=\"f\">\n            <a href=\"", {
                    "filters": [["a", []]],
                    "name": "page_identities.fan.url",
                    "type": "variable"
                }, "/feed?from=menubar\" title=\"", {
                    "nodelist": ["feed"],
                    "type": "translate"
                }, "\">\n                <svg width=\"26px\" height=\"26px\" viewBox=\"0 0 26 26\" class=\"svg-icon\"><use xlink:href=\"#menubar-feed-icon\"></svg>\n            </a>\n            <div class=\"signup-tooltip-outer feed-tooltip-outer header-2018\"></div>\n        </li>\n    "],
                "expression": "!hide_feed ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "blocks": [{
                        "attachment": ["\n        <li id=\"collection-main\" class=\"menubar-item hoverable signup-tooltip-parent ", {
                            "blocks": [{
                                "attachment": ["hidden-while-loading"],
                                "expression": "!(page_identities.user && page_identities.fan && !page_identities.fan.private) ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\" data-tooltip-id=\"c\">\n            <a href=\"", {
                            "filters": [["a", []]],
                            "name": "page_identities.fan.url",
                            "type": "variable"
                        }, "\" title=\"", {
                            "nodelist": ["collection"],
                            "type": "translate"
                        }, "\">\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" class=\"svg-icon\"><use xlink:href=\"#menubar-collection-icon\"></svg>\n            </a>\n            <div class=\"signup-tooltip-outer collection-tooltip-outer header-2018\"></div>\n        </li>\n        "],
                        "expression": "menubar.has_collection || (!menubar.has_collection && !menubar.has_wishlist) ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        <li id=\"collection-main\" class=\"signup-tooltip-parent menubar-item hoverable ", {
                            "blocks": [{
                                "attachment": ["hidden-while-loading"],
                                "expression": "!(page_identities.user && page_identities.fan && !page_identities.fan.private) ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\" data-tooltip-id=\"w\">\n            <a href=\"", {
                            "filters": [["a", []]],
                            "name": "page_identities.fan.url",
                            "type": "variable"
                        }, "/wishlist\" title=\"", {
                            "nodelist": ["wishlist"],
                            "type": "translate"
                        }, "\">\n                <svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" class=\"svg-icon\"><use xlink:href=\"#menubar-collection-icon\"></svg>\n            </a>\n            <div class=\"signup-tooltip-outer wishlist-tooltip-outer header-2018\"></div>\n        </li>\n        "],
                        "expression": "menubar.has_wishlist ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    "],
                "expression": "!hide_collection_wishlist ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    <!-- /ko -->\n        ", {
            "blocks": [{
                "attachment": [" <!-- placeholder for artist message feature -->\n            <li class=\"menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(page_identities.user) ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                <a href=\"#\">\n                    <svg width=\"26px\" height=\"25px\" class=\"svg-icon\"><use xlink:href=\"#menubar-messages-icon\"></svg>\n                </a>\n            </li>\n        "],
                "expression": "false ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n        <li class=\"menubar-item hoverable ", {
            "blocks": [{
                "attachment": ["hidden-while-loading"],
                "expression": "!(page_identities.user) ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n        <a>\n            <div data-bind=\"with: artistsMenu\">\n                ", {
            "blocks": [{
                "attachment": ["\n                    <!-- Artist (and possibly fanartist) profile pic -->\n                    <!-- ko if: optionsLoggedInBand() && optionsLoggedInBand().photo -->\n                    <div class=\"userpic ", {
                    "blocks": [{
                        "attachment": ["admin"],
                        "expression": "is_admin ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!menubar.active_profile_photo ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                        <img ", {
                    "filters": [["image", ["'art_embedded_player'"]]],
                    "name": "menubar.active_profile_photo",
                    "type": "variable"
                }, " data-bind=\"src_image: {image_id: optionsLoggedInBand().photo, format: 'art_embedded_player'}\"\n                        >\n                    </div>\n                    <!-- /ko -->\n                    <!-- ko ifnot: optionsLoggedInBand() && optionsLoggedInBand().photo -->\n                    <div class=\"userpic ", {
                    "blocks": [{
                        "attachment": ["admin"],
                        "expression": "is_admin ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "menubar.active_profile_photo ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                        <div class=\"no-image-placeholder\"></div>\n                    </div>\n                    <!-- /ko -->\n                "],
                "expression": "page_identities.bands[0] ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                    <!-- Fan only profile pic -->\n                    <!-- ko if: $parent.loggedInFanPhoto() -->\n                    <div class=\"userpic ", {
                    "blocks": [{
                        "attachment": ["admin"],
                        "expression": "is_admin ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!menubar.active_profile_photo ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                        <img ", {
                    "filters": [["image", ["'art_embedded_player'"]]],
                    "name": "menubar.active_profile_photo",
                    "type": "variable"
                }, " data-bind=\"src_image: {image_id: $parent.loggedInFanPhoto(), format: 'art_embedded_player'}\"\n                        >\n                    </div>\n                    <!-- /ko -->\n                    <!-- ko ifnot: $parent.loggedInFanPhoto() -->\n                    <div class=\"userpic ", {
                    "blocks": [{
                        "attachment": ["admin"],
                        "expression": "is_admin ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "menubar.active_profile_photo ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                        <div class=\"no-image-placeholder\"></div>\n                    </div>\n                    <!-- /ko -->\n                "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n            </div>\n        </a>\n\n        <ul class=\"menu user-menu hidden-while-loading\" data-bind=\"with: artistsMenu, css: { label: (artistsMenu.loggedInLabelMemberBands().length > 0 || artistsMenu.linkedNonLabelMemberBands().length > 1) }\">\n        <ol class=\"user-menu-wrapper\">\n            <!-- ARTIST -->\n            <!-- ko if: bmgr.bands().length >= 1 && loggedInBand() -->\n                <li class=\"submenu-item\">\n                    <a data-bind=\"attr: { href: loggedInBand().trackpipeLocalUrl()}\" class=\"name\">\n                        <strong class=\"menu-bandname\" data-bind=\"text: optionsLoggedInBand().title, css: { long: !optionsLoggedInBand().showPro}\">", {
            "filters": [["h", []]],
            "name": "artistsmenu_title",
            "type": "variable"
        }, "</strong> <div data-bind=\"visible: optionsLoggedInBand().showPro\" class=\"menubar-badge-pro round3 ", {
            "blocks": [{
                "attachment": ["hidden-while-loading"],
                "expression": "!artistsmenu_show_pro ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">", {
            "nodelist": ["PRO"],
            "type": "translate"
        }, "</div>\n                    </a>\n                </li> \n\n                <li class=\"submenu-item\">\n                    <a data-bind=\"\n                        attr: {href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/profile?from=menubar&id=' + loggedInBand().id},\n                        css: {admin: optionsLoggedInBand().adminAccess}\"\n                    >\n                        <span>", {
            "nodelist": ["edit profile"],
            "type": "translate"
        }, "</span>\n                    </a>\n                </li>\n                <li class=\"submenu-item\">\n                    <a data-bind=\"\n                        attr: {href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/tools?from=menubar&id=' + loggedInBand().id},\n                        css: {admin: optionsLoggedInBand().adminAccess}\"\n                    >\n                        <span>", {
            "nodelist": ["tools"],
            "type": "translate"
        }, "</span>\n                    </a>\n                </li>\n                ", {
            "blocks": [{
                "attachment": ["\n                <li class=\"submenu-item\">\n                    <a data-bind=\"click: launchPageDesign.bind($data, loggedInBand())\">", {
                    "nodelist": ["page design"],
                    "type": "translate"
                }, "</a>\n                </li>\n                "],
                "expression": "menubar.band_has_items ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n                <li class=\"ui-menu-item ", {
            "blocks": [{
                "attachment": ["disabled"],
                "expression": "menubar.page_path == '/edit_subscription' ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, " submenu-item\">\n                    <!-- ko ifnot: loggedInBand().hasService() -->\n                        <a data-bind=\"attr: { href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/subscriptions?band_id=' + loggedInBand().id + '&from=menubar'}\">", {
            "nodelist": ["subscription"],
            "type": "translate"
        }, "</a>\n                    <!-- /ko -->\n                    <!-- ko if: loggedInBand().hasService() -->\n                        <a data-bind=\"attr: { href: loggedInBand().trackpipeLocalUrl() + '/' + loggedInBand().serviceUrlFragment() + '?from=menubar'}\">", {
            "nodelist": ["subscription"],
            "type": "translate"
        }, "</a>\n                    <!-- /ko -->\n                </li>\n            <!-- /ko -->\n            \n            <!-- FAN -->\n            <!-- ko if: ($parent.fan() && !$parent.fan().private) -->\n            <li class=\"submenu-item\">\n                <a href=\"", {
            "filters": [["a", []]],
            "name": "page_identities.fan.url",
            "type": "variable"
        }, "\" class=\"name\">\n                    <strong class=\"menu-bandname long\">", {
            "filters": [["h", []]],
            "name": "page_identities.fan.name",
            "type": "variable"
        }, "</strong>\n                    <div class=\"userpic fanpic ", {
            "blocks": [{
                "attachment": ["hidden-while-loading"],
                "expression": "!page_identities.fan ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">\n                        ", {
            "blocks": [{
                "attachment": ["\n                            <div class=\"no-image-placeholder\"></div>\n                        "],
                "expression": "!page_identities.fan.photo ",
                "type": "ncondition"
            }, {
                "attachment": ["\n                            <img ", {
                    "filters": [["image", ["'art_embedded_player'"]]],
                    "name": "page_identities.fan.photo",
                    "type": "variable"
                }, ">\n                        "],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n                    </div>\n                </a>\n            </li>\n            <li class=\"submenu-item\"><a href=\"", {
            "filters": [["a", []]],
            "name": "page_identities.fan.url",
            "type": "variable"
        }, "/purchases?from=menubar\"><span>", {
            "nodelist": ["purchases"],
            "type": "translate"
        }, "</span></a></li>\n            <!-- /ko -->\n            <li class=\"ui-widget-content ui-menu-divider first\"></li>\n\n            <!-- LABEL ARTISTS -->\n            <!-- ko if: loggedInLabelMemberBands() && loggedInLabelMemberBands().length > 0 -->\n            <li class=\"menu-switch ui-menu-item submenu-item ui-state-disabled\" data-bind=\"visible: !showLinkedBands()\">\n                <span data-bind=\"attr: {href: loggedInBand().trackpipeLocalUrl() + '/artists?from=menubar_artist_dropdown'}, text: loggedInLabelMemberBandsCountStr()\"></span>\n            </li>\n\n            <ol class=\"label-artist-menu no-pro-badges ui-state-disabled ui-menu-item\" data-bind=\"visible: !showLinkedBands()\">\n            <input type=\"text\" class=\"artist-filter-text\" data-bind=\"textInput: labelMemberBandsSearchTerm, visible: loggedInLabelMemberBands().length > 10\" placeholder=\"", {
            "nodelist": ["Search all artists"],
            "type": "translate"
        }, "\">\n\n                <!-- ko foreach: filteredLoggedInLabelMemberBands() -->\n                    <li class=\"label-member-band submenu-item\" data-bind=\"template: {\n                        'name': 'band-menuitem-template-options'\n                    }\"></li>\n                <!-- /ko -->\n\n                <!-- ko if: filteredLoggedInLabelMemberBands().length == 0 -->\n                    <li class=\"no-results submenu-item\">", {
            "nodelist": ["no results"],
            "type": "translate"
        }, "</li>\n                <!-- /ko -->\n            </ol>\n            <li class=\"ui-widget-content ui-menu-divider\" data-bind=\"visible: !showLinkedBands()\"></li>\n            <!-- /ko -->\n\n            <!-- LINKED ACCOUNTS -->\n            <!-- ko if: linkedNonLabelMemberBands().length > 1 -->\n            <ol class=\"linked-accounts-wrapper\">\n                <li class=\"menu-switch ui-menu-item submenu-item linked-accounts-menu ui-state-disabled\" data-bind=\"click: function () {showLinkedBands(!showLinkedBands())}\">\n                <span data-bind=\"text: loggedInLinkedBandsCountStr()\"></span><div data-bind=\"css: { 'arrow-down': showLinkedBands(), 'arrow-right' : !showLinkedBands() }\"></div>\n                </li>\n                <ol class=\"linked-accounts-menu-content\" data-bind=\"visible: showLinkedBands()\">\n                <!-- ko foreach: linkedNonLabelMemberBands() -->\n                    <li class=\"submenu-item\" data-bind=\"template: {\n                        'name': 'band-menuitem-template'\n                    },\n                    css: {\n                        'hidden': ($data.id == $root.artistsMenu.loggedInBand().id)\n                    }\"></li>\n                <!-- /ko -->\n                </ol>\n            </ol>\n            <li class=\"ui-widget-content ui-menu-divider\"></li>\n            <!-- /ko -->\n\n\n            <!-- ALL USERS -->\n            <ol class=\"all-user-option\">\n                <li class=\"submenu-item\"><a href=\"", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/settings?from=menubar\">", {
            "nodelist": ["settings"],
            "type": "translate"
        }, "</a></li>\n                ", {
            "blocks": [{
                "attachment": ["\n                <li class=\"submenu-item\"><a href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/guide\">", {
                    "nodelist": ["guide"],
                    "type": "translate"
                }, "</a></li>\n                "],
                "expression": "menubar.show_guide_link ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n                <li class=\"submenu-item\"><a href=\"https://get.bandcamp.help\">", {
            "nodelist": ["help"],
            "type": "translate"
        }, "</a></li>\n                <li class=\"submenu-item\"><a class=\"logout-action\" href=\"", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/logout\">", {
            "nodelist": ["log out"],
            "type": "translate"
        }, "</a></li>\n            </ol>\n        </ol>\n        </ul>\n    </li>\n<!-- /ko -->\n\n<!-- ko ifnot: user() -->\n    ", {
            "blocks": [{
                "attachment": ["\n    <li data-bind=\"visible: hasCart\" class=\"menubar-item hoverable cart-wrapper hidden-while-loading svg-icon\">\n        <a href=\"/cart\" ", {
                    "blocks": [{
                        "attachment": ["data-bind=\"click: goCart\""],
                        "expression": "menubar.is_tralbum_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " title=\"", {
                    "nodelist": ["cart"],
                    "type": "translate"
                }, "\">\n            <svg width=\"26\" height=\"26\" class=\"menubar-cart-icon\">\n                <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#menubar-cart-icon\"></use>\n                <text data-bind=\"text: numCartItemsDisplay\" x=\"15\" y=\"12\" dominant-baseline=\"middle\" text-anchor=\"middle\">\n                    ", {
                    "filters": [["h", []]],
                    "name": "cart_quantity",
                    "type": "variable"
                }, "\n                </text>\n            </svg>\n        </a>\n    </li>\n    "],
                "expression": "!page_identities.user && !hide_cart_icon ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "blocks": [{
                        "attachment": ["\n            <li class=\"menubar-item hoverable ", {
                            "blocks": [{
                                "attachment": ["hidden-while-loading"],
                                "expression": "!(!page_identities.user) ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, " ", {
                            "blocks": [{
                                "attachment": ["mobile-hidden"],
                                "expression": "is_fan_page ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\">\n                <a class=\"all-signup-link\">", {
                            "nodelist": ["sign up"],
                            "type": "translate"
                        }, "</a>\n            </li>\n        "],
                        "expression": "!hide_signup ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        <li class=\"menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(!page_identities.user) ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["mobile-hidden"],
                        "expression": "menubar.page_path == \"/login\" ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n            <a href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/login", {
                    "blocks": [{
                        "attachment": ["?from=fan_page"],
                        "expression": "is_fan_page ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["?from=menubar"],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, {
                    "blocks": [{
                        "attachment": [{
                            "filters": [["a", []]],
                            "name": "menubar_login_bounce_param",
                            "type": "variable"
                        }],
                        "expression": "menubar_login_bounce_param ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" class=\"login-link\">", {
                    "nodelist": ["log in"],
                    "type": "translate"
                }, "</a>\n        </li>\n    "],
                "expression": "!hide_login_signup ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n<!-- /ko -->\n\n", {
            "blocks": [{
                "attachment": ["\n<!-- ko ifnot: fan() -->\n    <!-- ko ifnot: user() -->\n    <li class=\"menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(!page_identities.fan) || !(!page_identities.user) ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["mobile-hidden"],
                        "expression": "is_fan_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n        <a class=\"fan-signup-modal-link\" href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/fans?from=menubar\"\n            ", {
                    "blocks": [{
                        "attachment": ["\n            data-from=\"", {
                            "filters": [["a", []]],
                            "name": "fan_signup_params.from",
                            "type": "variable"
                        }, "\"\n            data-email=\"", {
                            "filters": [["a", []]],
                            "name": "fan_signup_params.email",
                            "type": "variable"
                        }, "\"\n            data-token=\"", {
                            "filters": [["a", []]],
                            "name": "fan_signup_params.signup_token",
                            "type": "variable"
                        }, "\"\n            data-tsig=\"", {
                            "filters": [["a", []]],
                            "name": "fan_signup_params.tsig",
                            "type": "variable"
                        }, "\"\n            data-verified=\"", {
                            "filters": [["a", []]],
                            "name": "fan_signup_params.verified",
                            "type": "variable"
                        }, "\"\n            "],
                        "expression": "fan_signup_params ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n            >", {
                    "nodelist": ["sign up"],
                    "type": "translate"
                }, "</a>\n    </li>\n    <!-- /ko -->\n    <!-- ko if: user() -->\n    <li class=\"menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(!page_identities.fan) || !page_identities.user ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["mobile-hidden"],
                        "expression": "is_fan_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n        <a class=\"fan-signup-modal-link\" href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/fans?from=menubar\">", {
                    "nodelist": ["sign up as fan"],
                    "type": "translate"
                }, "</a>\n    </li>\n    <!-- /ko -->\n</li>\n<!-- /ko -->\n"],
                "expression": "ppp_menubar ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": ["\n<!-- ko ifnot: fan() -->\n    <!-- ko ifnot: user() -->\n    <li class=\"menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(!page_identities.fan) || !(!page_identities.user)",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["mobile-hidden"],
                        "expression": "is_fan_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n       <a href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/login?from=menubar\">", {
                    "nodelist": ["log in"],
                    "type": "translate"
                }, "</a>\n    </li>\n    <!-- /ko -->\n    <!-- ko if: user() -->\n    <li class=\"menubar-item hoverable ", {
                    "blocks": [{
                        "attachment": ["hidden-while-loading"],
                        "expression": "!(!page_identities.fan) || !page_identities.user ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " ", {
                    "blocks": [{
                        "attachment": ["mobile-hidden"],
                        "expression": "is_fan_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n        <a href=\"", {
                    "filters": [["a", []]],
                    "name": "siteroot_https",
                    "type": "variable"
                }, "/logout?login=1\">", {
                    "nodelist": ["log in as fan"],
                    "type": "translate"
                }, "</a>\n    </li>\n    <!-- /ko -->\n<!-- /ko -->\n"],
                "expression": "ppp_menubar || cc_menubar ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n</ul>\n</div>\n\n<div class='corp-banners'>\n\n    ", {
            "blocks": [{
                "attachment": ["\n        ", {
                    "expression": "page_identities.fan && !page_identities.fan.verified && !page_identities.fan.private ",
                    "type": "let",
                    "variable": "is_unverified_fan"
                }, "\n        ", {
                    "expression": "fan_onboarding.show_verify_banner && is_unverified_fan && !skip_verification_banner ",
                    "type": "let",
                    "variable": "show_verify_banner"
                }, "\n        ", {
                    "expression": "fan_onboarding.email ",
                    "type": "let",
                    "variable": "verify_email"
                }, "\n        ", {
                    "template_name": "'home_2016/fan_verify_banner'",
                    "type": "include"
                }, "\n    "],
                "expression": "is_corp_home && fan_onboarding ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n</div>\n\n<!-- Knockout template for list items in the artists menu -->\n<script type=\"text/html\" id=\"band-menuitem-template\">\n    <a class=\"menu-artistitem\"\n        data-bind=\"css: {'is-pro': isPro()}, attr: {href: $root.artistsMenu.isPageBand(id) ? '' : trackpipeLocalUrl()}\"\n    >\n        <span class=\"menu-artistpic\">\n            <!-- ko if: photo() -->\n            <img data-bind=\"src_image: {image_id: photo(), format: 'art_embedded_player'}\">\n            <!-- /ko -->\n            <!-- ko ifnot: photo() -->\n            <div class=\"no-image-placeholder\"></div>\n            <!-- /ko -->\n        </span>\n        <span data-bind=\"text: name()\" class=\"menu-bandname menu-text\"></span>\n        <span data-bind=\"visible: isPro()\" class=\"menubar-badge-pro round3\">", {
            "nodelist": ["PRO"],
            "type": "translate"
        }, "</span>\n    </a>\n</script>\n\n<script type=\"text/html\" id=\"band-menuitem-template-options\">\n    <a data-bind=\"attr: {href: trackpipeLocalUrl()}\" class=\"menu-artistitem\">\n        <span class=\"menu-artistpic\">\n            <!-- ko if: photo() -->\n            <img data-bind=\"src_image: {image_id: photo(), format: 'art_embedded_player'}\">\n            <!-- /ko -->\n            <!-- ko ifnot: photo() -->\n            <div class=\"no-image-placeholder\"></div>\n            <!-- /ko -->\n        </span>\n        <span data-bind=\"text: name()\" class=\"menu-bandname menu-text\"></span>\n        <span class=\"show-more\" data-bind=\"visible: $root.artistsMenu.bmgr.bandByID(id) || $root.artistsMenu.lmgr.isMemberBandAuthed(id), click: function () { $root.artistsMenu.setActiveLabelMemberBand(id)}\">•••</span>\n    </a>\n    <!-- ko if: ($root.artistsMenu.activeLabelMemberBand() == id) -->\n    <div class=\"label-artist-menu-links ui-menu-item\">\n        <span data-bind=\"visible: $root.artistsMenu.bmgr.bandByID(id) || $root.artistsMenu.lmgr.isMemberBandAuthed(id)\">\n            <a data-bind=\"\n                attr: {href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/profile?from=menubar&id=' + id}\"\n            >\n                <span class=\"menu-text\">", {
            "nodelist": ["edit profile"],
            "type": "translate"
        }, "</span>\n            </a>\n            <a data-bind=\"\n                attr: {href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/tools?from=menubar&id=' + id}\"\n            >\n                <span class=\"menu-text\">", {
            "nodelist": ["tools"],
            "type": "translate"
        }, "<span>\n            </a>\n            <!-- ko if: hasItems -->\n                <a data-bind=\"click: $root.artistsMenu.launchPageDesign.bind($data)\"><span class=\"menu-text\">", {
            "nodelist": ["page design"],
            "type": "translate"
        }, "</span></a>\n            <!-- /ko -->\n\n            <!-- ko ifnot: hasService() -->\n                <a data-bind=\"attr: { href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/subscriptions?band_id=' + id + '&from=menubar'}\"><span class=\"menu-text\">", {
            "nodelist": ["subscription"],
            "type": "translate"
        }, "</span></a>\n            <!-- /ko -->\n            <!-- ko if: hasService() -->\n                <a data-bind=\"attr: { href: trackpipeLocalUrl() + '/' + serviceUrlFragment() + '?from=menubar'}\"><span data-bind=\"text: serviceName()\" class=\"menu-text\">", {
            "nodelist": ["subscription"],
            "type": "translate"
        }, "</span></a>\n            <!-- /ko -->\n        </span>\n    </div>\n    <!-- /ko -->\n    <span class=\"show-less\" data-bind=\"visible: $root.artistsMenu.activeLabelMemberBand() == id && ($root.artistsMenu.bmgr.bandByID(id) || $root.artistsMenu.lmgr.isMemberBandAuthed(id)), click: function () { $root.artistsMenu.setActiveLabelMemberBand(id) }\">show less</span>\n</script>\n\n\n<!-- Knockout template for the parent label -->\n<script type=\"text/html\" id=\"band-parentlabel-template\">\n    <div data-bind=\"css: {'artist-listing-with-links': $parent.columns() > 1}\">\n        <a class=\"menu-artistitem\" data-bind=\"attr: {href: trackpipeUrlHttps()}\">\n        <!-- ko if: $parent.columns() === 1 -->\n            <span class=\"menu-artistpic\">\n                <img data-bind=\"src_image: {image_id: photo(), format: 'bio_navbar'}\">\n            </span>\n            <span data-bind=\"text: name()\" class=\"menu-bandname\"></span>\n        <!-- /ko -->\n        <!-- ko if: $parent.columns() > 1 -->\n            <!-- ko if: photo() -->\n                <img class=\"photo\" data-bind=\"src_image: {image_id: photo(), format: 'fan_bio_thumb_small'}\">\n            <!-- /ko -->\n            <!-- ko ifnot: photo() -->\n                <div class=\"photo none\"></div>\n            <!-- /ko -->\n        <!-- /ko -->\n        </a>\n   \n        <div class=\"infobox\">\n            <p class=\"name\"><a data-bind=\"attr: {href: trackpipeUrl()}, text: name()\"></a></p>\n            <p class=\"actions\">\n                <a data-bind=\"attr: {href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/profile?from=menubar&id=' + id}\">", {
            "nodelist": ["profile"],
            "type": "translate"
        }, "</a> &middot;\n                <a data-bind=\"attr: {href: '", {
            "filters": [["a", []]],
            "name": "siteroot_https",
            "type": "variable"
        }, "/tools?from=menubar&id=' + id}\">", {
            "nodelist": ["tools"],
            "type": "translate"
        }, "</a> &middot;\n                <a data-bind=\"attr: {href: trackpipeLocalUrl() + '/stats?from=menubar'}\">", {
            "nodelist": ["stats"],
            "type": "translate"
        }, "</a>\n            </p>\n        </div>\n    </div>\n</script>\n</div>"]
    });
}
;var EmbedCode = LangUtils.makeclass({
    ctor: function(embeddata) {
        this._size = "venti";
        this._isdemo = false;
        this._scriptAccess = "never";
        this._embedData = embeddata;
        this._customLayout = null;
        this._customWidth = null;
        this._customHeight = null;
        this._variant = "other";
        this._vis = null
    },
    prototype: {
        colors: {
            bgcolor: "#FFFFFF",
            linkcolor: "#0687f5"
        },
        getParams: function() {
            if (!this._embedData)
                throw "you must set embed_info before you can get the embed code hash";
            var result = {
                variant: this._variant,
                url: this._embedData.swf_base_url + "/EmbeddedPlayer",
                urlbase: this._embedData.swf_base_url,
                params: [{
                    name: "quality",
                    value: "high"
                }, {
                    name: "allowNetworking",
                    value: "always"
                }, {
                    name: "wmode",
                    value: "transparent"
                }],
                url_args: []
            };
            if (this._forceflash)
                result.url += ".swf";
            var scriptaccess = "never";
            var isAlbum = this._embedData.tralbum_param.name == "album";
            result.url_args.push(this._embedData.tralbum_param);
            var embed_data_params = ["tralbum_param", "art_id", "linkback", "title", "artist", "album_title"];
            for (var i = 0; i < embed_data_params.length; i++)
                result[embed_data_params[i]] = this._embedData[embed_data_params[i]];
            if (this._customLayout) {
                var layouturl = EmbedCode.encodeLayoutURL(this._customLayout);
                EmbedCode.pushParam(result, "url_args", "layout", layouturl);
                result.layout = layouturl;
                result.width = this._customWidth;
                result.height = this._customHeight
            } else {
                if (this._customWidth && this._customHeight) {
                    result.width = this._customWidth;
                    result.height = this._customHeight;
                    result.include_dimensions = true
                } else {
                    var dims = EmbedCode.getDims(this._size, isAlbum, this._variant);
                    if (!dims)
                        throw "failed to find layout: " + this._size + "/" + this._variant;
                    result.width = dims.w;
                    result.height = dims.h
                }
                result.size = this._size;
                EmbedCode.pushParam(result, "url_args", "size", this._size)
            }
            var bgcolor = this.colors.bgcolor.replace(/^#/, "");
            var linkcolor = this.colors.linkcolor.replace(/^#/, "");
            result.bgcolor = bgcolor;
            result.bgcolor_css = EmbedCode._hex_to_rgb(bgcolor);
            EmbedCode.pushParam(result, "params", "bgcolor", "#" + bgcolor);
            EmbedCode.pushParam(result, "url_args", "bgcol", bgcolor);
            result.linkcolor = linkcolor;
            result.linkcolor_css = EmbedCode._hex_to_rgb(linkcolor);
            EmbedCode.pushParam(result, "url_args", "linkcol", linkcolor);
            if (this._isDemo) {
                if (this._variant == "wordpress")
                    result.variant = "other";
                result.classname = "bcembed" + Math.round(Math.random() * 1E4);
                result.doproxy = true;
                scriptaccess = "always";
                EmbedCode.pushParam(result, "url_args", "debug", "true")
            }
            if (this._vis)
                EmbedCode.pushParam(result, "url_args", "vis", this._vis);
            if (this._transparent)
                EmbedCode.pushParam(result, "url_args", "transparent", "true");
            if (this._size == "biggie") {
                if (this._notracklist) {
                    result.notracklist = "true";
                    EmbedCode.pushParam(result, "url_args", "notracklist", "true")
                }
                if (this._packageid) {
                    result.package = this._packageid;
                    EmbedCode.pushParam(result, "url_args", "package", this._packageid)
                }
            }
            EmbedCode.pushParam(result, "params", "allowScriptAccess", scriptaccess);
            return result
        },
        getEmbed: function(isDemo) {
            var oldDemoValue = this._isDemo;
            this._isDemo = isDemo;
            try {
                var params = this.getParams();
                var result = Templ.render("_embedded_player", params)
            } catch (e) {
                throw e;
            } finally {
                this._isDemo = oldDemoValue
            }
            return result
        },
        setEmbedData: function(ed) {
            this._embedData = ed
        },
        setSize: function(s) {
            this._customHeight = null;
            this._customWidth = null;
            this._customLayout = null;
            this._size = s
        },
        getSize: function() {
            return this._size
        },
        setVariant: function(v) {
            this._variant = v
        },
        getVariant: function() {
            return this._variant
        },
        setDims: function(w, h) {
            this._customHeight = h;
            this._customWidth = w
        },
        getDims: function() {
            var result = {
                width: this._customWidth,
                height: this._customHeight
            };
            if (!(result.width && result.height)) {
                var isAlbum = this._embedData.tralbum_param.name == "album";
                var dims = EmbedCode.getDims(this._size, isAlbum, this._variant);
                if (!dims)
                    throw "failed to find layout: " + this._size + "/" + this._variant;
                result.width = dims.w;
                result.height = dims.h
            }
            return result
        },
        setPackage: function(pkgid) {
            this._packageid = pkgid
        },
        getPackage: function() {
            return this._packageid
        },
        setCustomLayout: function(url, h, w) {
            this._customHeight = h;
            this._customWidth = w;
            this._customLayout = url;
            this._size = null
        },
        getCustomParams: function() {
            if (this._customLayout)
                return {
                    layout: this._customLayout,
                    width: this._customWidth,
                    height: this._customHeight
                };
            return null
        },
        setTransparent: function(isTransparent) {
            this._transparent = isTransparent
        },
        setVis: function(v) {
            this._vis = v
        },
        setOptions: function(opts) {
            for (var x in opts) {
                Log.debug("EmbedCode option: " + x);
                switch (x) {
                case "forceFlash":
                    this._forceflash = opts[x];
                    break;
                case "size":
                    this.setSize(opts[x]);
                    break;
                case "isDemo":
                    this._isDemo = true;
                    break;
                case "notracklist":
                    this._notracklist = opts[x];
                    break;
                case "vis":
                    this.setVis(opts[x]);
                    break
                }
            }
        },
        getOption: function(name) {
            switch (name) {
            case "notracklist":
                return this._notracklist;
                break
            }
        }
    },
    statics: {
        getDims: function(size, isAlbum, variant) {
            var dims = {
                normal: {
                    venti: {
                        w: 400,
                        h: 100
                    },
                    grande: {
                        w: 300,
                        h: 100
                    },
                    grande2: {
                        w: 300,
                        h: 355
                    },
                    grande3: {
                        w: 300,
                        h: 410
                    },
                    tall: {
                        w: 150,
                        h: isAlbum ? 295 : 270
                    },
                    tall2: {
                        w: 150,
                        h: 450
                    },
                    short: {
                        w: 46,
                        h: 23
                    }
                },
                core: {
                    venti: {
                        w: 287,
                        h: 30
                    },
                    grande: {
                        w: isAlbum ? 297 : 197,
                        h: 30
                    },
                    tall: {
                        w: 150,
                        h: isAlbum ? 78 : 56
                    },
                    short: {
                        w: 23,
                        h: 23
                    }
                }
            };
            return dims["normal"][size]
        },
        pushParam: function(hash, paramtype, name, value) {
            if (!hash[paramtype])
                hash[paramtype] = [];
            hash[paramtype].push({
                name: name,
                value: value
            })
        },
        _hex_to_rgb: function(color) {
            match = /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.exec(color);
            if (match)
                return "rgb(" + Number("0x" + match[1]) + "," + Number("0x" + match[2]) + "," + Number("0x" + match[3]) + ")";
            return "rgb(255,255,255)"
        },
        encodeLayoutURL: function(url) {
            return escape(url).replace(/\//g, "%2F").replace(/_/g, "%5F").replace(/%/g, "_")
        }
    }
});
var Share = {
    _shareDialog: null,
    _shareFromEmbedDialog: null,
    _biggieSizePresets: {
        small: 350,
        medium: 500,
        large: 700
    },
    embedcode: new EmbedCode,
    showFromEmbed: function() {
        if (CfgShare2)
            Share.panelAsDialog();
        else {
            Share.embedcode.setEmbedData(EmbedData);
            var isTrack = EmbedData.tralbum_param.name == "track";
            Share._shareFromEmbedDialog = Share._createDialog("Share", "_share_from_embed", {
                is_track: isTrack,
                permalink: EmbedData.linkback
            }, [Dialog.buttons.ok(), Dialog.buttons.cancel()], "26em")
        }
    },
    showFromEmbedCleanup: function() {
        if (Share._shareFromEmbedDialog) {
            Share._shareFromEmbedDialog.cancel();
            Share._shareFromEmbedDialog = null
        }
    },
    showDialog: function(isTrack, permalink, variant, skipStats) {
        if (!gplaylist && variant != "email")
            if (FlashProxy.error) {
                FlashProxy.noFlashError("share");
                return
            } else {
                setTimeout(Share.showDialog, 0);
                return
            }
        Share.embedcode.setEmbedData(EmbedData);
        Share.embedcode.setVariant(variant);
        var params = {
            permalink: permalink,
            siteroot: EmbedData.swf_base_url,
            variant: variant,
            is_track: isTrack
        };
        if (!skipStats)
            Stats.share_menu_click(variant);
        var dlg = Share._createDialog(variant == "email" ? "Share" : "Share / Embed", "_share", params, [Dialog.buttons.ok()], variant == "email" ? "445px" : "850px");
        $("#embedcode,#permalink").click(function(event) {
            $(event.target).focus().select()
        });
        if (variant != "email") {
            Share.embedcode.setSize("venti");
            Share.embedcode.setOptions({
                forceFlash: false
            });
            var size = Share.embedcode.getSize();
            if (size)
                elt("sharePlayerSize_" + size).checked = true;
            var colorelems = {
                "bgcolor": "bgColorSwatch",
                "linkcolor": "linkColorSwatch"
            };
            var customParams = Share.embedcode.getCustomParams();
            if (customParams)
                if (!Share._canBeCustom(variant))
                    Share.embedcode.setSize("venti");
                else {
                    Share.showSection("custom");
                    elt("layouturl").value = customParams.layout;
                    elt("customwidth").value = customParams.width;
                    elt("customheight").value = customParams.height
                }
            for (var x in colorelems)
                Share._hookupColorSwatch(x, colorelems[x]);
            Share._updateControls();
            elt("embedcode").value = Share.embedcode.getEmbed(false);
            elt("embedded_player_sample").innerHTML = Share.embedcode.getEmbed(true)
        } else {
            embedelt.focus();
            embedelt.select()
        }
        Share._addMerch(TralbumData.packages)
    },
    _createDialog: function(title, template, hash, buttons, width) {
        var delem = $("\x3cdiv\x3e");
        var dialogparams = {
            draggable: false,
            height: "630",
            position: {
                my: "top+5",
                at: "top",
                of: window
            },
            modal: true
        };
        if (width)
            dialogparams.width = width;
        var d = delem.dialog(dialogparams);
        d.html(Templ.render(template, hash));
        delem.on("click", Share._handleClick);
        d.on("dialogclose", function() {
            Share._cleanupPicker();
            delem.remove()
        });
        $("#layouturl,#customwidth,#customheight").on("change", Share._handleCustomUpdated);
        $("#transparent").on("change", Share._handleTransparentChanged);
        $("input[name\x3dstandard-shortcode]").on("change", Share._handleShortcodeTypeChanged);
        $("#sizePicker").on("change", Share._handleDimensionPickerChanged);
        $("#showTracklist").on("change", Share._handleShowTracklistChanged);
        if (false && width)
            delem.css("width", width);
        return d
    },
    _updateControls: function() {
        var variant = Share.embedcode.getVariant();
        var size = Share.embedcode.getSize();
        var showColorOptions = true;
        var showHeight = true;
        var showSizePicker = false;
        switch (size) {
        case "short":
            showColorOptions = false;
            break;
        case "biggie":
            showColorOptions = false;
            showHeight = $("#showTracklist").attr("checked") == "checked";
            showSizePicker = true;
            Share._updateSizePicker();
            break;
        case "artonly":
            showColorOptions = false;
            showHeight = false;
            showSizePicker = true;
            Share._updateSizePicker();
            break
        }
        $("#colorOptions").css("visibility", showColorOptions ? "visible" : "hidden");
        $("#playerHeightLabel").css("visibility", showHeight ? "visible" : "hidden");
        $("#playerHeightLabel").css("visibility", showHeight ? "visible" : "hidden");
        $("#sizePickerLabel").css("visibility", showSizePicker ? "visible" : "hidden");
        var hidebiggieopts = size != "biggie";
        if (hidebiggieopts != Share._biggie_opts_hidden) {
            Share._biggie_opts_hidden = hidebiggieopts;
            var biggieopts = $("#showTracklistLabel,#merchLabel");
            if (!hidebiggieopts)
                biggieopts.animate({
                    height: "show"
                }, 400, function() {
                    biggieopts.css("visibility", "visible")
                });
            else {
                biggieopts.css("visibility", "hidden");
                biggieopts.animate({
                    height: "hide"
                }, 400)
            }
        }
    },
    _updateSizePicker: function() {
        $("#sizePicker option").each(function(index, opt) {
            var w = Share._biggieSizePresets[opt.value];
            if (!w)
                throw "invalid size selected: " + opt.value;
            var h = Share._recommendedBiggieHeight(w);
            $(opt).html(opt.value + " (" + w + "px x " + h + "px)")
        })
    },
    _updateEmbed: function() {
        $("#embedcode")[0].value = Share.embedcode.getEmbed(false);
        var dims = Share.embedcode.getDims();
        $("#embedded_player_sample").html(Share.embedcode.getEmbed(true));
        var iframe = $("#embedded_player_sample iframe");
        var warning = $("#sample_not_actual_size_warning");
        var MAX_PREVIEW_HEIGHT = 554;
        var MAX_PREVIEW_WIDTH = 400;
        iframe.css("display", "none");
        var ih = iframe.outerHeight();
        var iw = iframe.outerWidth();
        if (ih > MAX_PREVIEW_HEIGHT || iw > MAX_PREVIEW_WIDTH) {
            var hscale = MAX_PREVIEW_WIDTH / iw;
            var vscale = MAX_PREVIEW_HEIGHT / ih;
            var scale = Math.min(hscale, vscale);
            iframe.css({
                height: ih * scale,
                width: iw * scale
            });
            warning.css("display", "block")
        } else
            warning.css("display", "none");
        iframe.css("display", "block")
    },
    refreshCustom: function() {
        elt("embedded_player_sample").innerHTML = "";
        Share._updateEmbed()
    },
    _canBeCustom: function(variant) {
        switch (variant) {
        case "wordpress":
        case "other":
            return true;
            break
        }
        return false
    },
    _hookupColorSwatch: function(name, swatchname) {
        function doUpdate() {
            if (currentColor != Share.embedcode.colors[name]) {
                currentColor = Share.embedcode.colors[name];
                swatch.style.background = currentColor;
                Share._updateEmbed()
            }
        }
        function colorChoiceHandler(color, finished) {
            swatch.style.background = color;
            textfield.value = color;
            Share.embedcode.colors[name] = color;
            if (delayedUpdateTimer)
                clearTimeout(delayedUpdateTimer);
            if (finished)
                Share._updateEmbed();
            else
                delayedUpdateTimer = setTimeout(doUpdate, UPDATE_DELAY)
        }
        var textfield = elt(name);
        var swatch = elt(swatchname);
        var UPDATE_DELAY = 1E3;
        var delayedUpdateTimer = null;
        var currentColor = Share.embedcode.colors[name];
        swatch.style.background = Share.embedcode.colors[name];
        textfield.value = Share.embedcode.colors[name];
        var selector = "#" + name;
        Share.pollWhileFocused(selector, function(elem) {
            var match;
            if (match = /^#?([0-9a-fA-F]{6})$/.exec($(selector)[0].value)) {
                Share.embedcode.colors[name] = "#" + match[1];
                doUpdate()
            }
        });
        $(swatch).click(function(event) {
            Share._picker = PopupPicker.pick(event.pageX, event.pageY, currentColor, colorChoiceHandler);
            Share._picker.on("dialogclose", function() {
                Share._cleanupPicker()
            })
        })
    },
    _addMerch: function(packages) {
        if (!packages)
            return;
        for (var i = 0; i < packages.length; i++)
            $("#merchSelect").append($("\x3coption\x3e", {
                value: packages[i].id,
                text: packages[i].title
            }));
        $("#merchSelect").on("change", Share._handleMerchSelected)
    },
    _cleanupPicker: function() {
        if (Share._picker) {
            var picker = Share._picker;
            Share._picker = null;
            PopupPicker.destroy(picker)
        }
    },
    showSection: function(sec) {
        var shownormal = true;
        var showcustom = false;
        var showbiggie = false;
        switch (sec) {
        case "normal":
            break;
        case "custom":
            shownormal = false;
            showcustom = true;
            break;
        case "biggie":
            showbiggie = true;
            shownormal = false;
            break
        }
        $("#sizeChoices").css("display", shownormal ? "inline" : "none");
        $("#customLayoutChoices").css("display", showcustom ? "inline" : "none");
        $("#refreshlink").css("display", showcustom ? "inline" : "none");
        $("#biggieSizeChoices").css("display", showbiggie ? "inline" : "none");
        Share._updateControls()
    },
    _backToNormal: function() {
        if (Share.embedcode.getCustomParams()) {
            Share.embedcode.setSize("venti");
            Share._updateEmbed()
        }
        Share.showSection("normal")
    },
    _recommendedBiggieHeight: function(width) {
        var size = Share.embedcode.getSize();
        var notracklist = Share.embedcode.getOption("notracklist");
        var pkg = Share.embedcode.getPackage();
        var MIN_HEIGHT = 350;
        var MERCH_SECTION_HEIGHT = 62;
        var CONTROLS_HEIGHT = 79;
        var TRACKLIST_BASE_HEIGHT = 11;
        var TRACKLIST_ITEM_HEIGHT = 26;
        var CURRENTTRACK_HEIGHT = 13;
        var MAX_TRACKS = 10;
        var scalefactor = width / MIN_HEIGHT;
        var h = MIN_HEIGHT;
        if (size == "artonly")
            return Math.round(MIN_HEIGHT * scalefactor);
        h += CONTROLS_HEIGHT;
        if (pkg)
            h += MERCH_SECTION_HEIGHT;
        if (notracklist)
            h += CURRENTTRACK_HEIGHT;
        else {
            var num_tracks_to_show = Math.min(TralbumData.trackinfo.length, MAX_TRACKS);
            h += TRACKLIST_BASE_HEIGHT + num_tracks_to_show * TRACKLIST_ITEM_HEIGHT
        }
        return Math.round(h * scalefactor)
    },
    _handleClick: function(event) {
        if (event.target.name == "sharePlayerSize") {
            if (event.target.id == "sharePlayerSize_venti" && event.shiftKey && Share._canBeCustom(Share.embedcode.getVariant())) {
                event.preventDefault();
                Share.showSection("custom");
                Share.dlgCustomUpdate();
                return
            } else if (event.target.id == "sharePlayerSize_grande" && event.shiftKey) {
                event.preventDefault();
                Share.showSection("biggie");
                setTimeout(function() {
                    Share._selectSize("artonly")
                }, 0);
                return
            }
            Share._handleSizeSelected(event.target.value);
            return
        }
        switch (event.target.id) {
        case "refreshlink_anchor":
            Share.refreshCustom();
            event.preventDefault();
            break;
        case "classicmode_link":
        case "backtonormal_link":
            Share._backToNormal();
            event.preventDefault();
            break
        }
    },
    _handleCustomUpdated: function() {
        var url = elt("layouturl").value;
        var h = elt("customheight").value;
        var w = elt("customwidth").value;
        Share.embedcode.setCustomLayout(url, h, w);
        Share._updateEmbed()
    },
    _selectSize: function(sz) {
        var elem = $("#sharePlayerSize_" + sz);
        if (elem.attr("checked") != "checked") {
            elem.attr("checked", "checked");
            Share._handleSizeSelected(sz)
        }
    },
    _handleSizeSelected: function(sz) {
        Share.embedcode.setSize(sz);
        switch (sz) {
        case "biggie":
        case "artonly":
            Share._handleDimensionPickerChanged();
            break;
        default:
            Share._updateControls();
            Share._updateEmbed();
            break
        }
    },
    _handleTransparentChanged: function() {
        Share.embedcode.setTransparent(elt("transparent").checked);
        Share._updateControls();
        Share._updateEmbed()
    },
    _handleDimensionPickerChanged: function(event) {
        var picker = $("#sizePicker")[0];
        var value = picker.value;
        var width = Share._biggieSizePresets[value];
        var height = Share._recommendedBiggieHeight(width);
        Share.embedcode.setDims(width, height);
        Share._updateControls();
        Share._updateEmbed()
    },
    _handleShowTracklistChanged: function(event) {
        var opts = {
            notracklist: !event.target.checked
        };
        Share.embedcode.setOptions(opts);
        Share._handleDimensionPickerChanged()
    },
    _handleMerchSelected: function(event) {
        Share.embedcode.setPackage(event.target.value);
        Share._handleDimensionPickerChanged()
    },
    _handleShortcodeTypeChanged: function(event) {
        var variant = "other";
        if (event.target.value == 1)
            variant = "wordpress";
        Share.embedcode.setVariant(variant);
        var embed_code = Share.embedcode.getEmbed(false);
        $("#embedcode").val(embed_code)
    },
    pollWhileFocused: function(sel, callback, period) {
        function docallback() {
            if (callback)
                callback($(sel))
        }
        function onblur(event) {
            if (timer) {
                clearInterval(timer);
                timer = null
            }
            $(sel).off("blur", onblur)
        }
        if (!period)
            period = 500;
        var timer = null;
        $(sel).on("focus", function(event) {
            timer = setInterval(docallback, period);
            $(sel).on("blur", onblur)
        })
    },
    openFacebookShare: function(url, title) {
        var fburl = "http://www.facebook.com/sharer.php?u\x3d" + encodeURIComponent(url);
        fburl += "\x26p[title]\x3dptitle\x26p[summary]\x3dpsummary";
        if (title)
            fburl += "\x26t\x3d" + encodeURIComponent(title);
        window.open(fburl, "sharer", "toolbar\x3d0,status\x3d0,width\x3d626,height\x3d436");
        return false
    },
    openTwitterShare: function(message) {
        Log.debug("opening twitter share with message: " + message);
        var twurl = "http://twitter.com/?status\x3d" + encodeURIComponent(message);
        window.open(twurl);
        return false
    },
    doFacebook: function(url, title) {
        Stats.share_menu_click("facebook");
        return Share.openFacebookShare(url, title)
    },
    doTwitter: function(url, isTrack, source) {
        if (source && source == "tweet_button")
            Stats.record({
                kind: "click",
                click: "tweet_button"
            });
        else
            Stats.share_menu_click("twitter");
        var tralbum = isTrack ? "track" : "album";
        var message = "omg best " + tralbum + " ever: " + url;
        return Share.openTwitterShare(message)
    },
    panelLinkPromise: new $.Deferred,
    _panelInited: false,
    _panelData: null,
    initPanel: function(isTrackPage, enableSocialButtons, linkback) {
        if (MediaView.mode == "phone" || $(".share-embed").length)
            return;
        var twitterUsername;
        $("#band-links a").each(function() {
            var match = /twitter\.com\/(?:#!)?(\w+)/i.exec($(this).attr("href"));
            if (match) {
                twitterUsername = match[1];
                return false
            }
        });
        Share._panelData = {
            linkback: linkback,
            is_track: isTrackPage,
            enable_social_buttons: enableSocialButtons,
            title: TralbumData.current.title,
            artist: TralbumData.artist,
            twitter_username: twitterUsername,
            download_pref: TralbumData.current.download_pref,
            embed_info: EmbedData.embed_info
        };
        var p = {
            "embed_info": $("#pagedata").data("blob").embed_info
        };
        $(".share-panel-wrapper-desktop").append(Templ.render("tralbum_common/share_collect_controls", p));
        $(".share-embed").click(function() {
            Share.togglePanel()
        });
        $(".exclusive-embed").click(function() {
            EmbedDialog.open("exclusive")
        });
        if (enableSocialButtons)
            Share.initSocialButtons();
        Share.panelLinkPromise.resolve()
    },
    initSocialButtons: function() {
        FacebookUtils.initSDK()
    },
    panelAsDialog: function() {
        Share.panelLinkPromise.then(Share._panelAsDialog)
    },
    _panelAsDialog: function() {
        var data = Share._panelData;
        var delem = $(Templ.render("tralbum_common/share_embed_panel", data));
        var dialogparams = {
            draggable: true,
            position: "center",
            modal: true,
            title: "Share",
            width: 380,
            height: 260
        };
        var d = delem.dialog(dialogparams);
        d.find(".email-im-link-text").blur();
        Share._initPanelControls(d, data, function() {
            d.dialog("close")
        });
        if (Share._panelData.enable_social_buttons)
            SocialControls.initFromDOM(d)
    },
    _initPanelControls: function(root, data, closehandler) {
        var $root = $(root);
        $root.find(".close").click(function() {
            closehandler()
        });
        $root.find(".embed-other-services a").click(function() {
            Stats.record({
                kind: "click",
                click: "embed_other"
            });
            if (CfgShare2)
                EmbedDialog.open();
            else
                Share.showDialog(data.is_track, null, "other", true);
            closehandler()
        });
        $root.find(".embed-other-services-exclusive a").click(function() {
            Stats.record({
                kind: "click",
                click: "embed_other_exclusive"
            });
            if (CfgShare2)
                EmbedDialog.open("exclusive");
            else
                Share.showDialog(data.is_track, null, "other", true);
            closehandler()
        });
        $root.find(".share-buttons").on("click", ".twitter-link, .tumblr-link", function() {
            closehandler()
        });
        $root.find(".email-im-link input").focus(function() {
            EmailIMUtils.onFocus()
        }).click(function() {
            $(this).select()
        })
    },
    togglePanel: function() {
        var $root = null;
        if (!Share._panelInited) {
            var data = Share._panelData;
            $root = $(".share-panel-wrapper-desktop").append(Templ.render("tralbum_common/share_embed_panel", data));
            Share._initPanelControls($root, data, function() {
                Share.togglePanel()
            });
            Share._panelRoot = $root
        } else
            $root = Share._panelRoot;
        var container = $root.find(".share-embed-container");
        var willShow = container.css("display") == "none";
        container.slideToggle("fast", function() {
            if (willShow)
                Dom.scrollToElement(container, 20, true)
        });
        if (!Share._panelInited) {
            if (Share._panelData.enable_social_buttons)
                SocialControls.initFromDOM($root);
            Share._panelInited = true
        }
    },
    xxx: null
};
function PlayerEmbedVM(opts_in, parentVM, size$$0) {
    function PackageOption(p) {
        this.title = ko.observable(p.title);
        this.id = ko.observable(p.id)
    }
    function VideoOption(v) {
        var self = this;
        this.track_name = ko.observable(v.track_name);
        this.track_id = ko.observable(v.track_id);
        this.track_number = ko.observable(v.track_number);
        this.description = ko.computed(function() {
            return self.track_number() + ". " + self.track_name()
        })
    }
    function pin(val, range) {
        if (val === "100%")
            return val;
        if (range instanceof Array) {
            var pinDelta = null;
            var pinValue = null;
            for (var i = 0; i < range.length; i++) {
                var r = range[i];
                var pinned = Math.max(r.min, Math.min(val, r.max || 1E5));
                if (pinned == val)
                    return val;
                var delta = Math.abs(val - pinned);
                if (pinDelta == null || pinDelta > delta) {
                    pinDelta = delta;
                    pinValue = pinned
                }
            }
            return pinValue
        } else
            return Math.max(range.min, Math.min(val, range.max || 1E5))
    }
    function make_range(min, max) {
        return {
            min: min,
            max: max
        }
    }
    function hRange(w, defaults, deltas, isLarge, isMinimal, isTrack, isMerch, isTracklist, isSmallArt) {
        deltas = deltas || {};
        var min = defaults.height;
        var range = 0;
        if (isLarge) {
            var scaled_part = min;
            var unscaled_part = 0;
            if (!isMinimal) {
                if (isSmallArt)
                    scaled_part = 0;
                unscaled_part += deltas.infopanel || 0;
                if (isMerch) {
                    scaled_part += deltas.merch_nominal || 0;
                    unscaled_part += deltas.merch_absolute || 0
                }
                if (isTracklist) {
                    unscaled_part += (deltas.list_base || 0) + MIN_LIST_ITEMS * (deltas.list_item || 0);
                    range += (MAX_LIST_ITEMS - MIN_LIST_ITEMS) * (deltas.list_item || 0);
                    if (isSmallArt)
                        unscaled_part += deltas.list_small_art || 0
                }
                if (isTrack && !isSmallArt)
                    unscaled_part += deltas.track || 0
            }
            var scale = w / defaults.width;
            min = Math.round(scaled_part * scale) + unscaled_part
        }
        return make_range(min, min + range)
    }
    function wRange(h, defaults, deltas, isLarge, isMinimal, isTrack, isMerch, isTracklist, isSmallArt) {
        deltas = deltas || {};
        if (!isLarge)
            return make_range(defaults.min_width, defaults.max_width);
        if (isSmallArt)
            return make_range(STANDARD_SMALLART_WIDTH_MIN, defaults.max_width);
        if (isMinimal)
            return make_range(h, h);
        var scaled_portion = h - (deltas.infopanel || 0);
        var range = 0;
        if (isTrack)
            scaled_portion -= deltas.track || 0;
        if (isMerch)
            scaled_portion -= deltas.merch_absolute || 0;
        if (isTracklist) {
            var listdelta = (deltas.list_base || 0) + MIN_LIST_ITEMS * (deltas.list_item || 0);
            scaled_portion -= listdelta;
            range += (MAX_LIST_ITEMS - MIN_LIST_ITEMS) * (deltas.list_item || 0)
        }
        var scaled_portion_min = Math.max(defaults.min_width, scaled_portion - range);
        var scaled_portion_max = Math.max(defaults.min_width, scaled_portion);
        var scaled_portion_nominal_height = defaults.height;
        if (isMerch)
            scaled_portion_nominal_height += deltas.merch_nominal || 0;
        var scale_min = scaled_portion_min / scaled_portion_nominal_height;
        var scale_max = scaled_portion_max / scaled_portion_nominal_height;
        var minwidth = Math.round(defaults.width * scale_min);
        var maxwidth = Math.round(defaults.width * scale_max);
        var width_limits = make_range(defaults.min_width, defaults.max_width);
        return make_range(pin(minwidth, width_limits), pin(maxwidth, width_limits))
    }
    function _videoHeight(width) {
        return Math.round(width / VIDEO_ASPECT_RATIO + VIDEO_INFO_HEIGHT)
    }
    function _applyWidth(width) {
        if (self$$0._applying_dimensions)
            return;
        if (self$$0.layout() == "video") {
            if (width < VIDEO_MIN_WIDTH || width > VIDEO_MAX_WIDTH)
                return;
            var height = _videoHeight(width);
            self$$0.height(height);
            self$$0.width(width);
            self$$0._applying_dimensions = true;
            self$$0.input_height(height);
            self$$0._applying_dimensions = false;
            return
        }
        var sizekey = self$$0.sizekey();
        var defaults = DEFAULT_SIZES[sizekey];
        if (width < defaults.min_width || width > defaults.max_width)
            return;
        if (self$$0.size() == "large" && self$$0.artwork_option() != "large" && width < STANDARD_SMALLART_WIDTH_MIN)
            return;
        self$$0.width(width);
        if (width == "100%")
            width = defaults.min_width;
        var range = self$$0.heightRange(width);
        var inp_height = self$$0.input_height();
        var new_height = pin(inp_height, range);
        if (self$$0.size() == "large" && self$$0.layout() != "minimal" && self$$0.show_tracklist()) {
            var nitems = Math.min(DEFAULT_NUM_LIST_ITEMS, opts.num_tracks || 0);
            if (nitems > MIN_LIST_ITEMS)
                new_height = range.min + LIST_ITEM_HEIGHT * (nitems - MIN_LIST_ITEMS)
        }
        if (new_height != inp_height) {
            self$$0.height(new_height);
            self$$0._applying_dimensions = true;
            self$$0.input_height(new_height);
            self$$0._applying_dimensions = false
        }
    }
    function _applyHeight(height) {
        if (self$$0._applying_dimensions)
            return;
        var range = self$$0.widthRange(height);
        var inp_width = self$$0.input_width();
        var new_width = pin(inp_width, range);
        var hrange = self$$0.heightRange(new_width);
        if (pin(height, hrange) == height) {
            self$$0.height(height);
            self$$0.width(new_width);
            if (new_width != inp_width) {
                self$$0._applying_dimensions = true;
                self$$0.input_width(new_width);
                self$$0._applying_dimensions = false
            }
        }
    }
    function _getParams(forpreview) {
        var parms = [self$$0.itemarg()];
        var regularparms = ["size", "bgcol", "linkcol"];
        for (var i = 0; i < regularparms.length; i++) {
            var parm = self$$0.parm(regularparms[i]);
            if (parm)
                parms.push(parm)
        }
        if (TralbumData && TralbumData.current.license_id)
            parms.push("license_id\x3d" + TralbumData.current.license_id);
        if (self$$0.showing_merch())
            parms.push("package\x3d" + escape(self$$0.package()));
        if (!self$$0.exclusive() && self$$0.show_standard_options() && self$$0.layout() != "minimal" && !self$$0.show_tracklist())
            parms.push("tracklist\x3dfalse");
        if (self$$0.layout() == "minimal")
            parms.push("minimal\x3dtrue");
        if (self$$0.size() == "large") {
            if (self$$0.artwork_option() != "large" && self$$0.layout() != "minimal")
                parms.push("artwork\x3d" + self$$0.artwork_option())
        } else if (!self$$0.show_art())
            parms.push("artwork\x3dnone");
        if (self$$0.selected_track_id() && !self$$0.exclusive())
            parms.push("track\x3d" + escape(self$$0.selected_track_id()));
        if (self$$0.kind() == "html")
            parms.push("transparent\x3dtrue");
        if (self$$0.exclusive()) {
            if (self$$0.show_tracklist())
                parms.push("tracklist\x3dtrue");
            else
                parms.push("tracklist\x3dfalse");
            parms.push("tracks\x3d" + self$$0.exclusiveVM.getSelectedTracks().join(","))
        }
        if (self$$0.input_campaign() != "" && self$$0.input_campaign().length <= 50 && /^[a-z0-9_-]+$/.test(self$$0.input_campaign()))
            parms.push("campaign\x3d" + self$$0.input_campaign());
        return parms
    }
    function _description() {
        return self$$0.title() + " by " + self$$0.artist()
    }
    function _videoEmbedCode(kind, height, width, track_id, bgcol, linkcol) {
        var params = ["bgcol\x3d" + bgcol, "linkcol\x3d" + linkcol];
        switch (kind) {
        case "wordpress":
            params.unshift("height\x3d" + height);
            params.unshift("width\x3d" + width);
            params.unshift("video\x3d" + track_id);
            return "[bandcamp " + params.join(" ") + "]";
        case "html":
            params.unshift("track\x3d" + track_id);
            var url = self$$0.siteroot() + "/VideoEmbed?" + params.join("\x26");
            return '\x3ciframe style\x3d"border: 0; width: ' + width + "px; height: " + height + 'px;" src\x3d"' + url + '" mozallowfullscreen\x3d"1" webkitallowfullscreen\x3d"1" allowfullscreen\x3d"1" seamless\x3e\x3c/iframe\x3e';
        case "url":
            params.unshift("track\x3d" + track_id);
            url = self$$0.siteroot() + "/VideoEmbed?" + params.join("\x26");
            return url
        }
    }
    function _embedCode(kind, params, ispreview) {
        var w = self$$0.width();
        var h = self$$0.height();
        if (self$$0.layout() == "video") {
            if (ispreview) {
                w *= self$$0.preview_scale();
                h *= self$$0.preview_scale()
            }
            return _videoEmbedCode(kind, h, w, self$$0.video(), self$$0.bgcol(), self$$0.linkcol())
        }
        switch (kind) {
        case "url":
            var parmstr = params.join("/") + "/";
            return self$$0.siteroot() + "/EmbeddedPlayer/" + parmstr;
        case "html":
            parmstr = params.join("/") + "/";
            if (ispreview)
                if (w !== "100%" || self$$0.exclusive() && self$$0.artwork() !== "small") {
                    if (self$$0.exclusive())
                        w = self$$0.PREVIEW_MAX_WIDTH();
                    w *= self$$0.preview_scale();
                    if (self$$0.size() == "large") {
                        h *= self$$0.preview_scale();
                        var pd = self$$0.preview_dimensions();
                        w = pd.w;
                        h = pd.h;
                        if (self$$0.exclusive()) {
                            var dialogH = $(".ui-dialog-content").height();
                            var vizMarginTopBottom = 70;
                            if (dialogH > 40 && h > dialogH - vizMarginTopBottom)
                                h = dialogH - vizMarginTopBottom
                        }
                    }
                }
            if (w !== "100%")
                w = w + "px";
            h = h + "px";
            return '\x3ciframe style\x3d"border: 0; width: ' + w + "; height: " + h + ';" src\x3d"' + self$$0.siteroot() + "/EmbeddedPlayer/" + parmstr + '" seamless\x3e\x3ca href\x3d"' + self$$0.linkback() + '"\x3e' + Templ.filters.h(_description()) + "\x3c/a\x3e\x3c/iframe\x3e";
        case "wordpress":
            var wpparams = ["width\x3d" + w, "height\x3d" + h].concat(params);
            parmstr = wpparams.join(" ");
            return "[bandcamp " + parmstr + "]"
        }
    }
    var self$$0 = this;
    self$$0.PREVIEW_MAX_WIDTH = ko.observable(560);
    self$$0.PREVIEW_MAX_HEIGHT = 900;
    var defaults = {
        kind: "html",
        size: "large",
        width: 350,
        height: 470,
        bgcol: "FFFFFF",
        linkcol: "0687f5",
        layout: "standard",
        artwork: "large",
        show_art: true,
        show_tracklist: false,
        campaign: ""
    };
    var opts = $.extend({}, defaults, opts_in);
    self$$0.debug = ko.observable(Cookie.get("sharedebug"));
    self$$0.exclusive = ko.observable(size$$0 === "exclusive");
    if (self$$0.exclusive()) {
        self$$0.exclusiveVM = new ExclusiveEmbedVM(self$$0,TralbumData,opts);
        opts = self$$0.exclusiveVM.opts;
        self$$0.PREVIEW_MAX_WIDTH(opts.width);
        opts = self$$0.exclusiveVM.opts
    } else
        self$$0.exclusiveVM = null;
    var cfg_video_sharing = $("#pagedata").data("blob").cfg.video_sharing;
    self$$0.video_sharing_enabled = ko.observable(cfg_video_sharing);
    self$$0.size = ko.observable(opts.size);
    self$$0.bgcol = ko.observable(opts.bgcol);
    self$$0.linkcol = ko.observable(opts.linkcol);
    self$$0.width = ko.observable(opts.width);
    self$$0.height = ko.observable(opts.height);
    self$$0.package = ko.observable();
    self$$0.packages = ko.observableArray();
    self$$0.video = ko.observable();
    self$$0.videos = ko.observableArray();
    if (opts.packages) {
        var items = [];
        for (var i$$0 = 0; i$$0 < opts.packages.length; i$$0++) {
            var pkg = opts.packages[i$$0];
            if (pkg.arts && pkg.arts.length > 0)
                items.push(new PackageOption(pkg))
        }
        self$$0.packages(items)
    }
    if (opts.videos) {
        items = [];
        for (i$$0 = 0; i$$0 < opts.videos.length; i$$0++) {
            var v$$0 = opts.videos[i$$0];
            items.push(new VideoOption(v$$0))
        }
        self$$0.videos(items)
    }
    var QUIET_TIME = 400;
    self$$0.quieting_timeout = ko.observable(new Date);
    self$$0.quiet_recheck = ko.observable(1);
    self$$0.quiet_error = ko.computed(function() {
        self$$0.quiet_recheck();
        return new Date < self$$0.quieting_timeout()
    });
    self$$0.quiet_errors_for_a_bit = function() {
        var d = new Date;
        d.setMilliseconds(d.getMilliseconds() + QUIET_TIME);
        self$$0.quieting_timeout(d);
        setTimeout(function() {
            self$$0.quiet_recheck(self$$0.quiet_recheck() + 1)
        }, QUIET_TIME)
    }
    ;
    if (self$$0.size() !== "large")
        self$$0.width("100%");
    self$$0.size_config_visible = ko.observable(true);
    if (self$$0.exclusive() && self$$0.exclusiveVM.num_tracks === 1)
        self$$0.size_config_visible(false);
    self$$0.specifyWidth = function() {
        var width;
        if (self$$0.layout() == "slim" || self$$0.artwork() == "small" || self$$0.artwork() == "none")
            width = DEFAULT_HORIZ_WIDTH;
        else {
            var wRange = self$$0.widthRange(self$$0.input_height());
            width = pin(self$$0.input_width(), wRange)
        }
        self$$0._applying_dimensions = true;
        self$$0.input_width(width);
        self$$0.width(width);
        self$$0._applying_dimensions = false;
        self$$0.size_config_visible(true)
    }
    ;
    self$$0.dontSpecifyWidth = function() {
        self$$0.width("100%");
        self$$0.size_config_visible(false)
    }
    ;
    self$$0.entered_campaign_string = ko.observable(false);
    self$$0.input_width = ko.observable(opts.width);
    self$$0.input_height = ko.observable(opts.height);
    self$$0.input_campaign = ko.observable("");
    self$$0.input_campaign.display = ko.pureComputed({
        read: function() {
            return self$$0.input_campaign()
        },
        write: function(val) {
            if (val.length <= 50)
                if (/[^a-z0-9_-]/.test(val)) {
                    var sanitized_string = val.toLowerCase();
                    sanitized_string = sanitized_string.replace(" ", "-").replace(/[^a-z0-9_-]/g, "");
                    self$$0.input_campaign(sanitized_string)
                } else
                    self$$0.input_campaign(val);
            if (self$$0.input_campaign().length > 0)
                self$$0.entered_campaign_string(true);
            else
                self$$0.entered_campaign_string(false);
            self$$0.input_campaign.display.notifySubscribers()
        }
    });
    self$$0.input_width_error = ko.computed(function() {
        if (self$$0.quiet_error())
            return false;
        var size = self$$0.size();
        if (size === "large")
            return self$$0.input_width() != self$$0.width();
        if (self$$0.size_config_visible())
            return self$$0.input_width() < DEFAULT_SIZES[size].min_width || self$$0.input_width() > DEFAULT_SIZES[size].max_width;
        return false
    });
    self$$0.input_height_error = ko.computed(function() {
        if (self$$0.quiet_error())
            return false;
        return self$$0.input_height() != self$$0.height()
    });
    self$$0.t = ko.observable(opts.t);
    self$$0.selected_track_id = ko.observable(opts.selected_track_id);
    self$$0.type = ko.observable(opts.type);
    self$$0.id = ko.observable(opts.id);
    self$$0.itemarg = ko.computed(function() {
        return self$$0.type() + "\x3d" + self$$0.id()
    });
    self$$0.siteroot = ko.observable(opts.siteroot);
    self$$0.kind = ko.observable(opts.kind);
    self$$0.layout = ko.observable(opts.layout);
    self$$0.layout.subscribe(function(val) {
        self$$0.quiet_errors_for_a_bit();
        if (val == "slim") {
            self$$0.show_art(true);
            self$$0.chooseSize("small")
        } else if (val === "video")
            self$$0.input_width(VIDEO_DEFAULT_WIDTH);
        else {
            self$$0.show_art(true);
            self$$0.artwork("large");
            self$$0.chooseSize("large");
            if (val == "video")
                self$$0.kind("html")
        }
    });
    self$$0.artwork = ko.observable(opts.artwork);
    self$$0.show_art = ko.observable(opts.show_art);
    self$$0.show_art.subscribe(function(val) {
        if (self$$0.exclusive())
            if (val && self$$0.artwork() === "large")
                if (!self$$0.size_config_visible()) {
                    self$$0.size_config_visible(true);
                    self$$0.specifyWidth()
                }
        return true
    });
    self$$0.artwork_option = ko.computed(function() {
        if (self$$0.layout() == "minimal")
            return "large";
        if (!self$$0.show_art())
            return "none";
        return self$$0.artwork()
    });
    self$$0.allow_merch = ko.computed(function() {
        return self$$0.packages().length > 0 && self$$0.size() == "large" && self$$0.artwork_option() == "large"
    });
    self$$0.show_merch = ko.observable(!!opts.package);
    self$$0.allow_video = ko.computed(function() {
        return self$$0.videos().length > 0 && self$$0.video_sharing_enabled()
    });
    self$$0.allow_choose_video = ko.computed(function() {
        return self$$0.videos().length > 1
    });
    self$$0.show_standard_options = ko.computed(function() {
        return self$$0.size() == "large"
    }).extend({
        notify: "always"
    });
    self$$0.showing_merch = ko.computed(function() {
        return self$$0.show_standard_options() && self$$0.artwork_option() == "large" && self$$0.show_merch() && self$$0.package()
    }).extend({
        notify: "always"
    });
    self$$0.show_tracklist = ko.observable(opts.show_tracklist);
    self$$0.show_tracklist.subscribe(function(val) {});
    self$$0.needHeightRecalc = ko.computed(function() {
        return self$$0.layout() + self$$0.show_tracklist() + self$$0.showing_merch() + self$$0.size() + (self$$0.exclusive() ? self$$0.exclusiveVM.needHeightRecalc() : "")
    }).extend({
        notify: "always"
    });
    self$$0.needHeightRecalc.subscribe(function() {
        setTimeout(function() {
            _applyWidth(self$$0.width() === "100%" ? self$$0.width() : self$$0.input_width())
        }, 0)
    });
    self$$0.isdark = ko.computed(function() {
        return self$$0.bgcol() == "333333"
    });
    self$$0.title = ko.observable(opts.title);
    self$$0.art_id = ko.observable(opts.art_id);
    self$$0.artist = ko.observable(opts.artist);
    self$$0.linkback = ko.observable(opts.linkback);
    self$$0.sizekey = ko.computed(function() {
        return self$$0.size()
    });
    var DEFAULT_SIZES = {
        large: {
            width: 350,
            height: 350,
            min_width: 170,
            max_width: 700
        },
        medium: {
            width: "100%",
            height: 120,
            min_width: 250,
            max_width: 700
        },
        small: {
            width: "100%",
            height: 42,
            min_width: 170,
            max_width: 700
        }
    };
    var DELTAS = {
        standard: {
            infopanel: 120,
            list_base: -14,
            list_item: 33,
            list_small_art: 36,
            track: -28,
            merch_nominal: 57,
            merch_absolute: 10
        },
        sidebar: {
            infopanel: 142,
            list_base: -16,
            list_item: 33,
            list_small_art: 38,
            track: -28,
            merch_nominal: 53,
            merch_absolute: 10
        }
    };
    var DEFAULT_HORIZ_WIDTH = 400;
    var SIDEBAR_WIDTH_MAX = 299;
    var STANDARD_SMALLART_WIDTH_MIN = 250;
    var NOMINAL_MERCH_HEIGHT = 67;
    var INFOPANEL_HEIGHT = 120;
    var LIST_BASE_HEIGHT = -9;
    var LIST_ITEM_HEIGHT = 33;
    var TRACK_DELTA = -28;
    var MIN_LIST_ITEMS = 2;
    var MAX_LIST_ITEMS = 10;
    var DEFAULT_NUM_LIST_ITEMS = 10;
    var VIDEO_ASPECT_RATIO = 16 / 9;
    var VIDEO_INFO_HEIGHT = 120;
    var VIDEO_MIN_WIDTH = 360;
    var VIDEO_MAX_WIDTH = 4E3;
    var VIDEO_DEFAULT_WIDTH = 560;
    self$$0.hRange = hRange;
    self$$0.heightRange = function(width) {
        if (self$$0.layout() == "video") {
            var height = _videoHeight(width);
            return make_range(height, height)
        }
        var sizekey = self$$0.sizekey();
        var defaults = DEFAULT_SIZES[sizekey];
        var deltas = width <= SIDEBAR_WIDTH_MAX && self$$0.artwork_option() == "large" ? DELTAS.sidebar : DELTAS.standard;
        return hRange(width, defaults, deltas, self$$0.show_standard_options(), self$$0.layout() == "minimal", self$$0.type() == "track", self$$0.showing_merch(), self$$0.show_tracklist(), self$$0.artwork_option() != "large")
    }
    ;
    self$$0.wRange = wRange;
    self$$0.widthRange = function(h) {
        var sizekey = self$$0.sizekey();
        var defaults = DEFAULT_SIZES[sizekey];
        if (self$$0.layout() == "video")
            return make_range(VIDEO_MIN_WIDTH, VIDEO_MAX_WIDTH);
        var standardRange = wRange(h, defaults, DELTAS.standard, self$$0.show_standard_options(), self$$0.layout() == "minimal", self$$0.type() == "track", self$$0.showing_merch(), self$$0.show_tracklist(), self$$0.artwork_option() != "large");
        var sidebarRange = null;
        if (self$$0.size() == "large") {
            sidebarRange = wRange(h, defaults, DELTAS.sidebar, self$$0.show_standard_options(), self$$0.layout() == "minimal", self$$0.type() == "track", self$$0.showing_merch(), self$$0.show_tracklist(), self$$0.artwork_option() != "large");
            if (standardRange.max < SIDEBAR_WIDTH_MAX)
                return sidebarRange;
            return [sidebarRange, standardRange]
        }
        return standardRange
    }
    ;
    self$$0.minWidth = ko.computed(function() {
        if (self$$0.layout() == "video")
            return VIDEO_MIN_WIDTH;
        if (self$$0.size() == "large" && self$$0.artwork_option() != "large")
            return STANDARD_SMALLART_WIDTH_MIN;
        var sizekey = self$$0.sizekey();
        var defaults = DEFAULT_SIZES[sizekey];
        return defaults.min_width
    });
    self$$0.maxWidth = ko.computed(function() {
        if (self$$0.layout() == "video")
            return VIDEO_MAX_WIDTH;
        var sizekey = self$$0.sizekey();
        var defaults = DEFAULT_SIZES[sizekey];
        return defaults.max_width
    });
    self$$0.isFixedHeight = ko.computed(function() {
        if (self$$0.layout() == "video")
            return true;
        switch (self$$0.size()) {
        case "medium":
        case "small":
            return true;
        case "large":
            return !(self$$0.show_tracklist() || self$$0.artwork_option() == "large")
        }
    });
    self$$0.allowAutoWidth = ko.computed(function() {
        return self$$0.isFixedHeight() && self$$0.layout() != "video"
    });
    self$$0.chooseSize = function(size) {
        var orig_size = size;
        if (size == "exclusive")
            size = "large";
        switch (size) {
        case "video":
            self$$0.layout("video");
            self$$0.input_width(VIDEO_DEFAULT_WIDTH);
            break;
        case "large":
            self$$0.size(size);
            if (orig_size !== "exclusive" || self$$0.exclusive() && self$$0.exclusiveVM.num_tracks > 1)
                self$$0.specifyWidth();
            if (self$$0.exclusive())
                self$$0.input_width(self$$0.exclusiveVM.previewWidth());
            else
                self$$0.input_width(DEFAULT_SIZES.large.width);
            break;
        case "medium":
            self$$0.layout("standard");
            self$$0.size("large");
            self$$0.artwork("small");
            self$$0.dontSpecifyWidth();
            break;
        case "small":
            self$$0.layout("slim");
            self$$0.size(size);
            self$$0.dontSpecifyWidth();
            break
        }
    }
    ;
    self$$0.minHeight = ko.computed(function() {
        var sizekey = self$$0.sizekey();
        var defaults = DEFAULT_SIZES[sizekey];
        var range = self$$0.heightRange(defaults.min_width);
        return range.min
    });
    self$$0.show_art.subscribe(function(val) {
        if (!val)
            self$$0.dontSpecifyWidth()
    });
    self$$0.show_tracklist.subscribe(function(val) {
        if (val) {
            _applyWidth(self$$0.input_width());
            self$$0.specifyWidth()
        }
    });
    self$$0.artwork.subscribe(function(val) {
        self$$0.quiet_errors_for_a_bit();
        if (val != "large" && !self$$0.show_tracklist())
            self$$0.dontSpecifyWidth();
        else {
            self$$0.specifyWidth();
            if (val == "large")
                self$$0.input_width(DEFAULT_SIZES.large.width);
            else {
                var hRange = self$$0.heightRange(self$$0.input_width());
                self$$0._applying_dimensions = true;
                if (self$$0.exclusive())
                    self$$0.input_height(hRange.min);
                else
                    self$$0.input_height(pin(self$$0.input_height(), hRange));
                self$$0.height(self$$0.input_height());
                self$$0._applying_dimensions = false
            }
        }
    });
    self$$0.input_width.subscribe(_applyWidth);
    self$$0.input_height.subscribe(_applyHeight);
    self$$0.incrementNumTracks = function(delta) {
        var increment = delta == 1 ? .5 : -.5;
        var up = delta == 1;
        var range = self$$0.heightRange(self$$0.width());
        var height = Number(self$$0.height());
        var num_visible_tracks = (height - range.min) / LIST_ITEM_HEIGHT;
        if (up)
            num_visible_tracks = Math.floor(num_visible_tracks) + delta;
        else
            num_visible_tracks = Math.ceil(num_visible_tracks) + delta;
        var new_height = pin(range.min + num_visible_tracks * LIST_ITEM_HEIGHT, range);
        self$$0.input_height(new_height)
    }
    ;
    self$$0.parm = function(name) {
        if (self$$0[name] && self$$0[name]())
            return name + "\x3d" + escape(self$$0[name]());
        return ""
    }
    ;
    self$$0.preview_scale = ko.computed(function() {
        var w = self$$0.width();
        var h = self$$0.height();
        var scalew = 1;
        var scaleh = 1;
        if (w > self$$0.PREVIEW_MAX_WIDTH())
            scalew = self$$0.PREVIEW_MAX_WIDTH() / w;
        if (h > self$$0.PREVIEW_MAX_HEIGHT)
            scaleh = self$$0.PREVIEW_MAX_HEIGHT / h;
        return Math.min(scalew, scaleh)
    });
    self$$0.preview_scale_w = ko.computed(function() {
        var w = self$$0.width();
        var scalew = 1;
        if (w > self$$0.PREVIEW_MAX_WIDTH())
            scalew = self$$0.PREVIEW_MAX_WIDTH() / w;
        return scalew
    });
    self$$0.preview_dimensions = ko.computed(function() {
        var w = Number(self$$0.width());
        var h = Number(self$$0.height());
        if (w > self$$0.PREVIEW_MAX_WIDTH()) {
            w = self$$0.PREVIEW_MAX_WIDTH();
            h = pin(h, self$$0.heightRange(w))
        }
        if (h > self$$0.PREVIEW_MAX_HEIGHT) {
            h = self$$0.PREVIEW_MAX_HEIGHT;
            w = pin(w, self$$0.widthRange(h))
        }
        return {
            w: w,
            h: h
        }
    });
    self$$0.debug_in_new_frame = function() {
        var url = _embedCode("url", _getParams(false));
        window.open(url, "playerembeddebug")
    }
    ;
    self$$0.code = ko.computed(function() {
        return _embedCode(self$$0.kind(), _getParams(false))
    });
    self$$0.asyncCode = ko.computed(function() {
        if (!self$$0.exclusive())
            return;
        if (self$$0.exclusiveVM.xhrInProgress())
            return "please wait...";
        if (self$$0.exclusiveVM.xhrError())
            return "An error occurred - embed code not available - " + self$$0.exclusiveVM.xhrError();
        var parms = _getParams(false);
        parms.push("esig\x3d" + self$$0.exclusiveVM.exclusiveSignature);
        return _embedCode(self$$0.kind(), parms)
    });
    self$$0.preview = ko.computed(function() {
        var params = _getParams(true);
        if (self$$0.exclusive()) {
            if (self$$0.exclusiveVM.xhrInProgress())
                return "";
            params.push(self$$0.exclusiveVM.getPreviewParam())
        }
        return _embedCode("html", params, true)
    }).extend({
        throttle: 500
    });
    if (self$$0.exclusive())
        self$$0.exclusiveVM.remoteInit()
}
function ShareVM(rootelem, embeddata, size$$0) {
    function css_color_hex(color_css) {
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2)
        }
        var rgb = color_css.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i);
        if (rgb)
            return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        var hexmatch = color_css.match(/#([0-9a-fA-F]+)/);
        if (hexmatch)
            return hexmatch[1]
    }
    function get_color_index(selector, elem) {
        var result = null;
        $root.find(selector + " .color_sample").each(function(i, e) {
            if (e == elem)
                result = i
        });
        return result
    }
    function get_color_value(selector, i) {
        return self.get_css_color($root.find(selector + " .color_sample")[i])
    }
    function set_embed_bgcol(index) {
        self.embed.bgcol(get_color_value(".bgcolor", index));
        var swatchclass = index === 0 ? ".linkcolor.light" : ".linkcolor.dark";
        var linkcol = get_color_value(swatchclass, self.link_color_index());
        self.embed.linkcol(linkcol)
    }
    var self = this;
    var $root = $(rootelem);
    self.$root = $root;
    var original_embeddata = embeddata;
    self.exclusive = ko.observable(size$$0 === "exclusive");
    if (embeddata.album_embed_data)
        embeddata = embeddata.album_embed_data;
    var embedopts = {
        title: embeddata.title || embeddata.album_title,
        linkback: embeddata.linkback,
        art_id: embeddata.art_id,
        artist: embeddata.artist,
        type: embeddata.tralbum_param.name,
        id: embeddata.tralbum_param.value,
        siteroot: embeddata.swf_base_url,
        packages: embeddata.packages,
        videos: embeddata.videos,
        num_tracks: embeddata.num_tracks,
        selected_track_id: embeddata.track_id,
        embed_info: embeddata.embed_info,
        original_embeddata: original_embeddata
    };
    self.embed = new PlayerEmbedVM(embedopts,self,size$$0);
    self.state = ko.observable("picksize");
    self.test = ko.observable("testing");
    self.embed_data = embeddata;
    self.bg_color_index = ko.observable(0);
    self.link_color_index = ko.observable(0);
    self.pickingsize = ko.computed(function() {
        return self.state() == "picksize"
    });
    self.customising = ko.computed(function() {
        return self.state() == "customising"
    });
    self.querying = ko.observable(false);
    self.previewloading = ko.observable(true);
    self.preview = ko.observable();
    self.allow_video = self.embed.allow_video;
    self.tralbum_type = embeddata.tralbum_param.name;
    self.maxWidth = ko.observable(self.exclusive() ? 444 : 560);
    self.publicEmbeddable = ko.observable(embeddata.embed_info && embeddata.embed_info.public_embeddable);
    self.privateTralbum = ko.observable(!embeddata.embed_info.item_public);
    self.picksize = function(size) {
        self.embed.chooseSize(size);
        set_embed_bgcol(self.bg_color_index());
        self.state("customising")
    }
    ;
    self.repicksize = function() {
        self.preview("");
        self.state("picksize")
    }
    ;
    var DIALOG_BASE_SIZE = 650;
    var DIALOG_PREVIEW_PADDING = 185;
    var DIALOG_SIZE_CONSTANTS = {
        base: 650,
        large: 40,
        merch: 30,
        campaign: 70
    };
    self.dialog_height = ko.observable(DIALOG_SIZE_CONSTANTS.base);
    self.recalcDialogHeight = ko.computed(function() {
        var sizeStateVariable = self.state() + self.embed.preview() + self.embed.artwork() + self.embed.show_art();
        return sizeStateVariable
    });
    self.recalcDialogHeight.subscribe(function(val) {
        var height = DIALOG_SIZE_CONSTANTS.base;
        if (self.state() != "picksize") {
            if (self.embed.show_standard_options()) {
                height += DIALOG_SIZE_CONSTANTS.large;
                if (self.embed.showing_merch())
                    height += DIALOG_SIZE_CONSTANTS.merch
            }
            if (embeddata.show_campaign)
                height += DIALOG_SIZE_CONSTANTS.campaign;
            var pd = self.embed.preview_dimensions();
            var height_for_preview = pd.h + DIALOG_PREVIEW_PADDING;
            if (height_for_preview > height)
                height = height_for_preview
        }
        self.dialog_height(height)
    });
    self.embed.preview.subscribe(function(val) {
        self.previewloading(true);
        self.preview(val)
    });
    self.get_css_color = function(elem) {
        var css_color = $(elem).css("background-color");
        return css_color_hex(css_color)
    }
    ;
    self.islink = function(index) {
        if (self.link_color_index() == index - 1)
            return true;
        return false
    }
    ;
    self.isbg = function(index) {
        if (self.bg_color_index() == index - 1)
            return true;
        return false
    }
    ;
    $root.on("click", ".linkcolor.light .color_sample", function(e) {
        self.link_color_index(get_color_index(".linkcolor.light", e.currentTarget))
    });
    $root.on("click", ".linkcolor.dark .color_sample", function(e) {
        self.link_color_index(get_color_index(".linkcolor.dark", e.currentTarget))
    });
    $root.on("click", ".bgcolor .color_sample", function(e) {
        self.bg_color_index(get_color_index(".bgcolor", e.currentTarget))
    });
    $root.on("keydown", ".height", function(e) {
        if (e.altKey && self.embed.show_standard_options() && self.embed.show_tracklist())
            switch (e.which) {
            case 38:
                self.embed.incrementNumTracks(1);
                e.preventDefault();
                break;
            case 40:
                self.embed.incrementNumTracks(-1);
                e.preventDefault();
                break
            }
    });
    $root.on("keypress", "[type\x3dnumber]", function(e) {
        var code = e.keyCode === 0 ? e.charCode : e.keyCode;
        switch (code) {
        case 8:
        case 9:
        case 37:
        case 38:
        case 39:
        case 40:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            return true;
        default:
            e.preventDefault();
            return false
        }
    });
    self.link_color_index.subscribe(function(val) {
        var swatchclass = self.bg_color_index() === 0 ? ".linkcolor.light" : ".linkcolor.dark";
        var linkcol = get_color_value(swatchclass, self.link_color_index());
        self.embed.linkcol(linkcol)
    });
    self.bg_color_index.subscribe(set_embed_bgcol);
    $root.on("click", ".embed_text", function(e) {
        $(e.currentTarget).focus().select();
        e.preventDefault()
    });
    $root.on("click", ".sizechoice", function(e) {
        var size = $(e.currentTarget).data("size");
        self.picksize(size)
    });
    if (size$$0)
        self.picksize(size$$0)
}
var EmbedDialog = {
    _dialog: null,
    _viewmodel: null,
    open: function(size) {
        function resize() {
            var val = svm.dialog_height();
            var contenth = $(".ui-dialog-content").height();
            if (size === "exclusive") {
                var minHeight = Math.max(val, contenth);
                $(".ui-dialog.exclusive .ui-dialog-content").css("min-height", minHeight);
                $(".ui-dialog.exclusive .ui-dialog-content").height("auto")
            } else
                delem.dialog("option", "height", val)
        }
        function center() {
            delem.dialog("option", "position", "center")
        }
        var isExclusive = size === "exclusive";
        size = typeof size !== "undefined" ? size : null;
        var delem = $("\x3cdiv\x3e");
        var dialogparams = {
            draggable: true,
            dialogClass: isExclusive ? "share_dialog exclusive" : "share_dialog",
            width: "1005",
            position: "center",
            modal: true,
            title: isExclusive ? "Exclusive Embed" : "Customize"
        };
        var d = delem.dialog(dialogparams);
        EmbedDialog._dialog = d;
        var liquidparams = {
            art_id: EmbedData.art_id,
            exclusive_embed: isExclusive,
            show_campaign: EmbedData.show_campaign
        };
        EmbedData.packages = TralbumData.packages;
        EmbedData.num_tracks = TralbumData.trackinfo.length;
        EmbedData.videos = [];
        for (var i = 0; i < TralbumData.trackinfo.length; i++) {
            var ti = TralbumData.trackinfo[i];
            if (ti.video_id) {
                EmbedData.videos.push({
                    track_id: ti.track_id,
                    track_number: ti.track_num,
                    track_name: ti.title
                });
                if (!liquidparams.video_poster_url || ti.video_featured)
                    liquidparams.video_poster_url = ti.video_poster_url
            }
        }
        if (EmbedData.album_embed_data)
            EmbedData.album_embed_data.videos = EmbedData.videos;
        d.html(Templ.render("_share2", liquidparams));
        var svm = new ShareVM(delem[0],EmbedData,size);
        EmbedDialog._viewmodel = svm;
        ko.applyBindings(svm, delem[0]);
        svm.dialog_height.subscribe(resize);
        resize();
        center();
        $(window).on("resize", center);
        $(window).on("message", function(event) {
            if (event.originalEvent.data == "playerinited")
                svm.previewloading(false)
        });
        if (isExclusive)
            $(".ui-dialog-titlebar-close.ui-corner-all").on("mousedown", function(event) {
                EmbedDialog._dialog.dialog("close");
                return false
            });
        return d
    }
};
function ExclusiveEmbedVM(parentVM$$0, tralbumData, opts) {
    function TrackOption(t, parentVM) {
        var self = this;
        self.parentVM = parentVM;
        var pageInfo = "track_num"in t;
        self.title = t.title;
        self.track_id = t.id;
        self.track_number = pageInfo && t.track_num ? t.track_num : t.tracknum;
        self.has_audio = !!(t.encodings_id || t.duration && t.duration > 0);
        self.isChecked = ko.observable(pageInfo ? self.has_audio : self.has_audio && t.default_albumtrack);
        self.preorder = t.album_preorder;
        var alreadyStreaming = false;
        if (pageInfo)
            alreadyStreaming = t.album_preorder ? t.streaming && !t.unreleased_track : t.streaming;
        else
            alreadyStreaming = t.album_preorder ? t.track_streaming && t.preorder_download_track : t.track_streaming;
        self.alreadyStreamable = ko.observable(alreadyStreaming);
        self.trackRowFaded = ko.computed(function() {
            var idx = self.track_number;
            var retval = idx === TRACKLIST_FOLD && !self.parentVM.trackListExpanded() && self.parentVM.showMoreTracksLink();
            return idx === TRACKLIST_FOLD && !self.parentVM.trackListExpanded() && self.parentVM.showMoreTracksLink()
        });
        self.trackRowVisible = ko.computed(function(idx) {
            idx = self.track_number;
            return idx <= TRACKLIST_FOLD || self.parentVM.trackListExpanded()
        });
        self.notSelectable = ko.computed(function() {
            if (!self.isChecked())
                return false;
            var tracks = parentVM.tracks();
            var uncheckedCount = 0;
            for (var i = 0; i < tracks.length; i++)
                if (tracks[i].isChecked())
                    uncheckedCount++;
            return uncheckedCount <= 1
        });
        self.trackNumberText = ko.computed(function() {
            return self.track_number ? self.track_number + "." : ""
        });
        self.selectTrack = function(data, event) {
            parentVM.doToggleTrack();
            return true
        }
        ;
        self.noChange = function(data, event) {
            return false
        }
    }
    function DomainOptions(_domainName, prevalidated, parentVM) {
        var self = this;
        self.parentVM = parentVM;
        self.domainName = ko.observable(_domainName);
        self.noEdit = ko.observable(false);
        self.isInvalid = ko.observable(false);
        self.prevalidated = typeof prevalidated === "undefined" ? false : !!prevalidated;
        self.isValid = ko.observable(false);
        self.showError = ko.observable(false);
        self.isNeedingSubdomain = ko.observable(false);
        self.isSocialMedia = ko.observable(false);
        self.errorMessage = ko.computed(function() {
            if (self.isSocialMedia())
                return "You can't use an exclusive embed on this domain.";
            if (self.isNeedingSubdomain())
                return "This site requires a subdomain.";
            return "This is not a valid site address."
        });
        self.clone = function() {
            return new DomainOptions(self.domainName(),self.prevalidated,self.parentVM)
        }
        ;
        self.markAsSaved = function() {
            if (!self.domainName())
                return;
            if (self.prevalidated)
                return;
            self.prevalidated = true
        }
        ;
        self.reInit = function() {
            self.domainName("");
            self.isInvalid(false);
            self.isValid(false);
            self.showError(false);
            self.relevantDomainName = ""
        }
        ;
        self.onKeypress = function(data, event) {
            if (event.keyCode === 13)
                self.parentVM.doAddSite()
        }
        ;
        self.onUpdate = ko.computed(function(data, event) {
            self.parentVM.markDirty();
            self.showError(false);
            self.parentVM.errNeedsAtLeastOne(false);
            var _domainName = self.domainName();
            self.relevantDomainName = "";
            self.isNeedingSubdomain(false);
            self.isSocialMedia(false);
            if (!_domainName && !self.quiet) {
                self.isInvalid(false);
                self.isValid(false);
                return false
            }
            var h = Url.toHash(_domainName, true);
            if (!h.hostname && !h.protocol) {
                _domainName = "http://" + _domainName;
                h = Url.toHash(_domainName, true)
            }
            if (!h.hostname) {
                self.isInvalid(true);
                self.isValid(false);
                return false
            }
            if (h.hostname.match(/\btwitter\.com$/i) || h.hostname.match(/\bfacebook\.com$/i) || h.hostname.match(/\binstagram\.com$/i)) {
                if (!h.hostname.match(/[-\/_]twitter\.com$/i) && !h.hostname.match(/[-\/_]facebook\.com$/i) && !h.hostname.match(/[-\/_]instagram\.com$/i)) {
                    self.isSocialMedia(true);
                    self.isInvalid(true);
                    self.isValid(false);
                    return false
                }
            } else if (h.hostname.match(/^wordpress\.com$/i) || h.hostname.match(/^www.wordpress\.com$/i) || h.hostname.match(/^tumblr\.com$/i) || h.hostname.match(/^www.tumblr\.com$/i)) {
                self.isNeedingSubdomain(true);
                self.isInvalid(true);
                self.isValid(false);
                return false
            }
            self.relevantDomainName = h.hostname.toLowerCase();
            self.isInvalid(false);
            self.isValid(true);
            self.isNeedingSubdomain(false);
            self.isSocialMedia(false);
            return true
        });
        self.isSelected = ko.observable(true)
    }
    var self$$0 = this;
    self$$0.parentVM = parentVM$$0;
    self$$0.tralbumMembershipType = ko.observable(tralbumData.item_type == "album" ? "album" : opts.embed_info.mplayerdata_album ? "albumtrack" : "standalonetrack");
    var relevantTracks = 0;
    var totalTracks = 0;
    if (self$$0.tralbumMembershipType() == "albumtrack") {
        var trackinfo = opts.embed_info.mplayerdata_album.data.tracks;
        totalTracks = trackinfo.length;
        for (var i$$0 = 0; i$$0 < trackinfo.length; i$$0++)
            if (trackinfo[i$$0].duration && trackinfo[i$$0].duration > 0 || trackinfo[i$$0].encodings_id)
                relevantTracks++
    } else {
        totalTracks = tralbumData.trackinfo.length;
        for (i$$0 = 0; i$$0 < tralbumData.trackinfo.length; i$$0++)
            if (tralbumData.trackinfo[i$$0].duration && tralbumData.trackinfo[i$$0].duration > 0 || tralbumData.trackinfo[i$$0].encodings_id)
                relevantTracks++
    }
    self$$0.userSelectableTracks = ko.observable(relevantTracks > 1);
    self$$0.heightEstimate = function(numTracks) {
        var trackFactor = Math.min(numTracks, 15);
        return trackFactor > 2 ? 530 + (trackFactor - 2) * 30 : 530
    }
    ;
    self$$0.PREVIEW_MAX_HEIGHT = Math.min(950, self$$0.heightEstimate(totalTracks));
    self$$0.PREVIEW_MAX_WIDTH = 400;
    self$$0.DEFAULT_HORIZ_WIDTH_SINGLE_TRACK = 444;
    self$$0.DEFAULT_HEIGHT_SINGLE_TRACK = 120;
    self$$0.num_tracks = opts.original_embeddata ? opts.original_embeddata.num_tracks : opts.num_tracks;
    if (self$$0.num_tracks === 1) {
        opts.show_tracklist = false;
        opts.layout = "standard";
        opts.artwork = "small";
        opts.width = self$$0.DEFAULT_HORIZ_WIDTH_SINGLE_TRACK
    } else {
        opts.show_tracklist = true;
        opts.width = self$$0.PREVIEW_MAX_WIDTH
    }
    self$$0.previewWidth = ko.observable(opts.width);
    self$$0.opts = opts;
    self$$0.trackListExpanded = ko.observable(false);
    self$$0.showMoreTracksLink = ko.observable(tralbumData.trackinfo && tralbumData.trackinfo.length > 15);
    var TRACKLIST_FOLD = 15;
    self$$0.errNeedsAtLeastOne = ko.observable(false);
    self$$0.xhrInProgress = ko.observable(false);
    self$$0.xhrError = ko.observable(false);
    self$$0.exclusiveSignature = null;
    self$$0.tralbum_type = ko.observable(opts.type);
    self$$0.tracks = ko.observableArray();
    self$$0.candidateDomains = ko.observableArray();
    self$$0.permittedDomains = ko.observableArray();
    self$$0.needHeightRecalc = ko.computed(function() {
        return self$$0.permittedDomains().length + "," + self$$0.candidateDomains().length
    });
    self$$0.domainsEditable = ko.observable(false);
    self$$0.domainsEditableFlag = false;
    self$$0.isDirty_tracks = ko.observable(false);
    self$$0.isDirty_sites = ko.observable(false);
    self$$0.markDirty = function() {
        self$$0.isDirty_sites(true);
        return true
    }
    ;
    self$$0.editSitesText = ko.computed(function() {
        if (self$$0.candidateDomains().length < 1)
            return "+ add site";
        return "edit sites"
    });
    self$$0.allSitesValidated = ko.computed(function() {
        var arr = self$$0.candidateDomains();
        for (var i = 0; i < arr.length; i++)
            if (!arr[i].isValid())
                return false;
        return true
    });
    self$$0.enableSitesSave = ko.computed(function() {
        var cd = self$$0.candidateDomains();
        if (cd.length < 1)
            return false;
        return self$$0.isDirty_sites() && !self$$0.xhrInProgress() && self$$0.noShownErrors()
    });
    self$$0.enableSitesCancel = ko.computed(function() {
        return self$$0.permittedDomains().length > 0
    });
    self$$0.noShownErrors = ko.computed(function() {
        for (var i = 0; i < self$$0.candidateDomains().length; i++)
            if (self$$0.candidateDomains()[i].showError())
                return false;
        return true
    });
    self$$0.sitesErrorMessageExtra = ko.computed(function() {
        if (!self$$0.candidateDomains)
            return false;
        if (self$$0.noShownErrors())
            return false;
        var cd = self$$0.candidateDomains();
        for (var i = 0; i < cd.length; i++) {
            var candidate = cd[i];
            if (candidate.errorMessage()) {
                if (candidate.isSocialMedia()) {
                    var socialMediaName = "Twitter";
                    if (candidate.domainName().match(/facebook/i))
                        socialMediaName = "Facebook";
                    if (candidate.domainName().match(/instagram/i))
                        socialMediaName = "Instagram";
                    return "Exclusive embeds let specific blogs and websites stream tracks that " + "you aren\u2019t streaming on your public album page. They're not intended for " + "usage across an entire social media channel, such as " + socialMediaName + ". " + "\x3ca target\x3d 'blank' href\x3d'/help/exclusive_embed'\x3eLearn more about using exclusive embeds\x3c/a\x3e."
                }
                if (candidate.isNeedingSubdomain()) {
                    var blogName = "WordPress";
                    var www = null;
                    if (candidate.domainName().match(/tumblr\.com/i))
                        blogName = "Tumblr";
                    if (candidate.domainName().match(/^www/i))
                        www = true;
                    return "Sites hosted by " + blogName + " should include a subdomain" + (www ? " other than www." : "") + " (i.e., they should look something like \x3cem\x3eyourblog." + blogName.toLowerCase() + ".com\x3c/em\x3e)."
                }
            }
        }
        return null
    });
    self$$0.isPreorder = ko.observable(false);
    if (tralbumData.trackinfo.length > 0) {
        var items = [];
        if (self$$0.tralbumMembershipType() == "albumtrack") {
            var album_preorder = opts.embed_info.mplayerdata_album.data.is_preorder === 1;
            self$$0.isPreorder(album_preorder);
            var albumtrack_id = tralbumData.trackinfo[0].id;
            trackinfo = opts.embed_info.mplayerdata_album.data.tracks;
            for (i$$0 = 0; i$$0 < trackinfo.length; i$$0++) {
                trackinfo[i$$0].default_albumtrack = albumtrack_id === trackinfo[i$$0].id;
                trackinfo[i$$0].album_preorder = album_preorder;
                items.push(new TrackOption(trackinfo[i$$0],self$$0));
                if (trackinfo[i$$0].duration && trackinfo[i$$0].duration > 0 || trackinfo[i$$0].encodings_id)
                    relevantTracks++
            }
        } else
            for (i$$0 = 0; i$$0 < tralbumData.trackinfo.length; i$$0++) {
                items.push(new TrackOption(tralbumData.trackinfo[i$$0],self$$0));
                if (tralbumData.trackinfo[i$$0].album_preorder && !self$$0.isPreorder())
                    self$$0.isPreorder(true)
            }
        self$$0.tracks(items)
    }
    self$$0.fillPermittedDomains = function(permitted_domains, getCase) {
        var itemsPermitted = [];
        var itemsCandidates = [];
        for (var i = 0; permitted_domains && i < permitted_domains.length; i++) {
            itemsPermitted.push(new DomainOptions(permitted_domains[i],true,self$$0));
            if (getCase)
                itemsCandidates.push(new DomainOptions(permitted_domains[i],true,self$$0))
        }
        self$$0.permittedDomains(itemsPermitted);
        if (getCase) {
            self$$0.candidateDomains(itemsCandidates);
            if (i > 0)
                self$$0.showCheckMarks(true)
        }
        if (self$$0.permittedDomains().length < 1)
            self$$0.doEditSites()
    }
    ;
    self$$0.markAsSaved = function() {
        for (var i = 0; i < self$$0.candidateDomains().length; i++)
            self$$0.candidateDomains()[i].markAsSaved();
        self$$0.isDirty_tracks(false);
        self$$0.isDirty_sites(false)
    }
    ;
    self$$0.showAnywhere = ko.observable("r");
    self$$0.showEditSites = ko.computed(function() {
        return self$$0.showAnywhere() === "r" && !self$$0.domainsEditable()
    });
    self$$0.showAddSite = ko.computed(function() {
        return self$$0.showAnywhere() === "r" && self$$0.domainsEditable()
    });
    self$$0.showCheckMarks = ko.observable(false);
    self$$0.doEditSites = function() {
        if (self$$0.domainsEditable())
            return;
        self$$0.domainsEditable(true);
        self$$0.domainsEditableFlag = true;
        if (self$$0.candidateDomains().length < 1)
            self$$0.doAddSite()
    }
    ;
    self$$0.doAddSite = function() {
        self$$0.candidateDomains.push(new DomainOptions("",false,self$$0))
    }
    ;
    self$$0.canDeleteCandidate = ko.computed(function() {
        return self$$0.domainsEditable() && self$$0.candidateDomains().length > 1
    });
    self$$0.doDeleteCandidate = function(obj, ev) {
        if (self$$0.candidateDomains().length === 1)
            this.reInit();
        else
            self$$0.candidateDomains.remove(obj);
        self$$0.isDirty_sites(true);
        return true
    }
    ;
    self$$0.doSaveSites = function() {
        if (!self$$0.enableSitesSave())
            return false;
        var dontSave = false;
        var nothingToSave = true;
        var cd = self$$0.candidateDomains();
        for (var i = 0; i < cd.length; i++)
            if (cd[i].isInvalid()) {
                cd[i].showError(true);
                dontSave = true
            } else if (cd[i].relevantDomainName && cd[i].relevantDomainName.trim() !== "")
                nothingToSave = false;
        if (dontSave)
            return false;
        if (nothingToSave) {
            self$$0.errNeedsAtLeastOne(true);
            return false
        }
        self$$0.candidateDomains.remove(function(d) {
            return !d.relevantDomainName
        });
        if (self$$0.candidateDomains().length === 0)
            return false;
        self$$0.apiExclusiveEmbed("save", "click-save");
        return true
    }
    ;
    self$$0.showDomainError = function(problemDomainName) {
        var cd = self$$0.candidateDomains();
        for (var i = 0; i < cd.length; i++)
            if (cd[i].relevantDomainName === problemDomainName) {
                cd[i].isInvalid(true);
                cd[i].showError(true)
            }
    }
    ;
    self$$0.completeSave = function(saveSource) {
        if (self$$0.isDirty_sites()) {
            var cd = self$$0.candidateDomains();
            self$$0.permittedDomains.removeAll();
            for (var i = 0; i < cd.length; i++)
                self$$0.permittedDomains.push(cd[i].clone());
            self$$0.markAsSaved()
        }
        self$$0.closeSiteEditor();
        if (saveSource && saveSource === "click-save")
            self$$0.showCheckMarks(true)
    }
    ;
    self$$0.doCancelSitesEdit = function() {
        if (self$$0.permittedDomains().length === 0)
            return false;
        if (self$$0.isDirty_sites()) {
            self$$0.isDirty_sites(false);
            self$$0.candidateDomains.removeAll();
            var pd = self$$0.permittedDomains();
            for (var i = 0; i < pd.length; i++)
                self$$0.candidateDomains.push(pd[i].clone())
        }
        self$$0.errNeedsAtLeastOne(false);
        if (self$$0.isDirty_tracks())
            self$$0.apiExclusiveEmbed("save");
        else
            self$$0.closeSiteEditor()
    }
    ;
    self$$0.closeSiteEditor = function() {
        self$$0.domainsEditableFlag = false;
        self$$0.domainsEditable(false)
    }
    ;
    self$$0.playerOptionsVisible = ko.observable(false);
    self$$0.togglePlayerOptions = function(data, event) {
        self$$0.playerOptionsVisible(!self$$0.playerOptionsVisible())
    }
    ;
    self$$0.noExclusiveAudioWarning = ko.computed(function() {
        var count = 0;
        var tracks = self$$0.tracks();
        for (var i = 0; i < tracks.length; i++)
            if (tracks[i].isChecked() && !tracks[i].alreadyStreamable())
                count++;
        return count < 1
    });
    self$$0.doToggleTrack = function(data, event) {
        self$$0.isDirty_tracks(true);
        var tracks = self$$0.tracks();
        var checked = 0;
        for (var i = 0; i < tracks.length; i++)
            if (tracks[i].isChecked())
                checked++;
        var changeStandaloneState = self$$0.parentVM.show_tracklist() && checked === 1 || !self$$0.parentVM.show_tracklist() && checked > 1;
        if (changeStandaloneState)
            self$$0.toggleStandalone(checked);
        if (!self$$0.domainsEditable())
            self$$0.apiExclusiveEmbed("save", "click-save");
        return true
    }
    ;
    self$$0.toggleStandalone = function(tracks) {
        if (tracks > 1) {
            self$$0.parentVM.artwork("large");
            self$$0.parentVM.show_tracklist(true);
            self$$0.previewWidth(self$$0.PREVIEW_MAX_WIDTH);
            self$$0.parentVM.PREVIEW_MAX_WIDTH(self$$0.PREVIEW_MAX_WIDTH)
        } else {
            self$$0.parentVM.artwork("small");
            self$$0.parentVM.show_tracklist(false);
            self$$0.previewWidth(self$$0.DEFAULT_HORIZ_WIDTH_SINGLE_TRACK);
            self$$0.parentVM.PREVIEW_MAX_WIDTH(self$$0.DEFAULT_HORIZ_WIDTH_SINGLE_TRACK)
        }
    }
    ;
    self$$0.textShowMoreTracks = ko.computed(function() {
        return self$$0.trackListExpanded() ? "less..." : "more..."
    });
    self$$0.doShowMoreTracks = function() {
        self$$0.trackListExpanded(!self$$0.trackListExpanded())
    }
    ;
    self$$0.showRowCandidateDomain = function(elem) {
        if (elem.nodeType === 1)
            $(elem).hide().slideDown()
    }
    ;
    self$$0.hideRowCandidateDomain = function(elem) {
        if (elem.nodeType === 1)
            $(elem).slideUp(function() {
                $(elem).remove()
            })
    }
    ;
    self$$0.getSelectedTracks = function() {
        var tracks = self$$0.tracks();
        var checked = [];
        for (var i = 0; i < tracks.length; i++)
            if (tracks[i].isChecked())
                checked.push(tracks[i].track_id);
        if (checked.length < 1)
            throw "at least one track must be permitted in exclusive embeds";
        return checked
    }
    ;
    self$$0.getDomainsForSave = function() {
        var retval = [];
        var arr = self$$0.isDirty_sites() ? self$$0.candidateDomains() : self$$0.permittedDomains();
        var countEmpties = 0;
        for (var i = 0; i < arr.length; i++)
            if (arr[i].relevantDomainName)
                retval.push(arr[i].relevantDomainName);
            else
                countEmpties++;
        if (countEmpties > 1)
            Log.debug("warning: unexpected number of empty values");
        return retval
    }
    ;
    self$$0.apiExclusiveEmbed = function(action, source) {
        if (action !== "get" && action !== "save")
            return;
        if (self$$0.xhrInProgress())
            return;
        self$$0.xhrInProgress(true);
        self$$0.xhrError(false);
        var tracksForXHR = self$$0.getSelectedTracks();
        var domainsForXHR = null;
        if (action == "save")
            domainsForXHR = self$$0.getDomainsForSave();
        Crumb.ajax({
            type: "POST",
            url: action === "get" ? "/api/embed/1/get_exclusive" : "/api/embed/1/save_exclusive",
            data: {
                user_id: Identities.user().id,
                band_id: Identities.pageBand.id,
                licensee_band_id: tralbumData.current.licensee_band_id,
                tralbum_id: self$$0.parentVM.id(),
                tralbum_type: self$$0.tralbum_type() == "album" ? "a" : "t",
                permitted_domains: domainsForXHR,
                permitted_tracks: tracksForXHR && tracksForXHR.length > 0 ? tracksForXHR : null
            },
            success: function(data) {
                var saveSource = source;
                if (data.errors) {
                    var errMsg = null;
                    Iter.each(data.errors, function(element) {
                        if (!errMsg)
                            errMsg = element.reason;
                        NuDialog.alert("Error", element.reason)
                    });
                    self$$0.xhrError(errMsg ? errMsg : "Error")
                } else if (data.error) {
                    self$$0.xhrError(data.error_message ? data.error_message : "Error");
                    var errormatches = null;
                    if (data.error_message)
                        errormatches = data.error_message.match(/^invalid domain name (.*)/);
                    if (errormatches)
                        self$$0.showDomainError(errormatches[1]);
                    else
                        NuDialog.alert("Error", data.error_message ? data.error_message : "Error " + (action === "save" ? "saving " : "getting ") + "exclusive embed")
                } else {
                    self$$0.exclusiveSignature = data.signature;
                    if (action === "get") {
                        self$$0.showAnywhere("r");
                        self$$0.fillPermittedDomains(data.permitted_domains, true);
                        self$$0.markAsSaved()
                    } else
                        self$$0.completeSave(saveSource)
                }
                self$$0.xhrInProgress(false)
            },
            error: function(data) {
                if (data && data.error && data.error_message)
                    self$$0.xhrError(data.error_message);
                else
                    self$$0.xhrError("Error");
                self$$0.xhrInProgress(false);
                Log.debug("Error saving exclusive embed:");
                Log.debug(data)
            },
            dataAs: "JSON"
        })
    }
    ;
    self$$0.getPreviewParam = function() {
        if (self$$0.domainsEditableFlag)
            return "fesig\x3d0xFFFF";
        return "esig\x3d" + self$$0.exclusiveSignature
    }
    ;
    self$$0.remoteInit = function() {
        self$$0.apiExclusiveEmbed("get")
    }
}
var Expando = {
    OPEN: 1,
    CLOSED: -1,
    DEFAULT: 0,
    _expandos: {},
    toggle: function(contentNodeId, containerId, containerParentId, exclusive, postState) {
        this._registerContentNode(contentNodeId, containerId, containerParentId);
        var nextState = this._getNextState(contentNodeId, postState);
        if (nextState == this.OPEN) {
            if (exclusive)
                Expando._hide();
            Expando._showAnim(contentNodeId)
        } else
            Expando._hide(contentNodeId);
        if (window.FacebookData)
            FacebookUtils.reportResize()
    },
    isOpen: function(contentNodeId) {
        return this._expandos[contentNodeId] && this._expandos[contentNodeId].state == this.OPEN
    },
    numberOpen: function() {
        var counter = 0;
        for (val in this._expandos)
            if (this._expandos[val].state == this.OPEN)
                counter++;
        return counter
    },
    _showAnim: function(contentNodeId) {
        $assert(this._expandos[contentNodeId], "expected contents node to be registered");
        var info = this._expandos[contentNodeId];
        var expando_block = elt(info.containerId);
        var expando_parent = elt(info.containerParentId);
        Dom.display(expando_block, true);
        if (expando_parent)
            Dom.display(expando_parent, true);
        expando_block.innerHTML = elt(contentNodeId).innerHTML;
        var tmp = expando_block.scrollHeight;
        var attributes = {
            height: {
                to: expando_block.scrollHeight
            }
        };
        var open_anim = new Y.util.Anim(expando_block,attributes);
        open_anim.duration = .5;
        open_anim.method = YAHOO.util.Easing.easeOut;
        open_anim.animate(attributes);
        info.state = this.OPEN
    },
    _hideAnim: function(contentNodeId) {
        $assert(this._expandos[contentNodeId], "expected contents node to be registered");
        var info = this._expandos[contentNodeId];
        var expando_block$$0 = elt(info.containerId);
        var attributes = {
            height: {
                to: 0
            }
        };
        var close_anim = new Y.util.Anim(expando_block$$0,attributes);
        close_anim.duration = .5;
        close_anim.method = YAHOO.util.Easing.easeOut;
        close_anim.animate(attributes);
        chainThis = function() {
            var expando_block = elt(info.containerId);
            var expando_parent = elt(info.containerParentId);
            Dom.display(expando_block, "");
            if (expando_parent)
                Dom.display(expando_parent, "")
        }
        ;
        var curHeight = expando_block$$0.style.height;
        var finishInterval = parseFloat(curHeight) < 20 ? 0 : 500;
        setTimeout(chainThis, finishInterval);
        info.state = this.CLOSED
    },
    _hide: function(contentNodeId) {
        var closeThese = this._expandos;
        if (contentNodeId) {
            closeThese = new Object;
            closeThese[contentNodeId] = contentNodeId
        }
        for (val in closeThese) {
            $assert(this._expandos[val], "expected contents node to be registered");
            if (this._expandos[val].state != this.OPEN)
                continue;
            var expando_block = elt(this._expandos[val].containerId);
            if (expando_block) {
                expando_block.style.height = 0;
                Dom.display(expando_block, "")
            }
            var expando_parent = elt(this._expandos[val].containerParentId);
            if (expando_parent)
                Dom.display(expando_parent, "");
            this._expandos[val].state = this.CLOSED
        }
    },
    _registerContentNode: function(contentNodeId, containerId, containerParentId) {
        if (!this._expandos[contentNodeId]) {
            var relatedIds = {
                "contentNodeId": contentNodeId,
                "containerId": containerId,
                "containerParentId": containerParentId,
                "state": this.INDETERMINATE
            };
            this._expandos[contentNodeId] = relatedIds
        }
    },
    _getNextState: function(contentNodeId, postState) {
        $assert(this._expandos[contentNodeId], "expected contents node to be registered");
        if (postState == this.OPEN || postState == this.CLOSED)
            return postState;
        if (this._expandos[contentNodeId].state == this.OPEN)
            return this.CLOSED;
        return this.OPEN
    }
};
var PeekabooList = {
    enhance: function(root, buttonTextFn, truncateAfterFn, truncateToFn, startTruncated) {
        root = $(root);
        buttonTextFn = buttonTextFn || $.proxy(this, "defaultButtonText");
        truncateAfterFn = truncateAfterFn || $.proxy(this, "defaultTruncateAfter");
        truncateToFn = truncateToFn || $.proxy(this, "defaultTruncateTo");
        startTruncated = startTruncated !== false;
        var firstTime = true;
        root.addClass("peekaboo-list");
        var refresh = function() {
            Log.debug("PeekabooList refresh: " + root.get(0).id);
            var wasTruncated = root.hasClass("truncated");
            root.removeClass("truncated").find(".showMore").remove();
            var items = root.find("li");
            items.removeClass("peekaboo-list-extra");
            if (items.length > truncateAfterFn()) {
                items.slice(truncateToFn()).addClass("peekaboo-list-extra");
                var truncateNow = wasTruncated || firstTime && startTruncated;
                if (truncateNow)
                    root.addClass("truncated");
                root.append('\x3cdiv class\x3d"showMore"\x3e\x3ca href\x3d"#"\x3e\x3c/a\x3e\x3c/div\x3e').find(".showMore a").on("click", handleToggle).text(buttonTextFn(truncateNow))
            }
            firstTime = false
        };
        var handleToggle = function(event) {
            root.toggleClass("truncated");
            var isTruncated = root.hasClass("truncated");
            root.find(".showMore a").text(buttonTextFn(isTruncated));
            root.trigger("toggle", isTruncated);
            return false
        };
        var refreshProxy = $.proxy(refresh, this);
        refreshProxy();
        return refreshProxy
    },
    defaultButtonText: function(truncated) {
        return truncated ? "more..." : "fewer"
    },
    defaultTruncateAfter: function() {
        return 5
    },
    defaultTruncateTo: function() {
        return 3
    },
    zzz: null
};
var Showography = {
    refreshPeekaboo: null,
    domReady: function() {},
    enhance: function() {
        var root = $("#showography");
        if (!root.length)
            return;
        this.refreshPeekaboo = PeekabooList.enhance(root, $.proxy(this, "moreButtonText"), $.proxy(this, "truncateAfter"), $.proxy(this, "truncateTo"));
        root.on("toggle", function(event, isTruncated) {
            if (window.FacebookData)
                FacebookUtils.reportResize()
        });
        root.on("click", "li a", $.proxy(this, "handleShowClick"))
    },
    truncateAfter: function() {
        return window.MediaView && MediaView.mode == "phone" ? 7 : 5
    },
    truncateTo: function() {
        return window.MediaView && MediaView.mode == "phone" ? 5 : 3
    },
    moreButtonText: function(truncated) {
        return truncated ? TM("more shows...", null, "used for live show listings", "live shows") : TM("fewer shows", null, "used for live show listings", "live shows")
    },
    handleShowClick: function() {
        Stats.record({
            kind: "click",
            click: "shows_link"
        })
    },
    zzz: null
};
Showography.enhance();
var Discography = function() {
    return {
        enhance: function(discographyInfo) {
            if (discographyInfo.music_grid)
                if (discographyInfo.discography_real_size > discographyInfo.sidebar_max_size)
                    return;
            var root = $("#discography");
            if (!root.length)
                return;
            PeekabooList.enhance(root, $.proxy(this, "moreButtonText"), $.proxy(this, "truncateAfter"), $.proxy(this, "truncateTo"), sessionStorage.getItem("discography_show_all") != "true");
            root.on("toggle", function(event, isTruncated) {
                sessionStorage.setItem("discography_show_all", isTruncated ? "false" : "true");
                if (window.FacebookData)
                    FacebookUtils.reportResize()
            })
        },
        truncateAfter: function() {
            if (window.FacebookData)
                return window.FacebookData.discoRowSize;
            else if (window.MediaView && MediaView.mode == "phone")
                return 6;
            else
                return 3
        },
        truncateTo: function() {
            if (window.FacebookData)
                return window.FacebookData.discoRowSize;
            else if (window.MediaView && MediaView.mode == "phone")
                return 4;
            else
                return 3
        },
        moreButtonText: function(truncated) {
            return truncated ? TM("more releases...") : TM("fewer releases")
        },
        zzz: null
    }
}();
$(document).ready(function() {
    var blob = $("#pagedata").data("blob") || {};
    Discography.enhance(blob.sidebar_disco || {})
});
var Fixup = window.Fixup || {};
(function(exports) {
    function phoneView() {
        return window.MediaView && MediaView.mode == "phone"
    }
    function doMobileVideo(anchor, ev) {
        if (window.Browser && Browser.make == "safari" && Browser.platform == "iphone")
            return doMobileVideo_iOS(anchor, ev);
        var href_mobile = $(anchor).attr("data-href-mobile");
        if (href_mobile) {
            var caption = $(anchor).attr("data-caption");
            var videoPlayer = $("video.featured-video-mobile-player");
            if (!videoPlayer[0])
                videoPlayer = $("video.hidden-video-mobile-player");
            videoPlayer.attr("src", "");
            videoPlayer.hide();
            var pieces = href_mobile.split("/");
            var posterUrl = "//bandcamp.23video.com/" + pieces[1] + "/" + pieces[2] + "/" + pieces[3] + "/standard/thumbnail.jpg";
            videoPlayer.attr("poster", posterUrl);
            videoPlayer.parent().show();
            videoPlayer.attr("src", "//bandcamp.23video.com" + href_mobile);
            videoPlayer.get(0).load();
            videoPlayer.show();
            videoPlayer.get(0).play();
            if (caption) {
                $(".video-caption").text(caption);
                $(".video-caption").show()
            } else
                $(".video-caption").hide();
            $("html, body").animate({
                scrollTop: videoPlayer.offset().top - 20
            }, 500);
            return false
        }
    }
    function doMobileVideo_iOS(anchor, ev) {
        var href_mobile = $(anchor).attr("data-href-mobile");
        if (href_mobile) {
            var pieces = href_mobile.split("/");
            var posterUrl = "//bandcamp.23video.com/" + pieces[1] + "/" + pieces[2] + "/" + pieces[3] + "/standard/thumbnail.png";
            $(".video-link-loading").text("video");
            $(".video-link-loading").removeClass("video-link-loading");
            $(anchor).text("loading...");
            $(anchor).addClass("video-link-loading");
            $("video#mobile-player").remove();
            var appendPoint = null;
            if (anchor.hasClass("has-video"))
                appendPoint = anchor.parents("tr.track_row_view");
            else
                appendPoint = anchor.parents("div.track_info");
            var videoPlayer = $("\x3cvideo/\x3e", {
                id: "mobile-player",
                src: "//bandcamp.23video.com" + href_mobile,
                poster: posterUrl
            }).appendTo(appendPoint);
            videoPlayer[0].addEventListener("webkitendfullscreen", function() {
                $("video#mobile-player").remove();
                $(anchor).removeClass("video-link-loading");
                $(anchor).text("video")
            }, false);
            videoPlayer[0].addEventListener("playing", function() {
                $(anchor).removeClass("video-link-loading");
                $(anchor).text("video")
            }, false);
            videoPlayer.get(0).load();
            videoPlayer.show();
            videoPlayer.get(0).play();
            return false
        }
    }
    exports.neutralizeAnchors = function(anchors) {
        if (phoneView())
            $(anchors).on("touchend", function() {
                var anchor = $(this);
                var href = anchor.attr("href");
                if (href && href.substr(0, 1) != "#")
                    anchor.attr("href", "#").attr("data-href", href)
            })
    }
    ;
    exports.compoundLinkButtons = function(buttons) {
        buttons = $(buttons);
        exports.neutralizeAnchors(buttons.find("a"));
        buttons.has("a").on("click", function(event) {
            if (phoneView()) {
                var anchor = $(this).find("a");
                var href = anchor.attr("data-href") || anchor.attr("href");
                if (href) {
                    var handled = Control.invokeAction(href, event.originalEvent);
                    if (!handled) {
                        var target = anchor.attr("target");
                        if (!target || target == "_self")
                            location.href = href;
                        else
                            window.open(href, target)
                    }
                    return false
                }
            }
        })
    }
    ;
    exports.compoundLinkButtons($(".compound-button"));
    exports.compoundButtons = function(buttons) {
        buttons = $(buttons);
        buttons.has("button").on("click", function(ev) {
            if (phoneView()) {
                var button = $(this).find("button")[0];
                if (button && !$(ev.target).is(button) && !$(button).has(ev.target).length) {
                    ev.preventDefault();
                    button.click()
                }
            }
        })
    }
    ;
    exports.compoundButtons($(".compound-button"));
    exports.trackRows = function(rows) {
        rows = $(rows);
        exports.neutralizeAnchors(rows.find(".title-col a"));
        rows.filter(".linked").find(".info-col").on("click", function() {
            if (phoneView()) {
                var anchor = $(this).parents("tr").find(".title-col a");
                var href = anchor.attr("data-href") || anchor.attr("href");
                if (href) {
                    location.href = href;
                    return false
                }
            }
        });
        rows.find(".has-video-subcol").on("click", function(ev) {
            if (phoneView()) {
                var anchor = $(this).find("a.has-video");
                doMobileVideo(anchor, ev);
                return false
            }
        })
    }
    ;
    exports.trackRows($("#track_table tr"));
    exports.inlinePlayerVideoLink = function(trackInfo) {
        trackInfo = $(trackInfo);
        exports.neutralizeAnchors(trackInfo.find("a.video-link"));
        trackInfo.find("a.video-link").on("touchend", function(ev) {
            if (phoneView()) {
                var anchor = $(this);
                doMobileVideo(anchor, ev);
                return false
            }
        });
        trackInfo.find("a.video-link").on("click", function(ev) {
            if (phoneView()) {
                var anchor = $(this);
                doMobileVideo(anchor, ev);
                return false
            }
        })
    }
    ;
    if (window.MediaView && MediaView.mode == "phone")
        exports.inlinePlayerVideoLink($(".inline_player .track_info"));
    var topText = TM("Top", null, "Button text to return to top of page.");
    var markup = '\x3ca class\x3d"goto-top-button compound-button"\x3e\x3cspan\x3e' + topText + "\x3c/span\x3e\x3c/a\x3e";
    $(markup).appendTo("#pgBd").on("click", function(event) {
        Dom.scrollToElement(document.body)
    })
}
)(Fixup);
var PeekabooText = {
    more: function(link) {
        link = $(link);
        var ellipsis = link.prev(".peekaboo-ellipsis");
        var desc = ellipsis.closest(".peekaboo-link").prev(".peekaboo-text");
        if (!ellipsis.length || !desc.length)
            return;
        if (desc.css("display") == "none") {
            link.html("less");
            desc.fadeIn("fast");
            ellipsis.hide()
        } else {
            link.html("more");
            desc.hide();
            ellipsis.show()
        }
    }
};
$(document).ready(function() {
    $(".peekaboo-link a").click(function() {
        PeekabooText.more(this);
        return false
    })
});
var ShareTralbumPhone = {};
(function(exports) {
    if (!window.EmbedData)
        return;
    var isTrack = TralbumData.current.type == "track";
    var title$$0 = TralbumData.current.title;
    var artist = EmbedData.artist;
    var linkback = EmbedData.linkback;
    exports.init = function() {
        $("#share-link").on("click", exports.showShare)
    }
    ;
    exports.showShare = function() {
        if (!window.MediaView || MediaView.mode != "phone")
            return null;
        var params = {
            "linkback": linkback,
            "is_track": isTrack,
            "title": title,
            "artist": artist
        };
        var title = TM("Share");
        var dlg = Dialog.openTemplate(title, "_share_tralbum_phone", params, []);
        var root = $(dlg.body);
        SocialControls.initFromDOM(root);
        return false
    }
}
)(ShareTralbumPhone);
if (ShareTralbumPhone.init)
    ShareTralbumPhone.init();
var AutoLyrics = {
    _autoOpen: false,
    _prefixLyricsContentNode: "",
    _prefixLyricsContainer: "",
    _prefixLyricsParent: "",
    _inUse: false,
    _tracklistlen: 0,
    _indexAdjustment: 0,
    _prevContent: null,
    init: function(contentPrefix, containerPrefix, parentPrefix, tracklistlen, indexAdjustment) {
        this._prefixLyricsContentNode = contentPrefix;
        this._prefixLyricsContainer = containerPrefix;
        this._prefixLyricsParent = parentPrefix;
        this._tracklistlen = tracklistlen;
        this._indexAdjustment = indexAdjustment
    },
    _playTrackListener: function(tracknum) {
        tracknum = tracknum % AutoLyrics._tracklistlen + AutoLyrics._indexAdjustment;
        Log.debug("expanding track: " + tracknum);
        var content = AutoLyrics._prefixLyricsContentNode + tracknum;
        if (!elt(content)) {
            AutoLyrics._prevContent = content;
            return
        }
        if (Expando.isOpen(content)) {
            AutoLyrics._autoOpen = true;
            AutoLyrics._prevContent = content;
            return
        }
        if (!AutoLyrics._autoOpen && !Expando.isOpen(AutoLyrics._prevContent)) {
            AutoLyrics._prevContent = content;
            return
        }
        var thingToExpand = AutoLyrics._prefixLyricsContainer + tracknum;
        var parentOfThingToExpand = AutoLyrics._prefixLyricsParent + tracknum;
        Expando.toggle(content, thingToExpand, parentOfThingToExpand, true, Expando.OPEN);
        AutoLyrics._prevContent = content
    },
    getPlaylistListeners: function(playlist) {
        playlist.ontrackplayed(AutoLyrics._playTrackListener)
    }
};
var AlbumPage = {
    onPlayerInit: function(playlist) {
        if (playlist) {
            AutoLyrics.getPlaylistListeners(playlist);
            playlist.ontrackplayed(AlbumPage.changeTrackInfo);
            TralbumLimits.onPlayerInit(playlist);
            AlbumPage.videoInit(playlist)
        }
    },
    videoInit: function(playlist) {
        if (window.VideoPlayer && window.TralbumData) {
            var videoPlayerNeeded = false;
            for (var i = 0; TralbumData.trackinfo && i < TralbumData.trackinfo.length; i++)
                if (TralbumData.trackinfo[i].video_source_type && TralbumData.trackinfo[i].video_id) {
                    videoPlayerNeeded = true;
                    break
                }
            if (videoPlayerNeeded && !window.tracklistVideoPlayer)
                TralbumPageVideoPlayer.init(playlist);
            if (window.tracklistVideoPlayer && $("#pagedata").data("blob").showvid) {
                $("#pagedata").data("blob").showvid = false;
                window.tracklistVideoPlayer.doVideo(TralbumData.trackinfo[i].video_source_type, TralbumData.trackinfo[i].video_id, TralbumData.trackinfo[i].video_caption, false, false)
            }
        }
    },
    changeTrackInfo: function(tracknum) {
        var tracklist = elt("track_table");
        var tracks = Y.util.Dom.getElementsByClassName("track_row_view", "tr", tracklist);
        for (i = 0; i < tracks.length; i++) {
            var theRow = tracks[i];
            if (i == tracknum)
                AlbumPage._showSingleTrackInfo(theRow);
            else
                AlbumPage._hideSingleTrackInfo(theRow)
        }
    },
    registerMouseOverForTrackRows: function() {
        var tracklist = elt("track_table");
        var tracks = Y.util.Dom.getElementsByClassName("track_row_view", "tr", tracklist);
        if (!(Browser.platform == "iphone" || Browser.platform == "android" || Browser.platform == "blackberry")) {
            Y.util.Event.on(tracks, "mouseover", AlbumPage._handleSingleTrackMouseOver);
            Y.util.Event.on(tracks, "mouseout", AlbumPage._handleSingleTrackMouseOut)
        }
    },
    _handleSingleTrackMouseOver: function(event) {
        AlbumPage._showSingleTrackInfo(this);
        Y.util.Dom.addClass(this, "mouseovertrack")
    },
    _handleSingleTrackMouseOut: function(event) {
        var tracklist = elt("track_table");
        var current_track = Y.util.Dom.getElementsByClassName("current_track", "tr", tracklist);
        if (current_track[0] != this)
            AlbumPage._hideSingleTrackInfo(this);
        Y.util.Dom.removeClass(this, "mouseovertrack")
    },
    _showSingleTrackInfo: function(trackRowElem) {
        AlbumPage._showHideSingleTrackInfo(trackRowElem, true)
    },
    _hideSingleTrackInfo: function(trackRowElem) {
        AlbumPage._showHideSingleTrackInfo(trackRowElem, false)
    },
    _showHideSingleTrackInfo: function(trackRowElem, doShow) {
        var newViz = doShow ? "visible" : "hidden";
        var lyr_link = Y.util.Dom.getElementsByClassName("info_link", "div", trackRowElem);
        var dl_link = Y.util.Dom.getElementsByClassName("dl_link", "div", trackRowElem);
        Y.util.Dom.setStyle(lyr_link, "visibility", newViz);
        Y.util.Dom.setStyle(dl_link, "visibility", newViz)
    }
};
var API = function() {
    function Http(verb, module, version, method, params) {
        var d = $.Deferred();
        var apiurl = ["/api", module, version, method].join("/");
        $.ajax({
            url: apiurl,
            type: verb || "get",
            data: verb == "post" ? JSON.stringify(params) : params,
            dataType: "json",
            success: function(result) {
                if (result.error)
                    d.reject(result.error);
                else
                    d.resolve(result)
            },
            failure: function(err) {
                d.reject(err)
            }
        });
        return d.promise()
    }
    function PostWithCrumb(module, version, method, params) {
        var d = $.Deferred();
        var apiurl = ["/api", module, version, method].join("/");
        Crumb.ajax({
            type: "POST",
            dataAs: "JSON",
            url: apiurl,
            data: params,
            success: function(result) {
                if (result.error)
                    d.reject(result.error);
                else
                    d.resolve(result)
            },
            error: function(jqXHR, status, error) {
                d.reject(error)
            }
        });
        return d.promise()
    }
    return {
        Http: Http,
        PostWithCrumb: PostWithCrumb
    }
}();
var TralbumUpdater = {
    DEFAULT_UPDATE_TIME: 5,
    init: function() {
        var initialdata = {
            trackinfo: TralbumData.trackinfo,
            refresh_secs: TralbumUpdater.DEFAULT_UPDATE_TIME,
            tralbum_has_audio: TralbumData.hasAudio
        };
        TralbumUpdater._got_new_info(initialdata)
    },
    _got_new_info: function(newdata) {
        var need_update = false;
        var update_time = newdata.refresh_secs || TralbumUpdater.DEFAULT_UPDATE_TIME;
        var newinfo = newdata.trackinfo;
        for (var i = 0; i < newinfo.length; i++) {
            if (TralbumUpdater._is_different(TralbumData.trackinfo[i], newinfo[i]))
                TralbumUpdater._update_info(i, newinfo[i]);
            if (newinfo[i].encoding_pending)
                need_update = true
        }
        TralbumData.hasAudio = newdata.tralbum_has_audio;
        if (need_update)
            setTimeout(TralbumUpdater._do_update, update_time * 1E3)
    },
    _is_different: function(oldinfo, newinfo) {
        var fields = ["file", "title", "id", "title_link", "encoding_pending", "encoding_error", "private", "album_private"];
        for (var i = 0; i < fields.length; i++)
            if (oldinfo[fields[i]] != newinfo[fields[i]])
                return true;
        return false
    },
    _update_info: function(i, trackinfo) {
        TralbumData.trackinfo[i] = trackinfo;
        gplaylist.update_trackinfo(i, trackinfo)
    },
    _do_update: function() {
        var cb = {
            success: function(o) {
                var response = eval("(" + o.responseText + ")");
                TralbumUpdater._got_new_info(response)
            },
            failure: function(o) {
                Log.error("Error updating Tralbum info")
            }
        };
        var url = "/trackinfo?id\x3d" + TralbumData.current.id + "\x26type\x3d" + TralbumData.current.type;
        Y.util.Connect.asyncRequest("GET", url, cb, null)
    }
};
var Merch = Merch || {};
"TralbumData"in window && function(window, $, TralbumData, BandData, CurrencyData, Merch) {
    function haveQuantityWarning() {
        if (!TralbumData.packages)
            return false;
        return Iter.find(TralbumData.packages, function(p) {
            return p.quantity_warning
        })
    }
    function scheduleUpdate() {
        if (!TralbumData.packages)
            return;
        var delay = updateCount < FAST_UPDATE_LIMIT && haveQuantityWarning() ? FAST_UPDATE_INTERVAL : SLOW_UPDATE_INTERVAL;
        if (updateTimeout)
            clearTimeout(updateTimeout);
        Log.debug("Scheduling inventory update in " + delay + " seconds");
        updateTimeout = setTimeout(function() {
            updateTimeout = null;
            updateCount++;
            Merch.updateInventory()
        }, delay * 1E3)
    }
    function refreshInventory(data) {
        if (!TralbumData.packages)
            return;
        Log.debug("Refreshing merch inventory", data);
        Iter.each(TralbumData.packages, function(pkg) {
            var inventory = data[pkg.id];
            if (!inventory)
                return;
            pkg.quantity_available = inventory.quantity_available;
            pkg.quantity_limits = inventory.quantity_limits;
            pkg.quantity_warning = inventory.quantity_warning;
            if (pkg.options && inventory.options)
                Iter.each(pkg.options, function(opt) {
                    opt.quantity_available = inventory.options[opt.id]
                });
            renderInventory(pkg)
        })
    }
    function renderInventory(pkg) {
        Log.debug("Rendering package " + pkg.id);
        var package_index = Iter.index(TralbumData.packages, pkg);
        var blob = $("#pagedata").length ? $("#pagedata").data("blob") || {} : {};
        var subscriptionsByBandId = blob.fan_tralbum_data && blob.fan_tralbum_data.subscriptions_by_band_id || {};
        var templateHash = {
            package: pkg,
            package_index: package_index,
            currency_data: CurrencyData,
            digital_preorder: TralbumData.album_is_preorder,
            digital_preorder_release_date: TralbumData.album_is_preorder ? TralbumData.album_release_date : null,
            cfg: blob.cfg || {},
            is_pkg_subscriber: subscriptionsByBandId[pkg.band_id] || subscriptionsByBandId[pkg.selling_band_id],
            logged_in: !!Identities.user(),
            login_bounce_url: blob.login_bounce_url,
            item_sellers: blob.item_sellers,
            merch_item_page: TralbumData.current.type == "package",
            items_purchased: TralbumData.items_purchased,
            tralbum_collect_info: TralbumData.tralbum_collect_info,
            is_custom_domain: Url.isCustomDomain(),
            env: blob.env
        };
        $("#package-title-" + pkg.id).renderLiquid("_package_listing_title", templateHash);
        var $price = $("#package-price-" + pkg.id).renderLiquid("_package_listing_price", templateHash);
        $('.order_package_link.[data-pkg\x3d"' + package_index + '"]').click(function(ev) {
            ev.preventDefault();
            var $this = $(this);
            var isGift = !!$this.closest(".send-as-gift")[0];
            if ($this.hasClass("subscriber-only-buy-link") && !$this.hasClass("subscriber-view")) {
                window.location.href = "/subscribe";
                return
            }
            PackageOrder.begin(package_index, isGift);
            if (TralbumData.item_type == "track")
                Stats.record({
                    kind: "click",
                    click: "t_order_package_link"
                })
        });
        if (window.Fixup && Fixup.compoundButtons)
            Fixup.compoundButtons($price.find(".compound-button"))
    }
    var API_BASE = "/api";
    var FAST_UPDATE_INTERVAL = 60;
    var SLOW_UPDATE_INTERVAL = 300;
    var FAST_UPDATE_LIMIT = 15;
    var updateTimeout = null;
    var updateCount = 0;
    var xhr = null;
    $(window.document).ready(function() {
        if (haveQuantityWarning())
            Merch.updateInventory();
        else
            scheduleUpdate()
    });
    Merch.updateInventory = function(resetUpdateCount) {
        if (!TralbumData.packages)
            return;
        if (resetUpdateCount)
            updateCount = 0;
        if (xhr)
            return;
        var pkgIDs = [];
        Iter.each(TralbumData.packages, function(pkg) {
            if (typeof pkg.quantity_available === "number" || pkg.options && Iter.find(pkg.options, function(opt) {
                return typeof opt.quantity_available === "number"
            }))
                pkgIDs.push(pkg.id)
        });
        if (pkgIDs.length === 0) {
            Log.debug("Not updating inventory because no packages are quantity-controlled");
            return
        }
        var params = "merch_id\x3d" + pkgIDs.join(",");
        Log.debug("Fetching merch inventory", params);
        xhr = $.getJSON(API_BASE + "/merch/2/inventory", params).done(function(data) {
            if (data.error)
                Log.error("Error updating merch inventory", data);
            else
                refreshInventory(data.merch_inventory)
        }).fail(function() {
            Log.error(arguments)
        }).always(function() {
            xhr = null;
            scheduleUpdate()
        })
    }
    ;
    Merch.renderAllInventory = function() {
        if (!TralbumData.packages)
            return;
        Iter.each(TralbumData.packages, function(pkg) {
            renderInventory(pkg)
        })
    }
}(window, jQuery, TralbumData, BandData, CurrencyData, Merch);
var BuyFullDiscographyVM = function() {
    return function(init) {
        var self = this;
        self.id = init.bundle_id;
        self.title = init.title;
        self.artist = init.band_name;
        self.type = "bundle";
        self.is_set_price = init.is_set_price;
        self.minimum_price = self.set_price = init.price;
        self.selling_band_id = init.selling_band_id;
        self.art_id = init.art_id;
        self.tralbums = init.tralbums;
        self.moreTralbums = ko.observableArray();
        self.download_pref = TralbumData.PAID;
        self.tralbum_count = init.tralbum_count;
        self.has_tracks = false;
        for (var i$$0 = 0; i$$0 < init.tralbums.length; i$$0++)
            if (self.tralbums[i$$0].item_type == "t")
                self.has_tracks = true;
        self.expandCoverArt = function(vm, e) {
            var duration = 300;
            if ($(".art.compact").length && Browser.media_mode != "phone") {
                $(".buyFullDiscography .art .more-button").fadeOut(60);
                $(".buyFullDiscography .art .art-thumb").removeClass("thumb-shadow");
                $(".buyFullDiscography .art .art-thumb").removeClass("thumb-glow");
                $(".buyFullDiscography .art .art-thumb").slice(5).fadeOut(1);
                var $thumbs = $(".buyFullDiscography .art .art-thumb");
                var expandComplete = function() {
                    $(".buyFullDiscography .art").removeClass("compact");
                    var start = 5;
                    var end = 10;
                    var fn = function() {
                        var $elems = $(".buyFullDiscography .art .art-thumb").slice(start, end);
                        if ($elems.length > 0) {
                            $elems.fadeIn(duration);
                            setTimeout(fn, duration);
                            start += 5;
                            end += 5
                        } else
                            ;
                    };
                    fn()
                };
                $thumbs.promise().done(expandComplete);
                $thumbs.animate({
                    marginRight: "6px"
                }, {
                    duration: duration
                })
            } else if (!$(".art.compact").length)
                window.open(e.target.href, "_self")
        }
        ;
        self.tralbumInBuyFullDiscography = function(tralbumId) {
            for (var i = 0; i < this.tralbums.length; i++) {
                var tralbum = this.tralbums[i];
                if (tralbum.item_id === tralbumId)
                    return true
            }
            return false
        }
        ;
        self.moreTitles = function(vm, e) {
            e.target.parentElement.remove();
            vm.moreTralbums(vm.tralbums.slice(8))
        }
        ;
        self.fullDiscographyBuyDialog = function(vm, e) {
            TralbumDownload.begin(e, false, vm)
        }
        ;
        self.fullDiscographyGiftDialog = function(vm, e) {
            TralbumDownload.begin(e, true, vm)
        }
    }
}();
$(document).ready(function() {
    if ($().lazyload !== undefined)
        $(".artists-grid img.lazy, .music-grid img.lazy, .merch-grid img.lazy").lazyload({
            threshold: 500,
            effect: "fadeIn",
            effectspeed: 100
        });
    if ($("#pagedata").data().blob.buyfulldisco) {
        var buyFullDiscographyVM = window.buyFullDiscographyVM = new BuyFullDiscographyVM($("#pagedata").data().blob.buyfulldisco);
        var buyFullElem = $(".buyItem.buyFullDiscography")[0];
        if (buyFullElem)
            ko.applyBindings(buyFullDiscographyVM, buyFullElem)
    }
    if (window.PopupImage !== undefined)
        PopupImage.attach("a.popupImage");
    $(".tralbum-tags-nu").removeClass("hidden");
    if (MediaView.mode !== "phone")
        $("#sidebar-gift-card-accepted").bc_tooltips({
            itemSelector: null,
            tooltipSelector: ".sidebar-gift-card-tooltip"
        });
    if (window.Trackpipe)
        Trackpipe.maybeDoTralbumActions()
});
(function() {
    $(document).ready(function() {
        if ($(window.Cart) && $("#pagedata").data("blob").label && $("#pagedata").data("blob").label.artist_grid)
            Cart.startup()
    })
}
)();
if ('undefined' === typeof window.Templ) {
    Log.server('Premature template registration: ' + ["label/band_selector", "merch/merch_types"], 'warn');
} else {
    Templ.register({
        "label/band_selector": [{
            "blocks": [{
                "attachment": ["\n\n    <div class='label-band-selector'>\n        ", {
                    "nodelist": ["Show:"],
                    "type": "translate"
                }, "\n        <select data-bind='value: selectedOption'>\n            <option value=\"all\">", {
                    "nodelist": ["all artists"],
                    "type": "translate"
                }, "</option>\n            <option data-bind='value: labelBand().id, text: labelBand().name, visible: labelHasOwnItems'></option>\n            <!-- ko foreach: memberBands -->\n                <option data-bind='value: id, text: name'></option>\n            <!-- /ko -->\n        </select>\n    </div>\n\n"],
                "expression": "is_phone ",
                "type": "ncondition"
            }, {
                "attachment": ["\n\n    <div class='label-band-selector fade-in-on-load loading'>\n        <span class='label'>", {
                    "nodelist": ["Show:"],
                    "type": "translate"
                }, "</span>\n        <ul class='tabs'>\n            <li class='all'>\n                <a class='selected themeable' data-bind='css: {selected: selected_all}, click: select_all'>\n                    ", {
                    "nodelist": ["all"],
                    "type": "translate"
                }, "\n                </a>\n            </li>\n            <li class='bands' data-bind=\"css: columnClasses\">\n                <a class='themeable bands-menu-title' data-bind='css: {selected: selected_member_band}'>\n                    ", {
                    "blocks": [{
                        "attachment": ["\n                        <!-- ko if: selected_band() && selected_band().photo -->\n                        <span class=\"menu-artistpic round\">\n                            <img data-bind=\"src_image: {image_id: selected_band().photo, format: 'art_embedded_player'}\">\n                        </span>\n                        <!-- /ko -->\n                        <!-- ko if: selected_band() && !selected_band().photo -->\n                        <span class=\"menu-artistpic round\">\n                            <img>\n                        </span>\n                        <!-- /ko -->\n                        <span data-bind='text: selected_band_name, css: {name: selected_band()}'>", {
                            "nodelist": ["artists"],
                            "type": "translate"
                        }, "</span>\n                    "],
                        "expression": "cfg.header_rework_2018 ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n                        <span data-bind='text: selected_band_name'>", {
                            "nodelist": ["artists"],
                            "type": "translate"
                        }, "</span>\n                    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n\n                    <!--[if gte IE 9]><!-->\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 8 4\" width=\"8\" height=\"8\">\n                        <path class=\"caret\" d=\"M 0 0 L 8 0 4 4 0 0\" />\n                    </svg>\n                    <!--<![endif]-->\n                    <!--[if lte IE 8]>\n                    <span class=\"bc-ui menucaret\"></span>\n                    <![endif]-->\n                </a>\n                <div class='bands-menu multi-column-artist-menu'>\n                <!-- ko foreach: {data: memberBandCols} -->\n                    <ol data-bind='foreach: bands'>\n                        <li>\n                            <a class=\"themeable menu-artistitem\" data-bind='click: $root.select_band'>\n                                <span class=\"menu-artistpic ", {
                    "blocks": [{
                        "attachment": ["round"],
                        "expression": "cfg.header_rework_2018 ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\">\n                                    <!-- ko if: photo -->\n                                    <img data-bind=\"src_image: {image_id: photo, format: 'bio_navbar'}\">\n                                    <!-- /ko -->\n                                    <!-- ko ifnot: photo -->\n                                    <img>\n                                    <!-- /ko -->\n                                </span>\n                                <span data-bind=\"text: name\" class=\"menu-bandname\"></span>\n                            </a>\n                        </li>\n                    </ol>\n                <!-- /ko -->\n                </div>\n            </li>\n            <li class='label' data-bind='visible: labelHasOwnItems'>\n                <a class='themeable' data-bind='", {
                    "blocks": [{
                        "attachment": ["text: labelBand().name"],
                        "expression": "merch_page ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, ", css: {selected: selected_label}, click: select_label'>", {
                    "nodelist": ["compilations, etc"],
                    "type": "translate"
                }, "</a>\n            </li>\n            ", {
                    "blocks": [{
                        "attachment": ["\n            <!-- ko if: selected_band() && selected_band().url-->\n            <li>\n                <a data-bind='attr: {href: selected_band().url + \"/stats\"}'>", {
                            "nodelist": ["artist stat page"],
                            "type": "translate"
                        }, "</a>\n            </li>\n            <!-- /ko -->\n            "],
                        "expression": "cfg.header_rework_2018 ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        </ul>\n    </div>\n\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n"],
        "merch/merch_types": [{
            "blocks": [{
                "attachment": [{
                    "nodelist": ["Other"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "0",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Compact Disc (CD)"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "1",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Record/Vinyl"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "2",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Record/Vinyl"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "15",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Record/Vinyl"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "16",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Record/Vinyl"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "17",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Record/Vinyl"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "18",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Cassette"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "3",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["DVD"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "4",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["USB Flash Drive"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "5",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Sheet Music"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "6",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Poster/Print"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "10",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["T-Shirt/Apparel"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "11",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Ticket"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "12",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Button"],
                    "type": "translate"
                }, "\n    "],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "13",
                "type": "condition"
            }, {
                "attachment": [{
                    "nodelist": ["Tote Bag"],
                    "type": "translate"
                }, "\n"],
                "child_condition": null,
                "child_relation": null,
                "left": "pkg_type_id",
                "operator": "==",
                "right": "14",
                "type": "condition"
            }],
            "type": "case"
        }]
    });
}
;var LabelBandSelectorVM = function($, ko) {
    $.widget("bc.bclabelbandselector", {
        options: {
            labelBand: null,
            memberBands: [],
            onBandSelect: $.noop,
            labelHasOwnItems: false,
            merchPage: false,
            queryParam: null,
            vm: null
        },
        _create: function() {
            var self = this;
            $(this.element).renderLiquid("label/band_selector", {
                is_phone: MediaView.mode === "phone",
                merch_page: this.options.merchPage,
                cfg: $("#pagedata").data("blob").cfg
            });
            var vm = this.options.vm || new LabelBandSelectorVM(this.options);
            ko.applyBindings(vm, this.element[0]);
            var $selector = this.element.find(".label-band-selector");
            var $menu = this.element.find(".bands-menu");
            var $menuTitle = this.element.find(".bands-menu-title");
            var $phoneSelect = this.element.find("select");
            if (vm.selected_band())
                self._trigger("onBandSelect", null, vm.selected_band());
            vm.selected_band.subscribe(function(band) {
                self._trigger("onBandSelect", null, band);
                $menu.bcmenu("hide");
                $phoneSelect.blur()
            });
            vm.memberBands.subscribe(function() {
                $menu.bcmenu("refresh")
            });
            $menuTitle.click(function() {
                if ($menu.is(":visible"))
                    $menu.bcmenu("hide");
                else
                    $menu.bcmenu("show")
            });
            this._super();
            $menu.bcmenu({
                triggerElements: $menu.closest(".bands"),
                menus: "ul"
            });
            $selector.removeClass("loading");
            this.viewModel = function() {
                return vm
            }
        }
    });
    return function LabelBandSelectorVM(options) {
        function getBandIDFromURL() {
            if (!options.queryParam)
                return null;
            var search = Url.parseQuery(window.location.search);
            var bandID = parseInt(search[options.queryParam], 10);
            if (!bandID)
                return null;
            var validBands = self.memberBands().slice();
            validBands.push(self.labelBand());
            if (Iter.find(validBands, function(band) {
                return band.id === bandID
            }))
                return bandID;
            return null
        }
        function setBandIDInURL(id) {
            if (!options.queryParam)
                return;
            if ("history"in window && "function" === typeof window.history.replaceState) {
                var url = window.location.pathname;
                var params = Url.parseQuery(window.location.search);
                if (id)
                    params[options.queryParam] = id;
                else
                    delete params[options.queryParam];
                url = Url.addQueryParams(url, params);
                if (window.location.hash)
                    url += window.location.hash;
                history.replaceState(null, document.title, url)
            }
        }
        var self = this;
        var label_band = options.labelBand;
        var member_bands = options.memberBands || [];
        var labelHasOwnItems = options.labelHasOwnItems;
        this.labelBand = ko.observable(label_band);
        this.memberBands = ko.observableArray(member_bands);
        this.labelHasOwnItems = ko.observable(labelHasOwnItems);
        this.numCols = ko.computed(function() {
            return Math.min(Math.floor((self.memberBands().length - 1) / 9) + 1, 3)
        });
        this.columnClasses = ko.computed(function() {
            var c = "col" + self.numCols();
            if (self.numCols() > 1)
                c += " has-multiple-columns";
            return c
        });
        this.memberBandCols = ko.computed(function() {
            var lbands;
            var colHeight;
            var columns;
            lbands = self.memberBands.slice(0);
            colHeight = Math.ceil(lbands.length / self.numCols());
            for (columns = []; lbands.length > 0; )
                columns.push({
                    bands: lbands.splice(0, colHeight)
                });
            return columns
        });
        this.selected_band_id = ko.observable(getBandIDFromURL());
        this.selected_band_id.subscribe(setBandIDInURL);
        this.selected_band = ko.computed(function() {
            var id = self.selected_band_id();
            if (id === self.labelBand().id)
                return self.labelBand();
            else
                return Iter.find(self.memberBands(), function(band) {
                    return band.id === id
                })
        });
        this.select_all = function() {
            self.selected_band_id(null)
        }
        ;
        this.selected_all = ko.computed(function() {
            return !self.selected_band_id()
        });
        this.select_label = function() {
            self.selected_band_id(self.labelBand().id)
        }
        ;
        this.selected_label = ko.computed(function() {
            return self.selected_band_id() === self.labelBand().id
        });
        this.select_band = function(band) {
            self.selected_band_id(band.id)
        }
        ;
        this.selected_member_band = ko.computed(function() {
            return self.selected_band() && self.selected_band() !== self.labelBand()
        });
        var artistsText = TM("artists");
        this.selected_band_name = ko.computed(function() {
            return self.selected_member_band() ? self.selected_band().name : artistsText
        });
        this.selectedOption = ko.computed({
            read: function() {
                return self.selected_band_id() || "all"
            },
            write: function(val) {
                if (val === "all")
                    self.selected_band_id(null);
                else
                    self.selected_band_id(parseInt(val, 10))
            }
        })
    }
}(jQuery, ko);
(function(ko) {
    function selectedBand(event, band) {
        var band_id = band && band.id;
        var $grid = $(".editable-grid");
        var $listItems = $(".editable-grid \x3e li");
        var $featuredGrid = $(".featured-grid");
        $featuredGrid.hide();
        $featuredGrid.addClass("filtered");
        if ($grid.length === 0) {
            $grid = $(".def-grid");
            $listItems = $(".def-grid \x3e dt, .def-grid \x3e dd")
        }
        if ($grid.length === 0)
            return;
        $listItems.each(function() {
            var $anchor = $(this).find("a");
            var urlHash = Url.toHash($anchor.attr("href"));
            var urlParams = Url.parseQuery(urlHash.search);
            if (band_id)
                urlParams.filter_band = band_id;
            else
                delete urlParams.filter_band;
            urlHash.search = "?" + Url.joinQuery(urlParams);
            $anchor.attr("href", Url.fromHash(urlHash))
        });
        if (band_id) {
            $grid.addClass("filtered");
            if ($featuredGrid[0] && ko.dataFor($featuredGrid[0]))
                ko.dataFor($featuredGrid[0]).switchFilterMode(true);
            $listItems.filter('[data-band-id!\x3d"' + band_id + '"]').hide().removeClass("odd");
            var odd = true;
            Iter.each($listItems.filter('[data-band-id\x3d"' + band_id + '"]'), function(element) {
                $(element).removeClass("odd");
                if (odd)
                    $(element).addClass("odd");
                $(element).show();
                odd = !odd
            });
            $("img.lazy:visible", $grid).trigger("appear");
            if ($(".editable-grid.private \x3e li:visible").length === 0)
                $("#private-merch-heading").hide();
            else
                $("#private-merch-heading").show()
        } else {
            $grid.removeClass("filtered");
            $featuredGrid.removeClass("filtered");
            if ($featuredGrid[0] && ko.dataFor($featuredGrid[0]))
                ko.dataFor($featuredGrid[0]).switchFilterMode(false);
            else
                $featuredGrid.show();
            $listItems.filter(".featured").hide();
            odd = true;
            Iter.each($listItems.not(".featured"), function(element) {
                $(element).removeClass("odd");
                if (odd)
                    $(element).addClass("odd");
                odd = !odd
            });
            $listItems.not(".featured").show();
            $("#private-merch-heading").show()
        }
        var gridSize = $(".editable-grid \x3e li:visible").length;
        if (gridSize == 2 || gridSize == 4) {
            $grid.removeClass("columns-3");
            $grid.removeClass("columns-4");
            $grid.addClass("columns-2")
        } else if (gridSize < 7) {
            $grid.removeClass("columns-2");
            $grid.removeClass("columns-4");
            $grid.addClass("columns-3")
        } else {
            $grid.removeClass("columns-2");
            $grid.removeClass("columns-3");
            $grid.addClass("columns-4")
        }
    }
    $(".label-band-selector-grid").each(function() {
        var data = $(this).data("label-band-selector");
        if (data)
            $(this).bclabelbandselector({
                labelBand: data.label_band,
                memberBands: data.member_bands,
                labelHasOwnItems: data.label_has_own_items,
                merchPage: $("#pagedata").data("blob").merch_page,
                queryParam: "filter_band",
                onBandSelect: selectedBand
            })
    })
}
)(ko);
var CartVM = function($, ko) {
    return function(cart, el) {
        this.$el = $(el);
        this._cart = cart;
        var Sidecart = this._cart;
        this.checkoutWithCard = function() {
            Sidecart.payment_pref_changed = true;
            Sidecart.payment_pref = "c";
            Sidecart.checkout()
        }
        ;
        this.switchDefaultPaymentMethod = function() {
            window.ChangePaymentMethodPanel.show()
        }
    }
}(jQuery, ko);
TPController.country_picker = function(paths, params, url, event) {
    Sidecart.show_country_pref(event)
}
;
var Sidecart = null;
$.extend(Cart, {
    NO_AMT: "- -\x26nbsp;",
    PAYMENTTYPE_PAYPAL: "p",
    PAYMENTTYPE_CREDITCARD: "c",
    PAYFLOW_CURRENCIES: ["USD", "GBP", "AUD", "CAD", "EUR", "JPY"],
    startup: function() {
        Sidecart = Cart.make()
    },
    make: function() {
        return Object.create(Cart).init()
    },
    init: function() {
        var self = this;
        var i;
        this.initing = true;
        var blob = $("#pagedata").data("blob") || {};
        this.cfgFlags = blob.cfg;
        this.el = elt("sidecart");
        this.item_list_el = elt("item_list");
        this.summary_el = elt("sidecartSummary");
        this.saved_card = blob.saved_card;
        Y.util.Event.on("sidecartCheckout", "click", function(ev) {
            self.checkout(ev, "cart")
        });
        if (window.MediaView && MediaView.mode == "phone") {
            var navCartLink = $("#menubar #cart-item a");
            if (navCartLink.length) {
                navCartLink.off("click");
                Dom.hackLinkClicksThanksSafari(navCartLink[0], function() {
                    Log.note("click on cart element '#menubar #cart-item a':");
                    self.toggle_cart_phone();
                    return false
                })
            } else {
                $("#sidecartHeader").on("click", function() {
                    self.toggle_cart_phone()
                });
                if (HiddenParams.get("cart_redirected"))
                    self.show_cart_phone()
            }
        }
        ClientPrefs.update(Cart.init_data);
        this.payment_pref = this.getPaymentPref(blob);
        this.country_pref = CountryPrefPanel.make(function(new_country) {
            self.oncountry_change(new_country)
        });
        this.gift_balance = (Cart.init_data || {}).gift_balance;
        this.payment_pref_changed = false;
        this.payment_type_panel = PaymentTypePanel.init(function(new_pref) {
            self.payment_pref = new_pref;
            self.payment_pref_changed = true
        });
        this.reset(Cart.init_data);
        this.initing = false;
        this.contains = Cart.init_data && Cart.init_data.contains;
        var cartVM = new CartVM(this,"#sidecart");
        ko.applyBindings(cartVM, cartVM.$el[0]);
        return this
    },
    getPaymentPref: function(blob) {
        var payment_pref = null;
        payment_pref = blob.payment_type;
        if (typeof payment_pref !== "undefined" && (payment_pref == this.PAYMENTTYPE_PAYPAL || payment_pref == this.PAYMENTTYPE_CREDITCARD))
            return payment_pref;
        payment_pref = ClientPrefs.payment_type;
        if (typeof payment_pref !== "undefined" && (payment_pref == this.PAYMENTTYPE_PAYPAL || payment_pref == this.PAYMENTTYPE_CREDITCARD))
            return payment_pref;
        return null
    },
    reset: function(data) {
        this.clear(false);
        if (data) {
            this.sync_num = data.sync_num;
            if (data.items && data.items.length > 0) {
                for (i = 0; i < data.items.length; ++i)
                    this.add_item_to_list(data.items[i], false);
                this.update_packages()
            }
            this.snarf_cart_summary(data, !this.initing)
        }
        if (this.cart_items.length > 0)
            this.show_cart(false, this.has_shipping);
        else
            this.hide_cart(false)
    },
    needs_resync: function(data) {
        if (data.resync)
            this.reset(data.cart_data);
        else
            this.sync_num = data.sync_num;
        return data.resync
    },
    add_to_cart: function(args) {
        var data = {};
        var i;
        var ignore = false;
        var revealing_cart;
        this.checking_out = this.checking_out || args.checkout_now;
        revealing_cart = this.cart_items.length === 0;
        if (revealing_cart)
            this.sync_num = 1;
        else
            for (i = 0; i < this.cart_items.length; ++i) {
                var item = this.cart_items[i];
                if (args.item_type == item.item_type && args.item_id == item.item_id && args.gift_recipient_email == item.gift_recipient_email) {
                    if (item.purchase_note != args.purchase_note) {
                        item.purchase_note = args.purchase_note;
                        data.purchase_note = args.purchase_note;
                        data.purchase_note_changed = true
                    }
                    if (item.notify_me != args.notify_me) {
                        item.notify_me = args.notify_me;
                        data.notify_me = args.notify_me;
                        data.notify_me_changed = true
                    }
                    if (item.notify_me_label != args.notify_me_label) {
                        item.notify_me_label = args.notify_me_label;
                        data.notify_me_label = args.notify_me_label;
                        data.notify_me_label_changed = true
                    }
                    var isDuplicatePackage = args.item_type == "p" && args.unit_price == item.unit_price && args.option_id == item.option_id && args.discount_id == item.discount_id && args.discount_type == item.discount_type && (!args.is_gift || this.equalAddresses(args, item));
                    if (isDuplicatePackage) {
                        args.quantity += item.quantity;
                        data.req = "update_quantity";
                        data.id = item.id;
                        data.quantity = args.quantity;
                        this.update_quantity(item, args.quantity);
                        break
                    }
                    if (args.item_type == "a" || args.item_type == "t" || args.item_type == "b") {
                        if (args.associated_license_id != item.license_id)
                            ignore = true;
                        else if (args.discount_id != item.discount_id && args.discount_type != item.discount_type) {
                            data.req = "update_discount_id";
                            data.id = item.id;
                            data.unit_price = args.unit_price;
                            data.discount_id = args.discount_id;
                            data.discount_type = args.discount_type;
                            this.update_discount_id(item, args.unit_price, args.discount_id, args.discount_type)
                        } else if (args.unit_price != item.unit_price) {
                            data.req = "update_unit_price";
                            data.id = item.id;
                            data.unit_price = args.unit_price;
                            this.update_unit_price(item, args.unit_price)
                        } else if (typeof data.purchase_note != "undefined") {
                            data.req = "update_purchase_note";
                            data.purchase_note = data.purchase_note || "";
                            data.id = item.id
                        } else if (typeof data.notify_me != "undefined") {
                            data.req = "update_notify_me";
                            data.notify_me = data.notify_me || false;
                            data.id = item.id
                        } else if (typeof data.notify_me_label != "undefined") {
                            data.req = "update_notify_me_label";
                            data.notify_me_label = data.notify_me_label || false;
                            data.id = item.id
                        } else
                            ignore = true;
                        break
                    }
                }
            }
        if (ignore) {
            if (this.checking_out)
                this.checkout(null, "dialog")
        } else {
            if ($.isEmptyObject(data) || typeof data.req === "undefined" || data.req === null) {
                args.local_id = "" + Math.random();
                this.add_item_to_list(args, !revealing_cart);
                data = {};
                data.req = "add";
                data.local_id = args.local_id;
                data.item_type = args.item_type;
                data.item_id = args.item_id;
                data.unit_price = args.unit_price;
                data.quantity = args.quantity;
                data.option_id = args.option_id;
                data.discount_id = args.discount_id;
                data.discount_type = args.discount_type;
                data.download_type = args.download_type;
                data.download_id = args.download_id;
                data.purchase_note = args.purchase_note;
                data.notify_me = args.notify_me;
                data.notify_me_label = args.notify_me_label;
                data.band_id = args.band_id;
                data.releases = args.releases;
                data.ip_country_code = args.ip_country_code;
                data.associated_license_id = args.associated_license_id;
                if (args.is_gift) {
                    data.is_gift = true;
                    data.gift_sender_name = args.gift_sender_name;
                    data.gift_recipient_email = args.gift_recipient_email;
                    data.gift_recipient_fan_id = args.gift_recipient_fan_id;
                    data.gift_recipient_name = args.gift_recipient_name;
                    data.gift_sender_note = args.gift_sender_note;
                    if (args.is_physical_gift) {
                        data.shipping_street = args.shipping_street;
                        data.shipping_street_2 = args.shipping_street_2;
                        data.shipping_city = args.shipping_city;
                        data.shipping_state = args.shipping_state;
                        data.shipping_zip = args.shipping_zip;
                        data.shipping_country_code = args.shipping_country_code;
                        data.shipping_country_name = args.shipping_country_name
                    }
                }
                if (window.FanControls && FanControls.fan_id)
                    data.fan_id = FanControls.fan_id
            }
            if (window.ReferrerToken)
                data.ref_token = window.ReferrerToken;
            if (revealing_cart)
                this.show_cart(true, args.item_type == "p");
            else
                this.hide_summary(true, revealing_cart);
            var req_id = this.request(data, true);
            if (this.checking_out)
                this.checkout_after = req_id
        }
        if (!this.checking_out)
            if (window.MediaView && MediaView.mode == "phone") {
                var self = this;
                BubbleMessage(TM("Item added to cart")).addClass("added-to-cart").on("click", function() {
                    $(this).remove();
                    Dom.scrollToElement(document.body);
                    self.show_cart_phone()
                })
            } else if (window.FacebookData && window.FB && window.FB.Canvas && window.FB.Canvas.scrollTo)
                FB.Canvas.scrollTo(0, 0)
    },
    equalAddresses: function(a, b) {
        var fields = ["shipping_street", "shipping_street_2", "shipping_city", "shipping_state", "shipping_zip", "shipping_country_code"];
        for (var i = 0; i < fields.length; i++)
            if (!this.equalOrEmpty(a[fields[i]], b[fields[i]]))
                return false;
        return true
    },
    equalOrEmpty: function(string1, string2) {
        if (string1 === undefined || string1 === null)
            string1 = "";
        if (string2 === undefined || string2 === null)
            string2 = "";
        if (string1 === string2)
            return true;
        return false
    },
    show_cart: function(animating, assume_shipping) {
        if (this.checking_out && !this.paymentTypeDialogAllowed())
            return;
        var self = this;
        this.rev_el = elt("sidecartReveal");
        this.con_el = elt("sidecartBody");
        this.el.style.display = "block";
        if (MediaView.mode == "phone") {
            $("#menubar #cart-item-divider").show();
            $("#menubar #cart-item").show();
            $("#gift-balance-navbar").hide()
        }
        Y.util.Dom.addClass("rightColumn", "cart-visible");
        if (animating) {
            this.clear_summary(assume_shipping);
            this.anim = new Y.util.Anim(this.rev_el);
            this.anim.init(this.rev_el, {
                height: {
                    from: 0,
                    to: this.con_el.offsetHeight
                }
            }, .25, Y.util.Easing.easeOut);
            this.anim.onComplete.subscribe(function() {
                self.rev_el.style.height = "auto"
            });
            this.anim.animate()
        } else
            this.rev_el.style.height = "auto"
    },
    delete_from_cart: function(cart_item) {
        var hiding_cart;
        hiding_cart = this.cart_items.length == 1;
        if (hiding_cart) {
            this.delete_item_from_list2(cart_item.local_id);
            this.hide_cart(true, cart_item)
        } else {
            this.delete_item_from_list(cart_item.local_id, null, true);
            this.hide_summary(false)
        }
        if (cart_item.id)
            this.request({
                req: "del",
                id: cart_item.id
            }, true);
        else
            ;
    },
    hide_cart: function(animating, last_cart_item) {
        var ff = function(f_this, f_last_cart_item) {
            return function() {
                if (f_last_cart_item)
                    f_this.item_list_el.removeChild(f_last_cart_item.el);
                f_this.el.style.display = "none";
                Y.util.Dom.removeClass("rightColumn", "cart-visible");
                if (MediaView.mode == "phone") {
                    $("#menubar #cart-item-divider").hide();
                    $("#menubar #cart-item").hide();
                    $("#gift-balance-navbar").show();
                    $("#menubar-2018-phone.mobile-cd").hide()
                }
                f_this.clear(true)
            }
        }(this, last_cart_item);
        if (animating) {
            this.rev_el = elt("sidecartReveal");
            this.anim = new Y.util.Anim(this.rev_el);
            this.anim.init(this.rev_el, {
                height: {
                    to: 0
                }
            }, .15, Y.util.Easing.easeNone);
            this.anim.onComplete.subscribe(ff);
            this.anim.animate()
        } else
            ff()
    },
    request: function(data, add_id) {
        var self = this;
        var req_id = null;
        var cb = {
            success: function(o) {
                self.resp_success(o)
            },
            failure: function(o) {
                self.resp_failure(o)
            }
        };
        data.client_id = ClientID;
        data.sync_num = this.sync_num || 1;
        if (add_id) {
            req_id = "" + Math.random();
            this.last_req_id = data.req_id = req_id
        }
        var d = Url.joinQuery(data);
        Y.util.Connect.asyncRequest("POST", "/cart/cb", cb, d);
        return req_id
    },
    resp_success: function(o) {
        var data = eval("(" + o.responseText + ")");
        if (data.req == "add")
            this.resp_add(data);
        else if (data.req == "del")
            this.resp_del(data);
        else if (data.req == "update_quantity" || data.req == "update_unit_price" || data.req == "update_discount_id" || data.req == "update_purchase_note" || data.req == "update_notify_me" || data.req == "update_notify_me_label")
            this.resp_update(data);
        else if (data.req == "country")
            this.resp_country(data);
        if (data.unexpected_error) {
            alert(TM("An unexpected error occurred with the cart."));
            this.resp_update(data)
        }
    },
    resp_failure: function(o) {},
    resp_add: function(data) {
        if (!this.needs_resync(data)) {
            var i;
            var found = false;
            for (i = 0; i < this.cart_items.length; ++i) {
                var item = this.cart_items[i];
                if (item.local_id == data.local_id) {
                    item.id = data.id;
                    found = true;
                    break
                }
            }
            if (!found)
                this.request({
                    req: "del",
                    id: data.id
                }, true);
            this.snarf_cart_summary(data, true);
            this.update_packages()
        }
        this.maybe_checkout(data.req_id)
    },
    resp_del: function(data) {
        if (!this.needs_resync(data)) {
            this.snarf_cart_summary(data, true);
            this.update_packages(true)
        }
        this.maybe_checkout(data.req_id)
    },
    snarf_cart_summary: function(data, update) {
        if (data.req_id && data.req_id != this.last_req_id)
            return;
        if (data.currency) {
            this.subtotal = data.subtotal;
            this.has_shipping = data.has_shipping;
            this.shipping = data.shipping;
            this.has_tax = data.has_tax;
            this.tax = data.tax;
            ClientPrefs.update(data)
        }
        if (update)
            this.update_summary()
    },
    clear: function(clear_template) {
        var params;
        this.has_shipping = false;
        this.checking_out = false;
        this.checkout_after = null;
        if (this.anim)
            this.anim.stop(false);
        if (this.cart_items) {
            var i;
            for (i = 0; i < this.cart_items.length; ++i) {
                var cart_item = this.cart_items[i];
                cart_item.kill();
                if (cart_item.el.parentNode === this.item_list_el)
                    this.item_list_el.removeChild(cart_item.el)
            }
        }
        this.cart_items = [];
        if (this.ko_num_cart_items)
            this.ko_num_cart_items(0);
        else
            this.ko_num_cart_items = ko.observable(0);
        if (clear_template)
            this.clear_summary(false)
    },
    add_item_to_list: function(item_data, animate) {
        var self = this;
        var cart_item = CartItem.make(this, item_data, this.initing);
        this.cart_items.push(cart_item);
        this.ko_num_cart_items(this.cart_items.length);
        if (!this.initing && (!this.checking_out || this.paymentTypeDialogAllowed())) {
            this.item_list_el.appendChild(cart_item.el);
            cart_item.animate(true, null, animate);
            this.update_item_list();
            this.update_cart_contains()
        }
    },
    delete_item_from_list: function(local_id, complete_func, animate) {
        var cart_item = this.delete_item_from_list2(local_id);
        var ff = function(f_this, f_cart_item, f_complete_func) {
            return function() {
                f_this.item_list_el.removeChild(f_cart_item.el);
                if (f_complete_func)
                    f_complete_func()
            }
        }(this, cart_item, complete_func);
        cart_item.animate(false, ff, animate);
        this.update_item_list();
        this.update_cart_contains()
    },
    delete_item_from_list2: function(local_id) {
        var i;
        for (i = 0; i < this.cart_items.length; ++i) {
            var cart_item = this.cart_items[i];
            if (cart_item.local_id == local_id) {
                this.cart_items.splice(i, 1);
                this.ko_num_cart_items(this.cart_items.length);
                return cart_item
            }
        }
    },
    update_quantity: function(cart_item, quantity) {
        cart_item.quantity = quantity;
        if (!this.checking_out || this.paymentTypeDialogAllowed())
            cart_item.update()
    },
    update_discount_id: function(cart_item, unit_price, discount_id, discount_type) {
        cart_item.discount_id = discount_id;
        cart_item.discount_type = discount_type;
        cart_item.unit_price = unit_price;
        if (!this.checking_out || this.paymentTypeDialogAllowed())
            cart_item.update()
    },
    update_unit_price: function(cart_item, unit_price) {
        cart_item.unit_price = unit_price;
        if (!this.checking_out || this.paymentTypeDialogAllowed())
            cart_item.update()
    },
    update_item_list: function() {
        var i;
        for (i = 0; i < this.cart_items.length; ++i) {
            var cart_item = this.cart_items[i];
            if (i === 0)
                Y.util.Dom.addClass(cart_item.el, "first");
            else
                Y.util.Dom.removeClass(cart_item.el, "first");
            if (i == this.cart_items.length - 1)
                Y.util.Dom.addClass(cart_item.el, "last");
            else
                Y.util.Dom.removeClass(cart_item.el, "last")
        }
        var item_count = $("#sidecart .cart-number");
        if (item_count.length)
            item_count.text(this.cart_items.length);
        item_count = $("#menubar .cart-number");
        if (item_count.length)
            item_count.text(this.cart_items.length);
        this.ko_num_cart_items(this.cart_items.length);
        this.country_pref.hide()
    },
    hide_summary: function(immediate) {
        if (this.checking_out)
            return;
        if (this.summary_hidden)
            return;
        var ff;
        var self = this;
        ff = function() {
            var e1 = elt("cartSubtotal");
            var e2 = elt("cartShipping");
            if (e1)
                e1.innerHTML = self.NO_AMT;
            if (e2)
                e2.innerHTML = self.NO_AMT;
            self.hide_timeout_id = null
        }
        ;
        if (immediate)
            ff();
        else
            this.hide_timeout_id = setTimeout(ff, .5 * 1E3);
        this.summary_hidden = true
    },
    clear_summary: function(has_shipping) {
        var params;
        params = {};
        params.currency = ClientPrefs.currency;
        params.currency_prefix = "";
        params.has_shipping = has_shipping;
        params.disp_subtotal = this.NO_AMT;
        params.disp_shipping = this.NO_AMT;
        params.country = ClientPrefs.country;
        params.country_name = ClientPrefs.country_name;
        params.us_state = ClientPrefs.us_state;
        params.us_zip = ClientPrefs.us_zip;
        params.disp_total = this.NO_AMT;
        params.has_tax = false;
        params.contains = this.contains;
        params.header_rework_2018 = this.cfgFlags.header_rework_2018;
        this.summary_el.innerHTML = Templ.render("cart/sidecart_summary", params)
    },
    update_summary: function() {
        var i;
        var params;
        var currency_info;
        var total;
        if (this.hide_timeout_id) {
            clearTimeout(this.hide_timeout_id);
            this.hide_timeout_id = null
        }
        this.summary_hidden = false;
        if (this.cart_items.length === 0)
            return;
        this.country_pref.hide();
        currency_info = CurrencyData.info[ClientPrefs.currency];
        params = {};
        params.currency = ClientPrefs.currency;
        total = this.subtotal;
        params.has_shipping = this.has_shipping;
        if (this.has_shipping) {
            params.disp_shipping = TextFormat.currency(this.shipping, currency_info, true, true, true);
            total += this.shipping;
            params.country = ClientPrefs.country;
            params.country_name = ClientPrefs.country_name;
            params.us_state = ClientPrefs.us_state;
            params.us_zip = ClientPrefs.us_zip
        }
        params.has_tax = this.has_tax;
        if (this.has_tax && this.tax > 0) {
            params.disp_tax = TextFormat.currency(this.tax, currency_info, true, true, true);
            total += this.tax
        }
        params.disp_subtotal = TextFormat.currency(this.subtotal, currency_info, true, true, true);
        params.disp_total = TextFormat.currency(total, currency_info, true, true, true);
        if (ClientPrefs.currency == "RUP" && total > 99)
            params.disp_total = "99";
        params.media_mode = MediaView.mode;
        params.currency_prefix = currency_info.prefix;
        params.contains = this.contains;
        params.header_rework_2018 = this.cfgFlags.header_rework_2018;
        this.summary_el.innerHTML = Templ.render("cart/sidecart_summary", params)
    },
    update_cart_contains: function() {
        this.contains = {
            physical_gift: false
        };
        for (var i = 0; i < this.cart_items.length; i++)
            if (this.cart_items[i].is_gift && this.cart_items[i].item_type == "p")
                this.contains.physical_gift = true
    },
    update_packages: function(forceInventoryRefresh) {
        if (!window.TralbumData || !TralbumData.packages)
            return;
        var self = this;
        var pkgsInCart = false;
        Iter.each(TralbumData.packages, function(pkg) {
            var item = Iter.find(self.cart_items, function(i) {
                return i.item_type === "p" && i.item_id === pkg.id
            });
            if (item) {
                pkgsInCart = true;
                pkg.cart_quantity = item.quantity
            } else
                pkg.cart_quantity = null
        });
        if ((pkgsInCart || forceInventoryRefresh) && "Merch"in window && Merch.updateInventory)
            Merch.updateInventory(true)
    },
    show_country_pref: function(ev) {
        var self = this;
        var target = ev.target || ev.srcElement;
        Y.util.Event.preventDefault(ev);
        this.country_pref.show(target, false)
    },
    oncountry_change: function(new_country) {
        if (this.cart_items.length > 0) {
            this.country_pref.hide();
            this.hide_summary(false);
            this.request({
                req: "country",
                country: new_country.country,
                us_zip: new_country.us_zip
            })
        }
    },
    resp_country: function(data) {
        this.snarf_cart_summary(data, true)
    },
    resp_update: function(data) {
        if (!this.needs_resync(data))
            this.snarf_cart_summary(data, true);
        this.maybe_checkout(data.req_id);
        this.update_packages()
    },
    checkout_wait: function() {
        if (window.FacebookData) {
            var patchYui = false;
            FacebookUtils.correctSrollThen(patchYui, this, PleaseWaitPanel.show)
        } else
            PleaseWaitPanel.show()
    },
    isCardable: function(item) {
        var hasCardableCurrency;
        var isPackage;
        var isCertified;
        var isCardable;
        hasCardableCurrency = !!Iter.find(this.PAYFLOW_CURRENCIES, function(currency) {
            return currency === item.currency
        });
        isPackage = !!item.package || item.item_type === "p";
        isCertified = !!item.certified_seller;
        isCardable = (isCertified || !isPackage) && hasCardableCurrency;
        return isCardable
    },
    hasCardableItems: function(current_item_is_cardable) {
        var self = this;
        if (current_item_is_cardable)
            return true;
        var cardable_item = Iter.find(this.cart_items, function(item) {
            return self.isCardable(item)
        });
        if (cardable_item == null)
            return false;
        return true
    },
    hasNonUsdCardableItems: function() {
        var self = this;
        return !!Iter.find(this.cart_items, function(item) {
            return self.isCardable(item) && item.currency != "USD"
        })
    },
    paymentTypeDialogAllowed: function() {
        if (this.cfgFlags.payment_preference !== true)
            return false;
        if (typeof this.payment_pref !== "undefined" && (this.payment_pref == this.PAYMENTTYPE_PAYPAL || this.payment_pref == this.PAYMENTTYPE_CREDITCARD))
            return false;
        if (!this.hasCardableItems())
            return false;
        return true
    },
    cancelCheckout: function() {
        this.checking_out = false
    },
    showPaymentTypeDialog: function(from) {
        var allowed = this.paymentTypeDialogAllowed();
        var self = this;
        if (allowed && from !== "dialog") {
            this.payment_type_panel.from(from);
            this.payment_type_panel.show({
                close: function() {
                    self.cancelCheckout();
                    $(this).remove()
                }
            })
        }
        return allowed
    },
    maybe_checkout: function(req_id) {
        if (this.checkout_after && this.checkout_after == req_id)
            this.checkout(null, "dialog")
    },
    checkout: function(ev, from) {
        if (ev)
            Y.util.Event.preventDefault(ev);
        if (!this.gift_balance && this.showPaymentTypeDialog(from))
            return;
        this.checkout_wait(ev);
        var return_url = window.TralbumData && TralbumData.url || location.href;
        var params = this.getCheckoutParams(from, return_url);
        window.top.location.href = TemplGlobals.siteroot_https + "/cart/checkout_start?" + Url.joinQuery(params)
    },
    getCheckoutParams: function(from, return_url) {
        var params = {
            client_id: ClientID,
            from: from,
            return_url: return_url
        };
        if (window.FacebookData)
            params.orig = "f" + BandData.id;
        if (window.MediaView && MediaView.mode == "phone")
            params.mob = "1";
        if (this.payment_pref_changed === true)
            params.payment_pref = this.payment_pref;
        if (typeof this.payment_pref_override !== "undefined") {
            params.payment_pref_override = this.payment_pref_override;
            this.payment_pref_override = undefined
        }
        return params
    },
    wiggle: function() {
        $("#sidecart").addClass("wiggle");
        setTimeout(function() {
            $("#sidecart").removeClass("wiggle")
        }, 650)
    },
    toggle_cart_phone: function() {
        $("#sidecart-phone-reveal").slideToggle("fast");
        $("#sidecart").toggleClass("expanded");
        $("#menubar #cart-item").toggleClass("expanded");
        $("#menubar-2018-phone .cart-mobile").toggleClass("expanded")
    },
    show_cart_phone: function() {
        $("#sidecart-phone-reveal").slideDown("fast");
        $("#sidecart").addClass("expanded");
        $("#menubar #cart-item").addClass("expanded");
        $("#menubar-2018-phone .cart-mobile").addClass("expanded")
    },
    zzz: null
});
var CartItem = {
    make: function(cart, data, is_static) {
        return Object.create(CartItem).init(cart, data, is_static)
    },
    init: function(cart, data, is_static) {
        this.cart = cart;
        this.id = data.id;
        this.item_type = data.item_type;
        this.item_id = data.item_id;
        this.item_title = data.item_title;
        this.item_title2 = data.item_title2;
        this.releases = data.releases;
        this.band_id = data.band_id;
        this.artist_name = this.band_name = data.artist_name;
        this.unit_price = data.unit_price;
        this.currency = data.currency;
        this.quantity = data.quantity;
        this.option_id = data.option_id;
        this.option_name = data.option_name;
        this.discount_id = data.discount_id;
        this.discount_type = data.discount_type;
        this.url = data.url;
        this.art_id = data.art_id;
        this.image_id = data.image_id;
        this.is_gift = data.is_gift;
        this.gift_recipient_email = data.gift_recipient_email;
        this.shipping_street = data.shipping_street;
        this.shipping_street_2 = data.shipping_street_2;
        this.shipping_city = data.shipping_city;
        this.shipping_state = data.shipping_state;
        this.shipping_zip = data.shipping_zip;
        this.shipping_country_code = data.shipping_country_code;
        this.purchase_note = data.purchase_note;
        this.notify_me = data.notify_me;
        this.notify_me_label = data.notify_me_label;
        this.certified_seller = data.certified_seller;
        this.license_id = data.license_id;
        this.ko_num_cart_items = ko.observable(0);
        if (is_static) {
            this.el = elt("sidecart_item_" + this.id);
            this.local_id = "" + Math.random();
            this.add_handlers()
        } else {
            this.local_id = data.local_id;
            this.render()
        }
        return this
    },
    kill: function() {
        if (this.anim)
            this.anim.stop(false);
        if (this.animc)
            this.animc.stop(false)
    },
    render: function() {
        this.el = document.createElement("div");
        Y.util.Dom.addClass(this.el, "item");
        this.update()
    },
    update: function() {
        this.disp_price = TextFormat.currency(this.unit_price * this.quantity, CurrencyData.info[this.currency], false, true, false);
        var media_mode = window.MediaView ? MediaView.mode : null;
        this.el.innerHTML = Templ.render("cart/sidecart_item", {
            item: this,
            media_mode: media_mode
        });
        this.add_handlers()
    },
    add_handlers: function() {
        this.delete_el = Y.util.Dom.getElementsByClassName("delete", "a", this.el)[0];
        Y.util.Event.on(this.delete_el, "click", function(cart_item) {
            return function(ev) {
                cart_item.delete_click(ev)
            }
        }(this))
    },
    delete_click: function(ev) {
        Y.util.Event.preventDefault(ev);
        this.cart.delete_from_cart(this)
    },
    animate: function(reveal, complete_func, animate) {
        var old_height;
        var new_height;
        var auto;
        this.rev_el = Y.util.Dom.getElementsByClassName("cartItemReveal", "div", this.el)[0];
        this.con_el = Y.util.Dom.getElementsByClassName("cartItemContents", "div", this.el)[0];
        if (animate) {
            this.anim = new Y.util.Anim(this.rev_el);
            this.animc = new Y.util.ColorAnim(this.rev_el);
            if (reveal) {
                this.anim.init(this.rev_el, {
                    height: {
                        from: 0,
                        to: this.con_el.offsetHeight
                    }
                }, .1, Y.util.Easing.easeOut);
                this.animc.init(this.rev_el, {
                    opacity: {
                        from: 0,
                        to: 1
                    }
                }, .5);
                auto = true
            } else {
                this.anim.init(this.rev_el, {
                    height: {
                        to: 0
                    }
                }, .1, Y.util.Easing.easeOut);
                this.animc.init(this.rev_el, {
                    opacity: {
                        from: 1,
                        to: 0
                    }
                }, .05);
                auto = false
            }
            this.anim.onComplete.subscribe(function(f_this, f_auto, f_complete_func) {
                return function() {
                    if (f_auto)
                        f_this.rev_el.style.height = "auto";
                    if (f_complete_func)
                        f_complete_func()
                }
            }(this, auto, complete_func));
            this.anim.animate();
            this.animc.animate()
        } else {
            if (reveal)
                this.rev_el.style.height = "auto";
            if (complete_func)
                complete_func()
        }
    },
    zzz: null
};
var ClientPrefsObservable = new function ClientPrefsObservable() {
    var self = this;
    self.country = ko.observable();
    self.countryName = ko.observable();
    self.currency = ko.observable();
    self.usState = ko.observable();
    self.usZip = ko.observable();
    self.isDefault = ko.observable();
    self.paymentType = ko.observable();
    self.isEU = function() {
        return window.Geo !== undefined && Geo.isEUCountry(self.country())
    }
    ;
    self.update = function(data) {
        self.country(data.country);
        self.countryName(data.country_name);
        self.currency(data.currency);
        self.usState(data.us_state);
        self.usZip(data.us_zip);
        self.paymentType(data.payment_type);
        self.isDefault(data.is_default)
    }
    ;
    return self
}
;
var ClientPrefs = {
    country: null,
    country_name: null,
    currency: null,
    us_state: null,
    us_zip: null,
    payment_type: null,
    update: function(data) {
        ClientPrefs.country = data.country;
        ClientPrefs.country_name = data.country_name;
        ClientPrefs.currency = data.currency;
        ClientPrefs.us_state = data.us_state;
        ClientPrefs.us_zip = data.us_zip;
        ClientPrefs.payment_type = data.payment_type;
        ClientPrefs.is_default = data.is_default;
        ClientPrefsObservable.update(data)
    },
    zzz: null
};
var CountryPrefPanel = {
    make: function(onchange_func) {
        var klass = !window.MediaView || MediaView.mode != "phone" ? CountryPrefPanel : CountryPrefPanelPhone;
        return Object.create(klass).init(onchange_func)
    },
    init: function(onchange_func) {
        this.onchange_func = onchange_func;
        this.dlg = null;
        return this
    },
    show: function(near_el, align_left) {
        var self = this;
        var i;
        var options;
        options = this.optionHTML();
        this.dlg = NuDialog.showTemplate("cart/country_pref", {
            options: options
        }, {
            width: "auto",
            minHeight: 0,
            modal: true,
            closeOnEscape: true,
            draggable: false,
            buttons: [],
            dialogClass: "no-title no-padding no-border-radius no-bg"
        });
        this.dlg.dialog("widget").next(".ui-widget-overlay").addClass("no-overlay").click(function(event) {
            event.preventDefault();
            self.hide()
        });
        $("a.country_pref_close", this.dlg).click(function(event) {
            event.preventDefault();
            self.hide()
        });
        this.select_el = $(".country_pref_select", this.dlg)[0];
        $(".country_pref_select", this.dlg).change($.proxy(this.onchange, this));
        this.zip_el = $(".country_pref_zip", this.dlg)[0];
        $(".country_pref_zip", this.dlg).textInput(function() {
            $(".us-zip-done", this.dlg).toggleClass("disabled", !self.zipIsValid(this.value))
        }).on("keypress", function(event) {
            if (event.which === 13)
                self.onchange(event);
            return !(event.which >= 32 && event.which <= 47 || event.which > 57 && event.which < 127)
        })[0];
        $(".us-zip-done").click(function(event) {
            self.onchange(event);
            return false
        });
        this.dlg.on("dialogclose", function() {
            self.dlg = null
        });
        this.selectOption();
        var pointer_el = $(".country_pref_pointer", this.dlg);
        if (typeof align_left != "undefined" && align_left) {
            pointer_el.css("float", "left");
            pointer_el.css("margin-left", "10px");
            this.dlg.dialog("option", "position", {
                my: "left top",
                at: "left bottom",
                of: near_el
            })
        } else {
            pointer_el.css("float", "right");
            pointer_el.css("margin-right", "10px");
            this.dlg.dialog("option", "position", {
                my: "right top",
                at: "right bottom",
                of: near_el
            })
        }
        Dom.focus(this.select_el)
    },
    hide: function() {
        if (this.dlg) {
            this.dlg.dialog("widget").next(".ui-widget-overlay").removeClass("no-overlay");
            this.dlg.dialog("close")
        }
    },
    onclose: function(ev) {
        this.hide();
        return false
    },
    onchange: function(ev) {
        var i;
        var new_code;
        var new_us_state;
        var new_us_zip;
        new_code = this.select_el.value;
        if (new_code === "US") {
            if (ev.target === this.select_el) {
                $(".us-zip", this.dlg).slideToggleBool(true, "fast", function() {
                    $(this).find(".country_pref_zip").focus()
                });
                return
            }
            new_us_state = null;
            new_us_zip = this.zip_el.value;
            if (!this.zipIsValid(new_us_zip)) {
                Log.warn("Invalid zip", new_us_zip);
                return
            }
        } else {
            new_us_state = null;
            new_us_zip = null
        }
        this.hide();
        if (new_code != ClientPrefs.country || new_us_zip != ClientPrefs.us_zip) {
            var client_data = {};
            client_data.country = new_code;
            client_data.us_state = new_us_state;
            client_data.us_zip = new_us_zip;
            for (i = 0; i < CurrencyCodes.length; ++i) {
                var c = CurrencyCodes[i];
                if (c.code == new_code) {
                    client_data.country_name = CountryList.getCountryName(new_code);
                    client_data.currency = c.currency_code;
                    break
                }
            }
            ClientPrefs.update(client_data);
            if (this.onchange_func)
                this.onchange_func(client_data)
        }
        return false
    },
    zipIsValid: function(zip) {
        return /^\d{5}$/.test(zip)
    },
    optionHTML: function() {
        var options = [];
        var countryList = CountryList.getCountryList();
        countryList.forEach(function(cc) {
            var dis = cc.disabled ? "disabled style\x3d'color: grey'" : "";
            options.push('\x3coption value\x3d"', cc.code, '"', dis, "\x3e", cc.name, "\x3c/option\x3e")
        });
        return options.join("")
    },
    selectOption: function() {
        $(this.select_el).find('option[value\x3d"' + ClientPrefs.country + '"]').attr("selected", true);
        $(this.dlg).find(".us-zip").toggle(ClientPrefs.country === "US").find(".country_pref_zip").val(ClientPrefs.us_zip).end().find(".us-zip-done").toggleClass("disabled", !this.zipIsValid(ClientPrefs.us_zip))
    },
    zzz: null
};
var CountryPrefPanelPhone = {
    init: function(onchange_func) {
        this.onchange_func = onchange_func;
        this.dlg = null;
        return this
    },
    show: function() {
        var self = this;
        var body = [].concat('\x3cselect class\x3d"country_pref_select"\x3e', this.optionHTML(), "\x3c/select\x3e").join("");
        var zipLabel = TM("Zip:");
        body += '\x3cdiv class\x3d"us-zip"\x3e\x3clabel\x3e' + zipLabel + ' \x3cinput type\x3d"text" size\x3d"5" maxlength\x3d"5" pattern\x3d"[0-9]*"/\x3e\x3c/label\x3e\x3c/div\x3e';
        this.dlg = NuDialog.alertHTML(TM("Choose your country"), body, {
            width: "auto",
            minHeight: 0,
            modal: true,
            closeOnEscape: true,
            draggable: false,
            buttons: [{
                id: "country-pref-ok",
                text: TM("OK"),
                click: function(event) {
                    self.handleUpdate(event);
                    self.dlg.dialog("close");
                    return false
                }
            }]
        });
        this.selectOption();
        Dom.focus(this.getSelect());
        $(".country_pref_select", this.dlg).change(function() {
            var isUS = $(this).val() === "US";
            $(this).siblings(".us-zip").slideToggleBool(isUS, "fast", function() {
                $(this).find("input").focus()
            });
            self.updateDoneButtonState()
        });
        $(".us-zip input", this.dlg).textInput(function() {
            self.updateDoneButtonState()
        });
        this.dlg.on("dialogclose", function() {
            self.dlg = null
        })
    },
    hide: function() {},
    updateDoneButtonState: function() {
        var isUS = $(".country_pref_select", this.dlg).val() === "US";
        var zip = $(".us-zip input", this.dlg).val();
        var disable = isUS && !CountryPrefPanel.zipIsValid(zip);
        $("#country-pref-ok").attr("disabled", disable)
    },
    handleUpdate: function() {
        var new_code = this.getSelect().val();
        var new_us_state;
        var new_us_zip;
        if (new_code === "US") {
            new_us_state = null;
            new_us_zip = $(".us-zip input", this.dlg).val()
        } else {
            new_us_state = null;
            new_us_zip = null
        }
        if (new_code != ClientPrefs.country || new_us_zip != ClientPrefs.us_zip) {
            var client_data = {};
            client_data.country = new_code;
            client_data.us_state = new_us_state;
            client_data.us_zip = new_us_zip;
            Iter.find(CurrencyCodes, function(country) {
                if (country.code == new_code) {
                    client_data.country_name = CountryList.getCountryName(new_code);
                    client_data.currency = country.currency_code;
                    return true
                }
            });
            ClientPrefs.update(client_data);
            if (this.onchange_func)
                this.onchange_func(client_data)
        }
    },
    optionHTML: function() {
        var options = [];
        var countryList = CountryList.getCountryList();
        countryList.forEach(function(cc) {
            var dis = cc.disabled ? "disabled style\x3d'color: grey'" : "";
            options.push(' \n\x3coption value\x3d"', cc.code, '"', dis, "\x3e", cc.name, "\x3c/option\x3e")
        });
        return options
    },
    getSelect: function() {
        return $(".country_pref_select", this.dlg)
    },
    selectOption: function() {
        this.getSelect().find('option[value\x3d"' + ClientPrefs.country + '"]').attr("selected", true);
        $(".us-zip", this.dlg).toggle(ClientPrefs.country === "US").find("input").val(ClientPrefs.us_zip)
    },
    zzz: null
};
var PleaseWaitPanel = {
    show: function(wait) {
        if (PleaseWaitPanel.panel)
            return;
        if (window.MediaView && MediaView.mode == "phone") {
            PleaseWaitPanel.showPhone();
            return
        }
        if (typeof wait == "undefined" || wait) {
            PleaseWaitPanel.timeout_id = setTimeout(function() {
                PleaseWaitPanel.show(false)
            }, .5 * 1E3);
            return
        }
        if (PleaseWaitPanel.timeout_id) {
            clearTimeout(PleaseWaitPanel.timeout_id);
            PleaseWaitPanel.timeout_id = null
        }
        var elem_id = "dlg" + Dialog._id++;
        PleaseWaitPanel.panel = new Y.widget.Panel(elem_id,{
            width: "300px",
            fixedcenter: window.FacebookData ? false : true,
            constraintoviewport: true,
            underlay: "none",
            close: false,
            visible: true,
            draggable: false,
            modal: true
        });
        PleaseWaitPanel.panel.setBody(TM("Please wait..."));
        PleaseWaitPanel.panel.render(document.body);
        $(PleaseWaitPanel.panel.element).addClass("please-wait-panel")
    },
    showPhone: function() {
        PleaseWaitPanel.panel = BubbleMessage(TM("Please wait..."), 18E4);
        $(document.body).addClass("nouveau-masked").append('\x3cdiv class\x3d"nouveau-mask"\x3e')
    },
    zzz: null
};
var CountryOrder = {
    "preferred": ["US", "CA", "GB", "AU", "FR", "DE", "JP"],
    "general": ["AF", "AX", "AL", "DZ", "AS", "AD", "AO", "AI", "AQ", "AG", "AR", "AM", "AW", "AC", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BV", "BR", "IO", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "BQ", "KY", "CF", "TD", "CL", "CN", "CX", "CC", "CO", "KM", "CG", "CD", "CK", "CR", "CI", "HR", "CU", "CW", "CY", "CZ", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "TF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GG", "GN", "GW", "GY", "HT", "HM", "HN", "HK", "HU", "HY", "IS", "IN", "ID", "IR", "IQ", "IE", "IM", "IL", "IT", "JM", "JP", "JE", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "YT", "MX", "FM", "UM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "NF", "KP", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PN", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SX", "SK", "SI", "SB", "SO", "ZA", "GS", "KR", "SS", "ES", "LK", "SD", "SR", "SJ", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "TL", "TG", "TK", "TO", "TT", "TA", "TN", "TR", "TM", "TC", "TV", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW"]
};
var CountryNames = {
    "UZ": "Uzbekistan",
    "SE": "Sweden",
    "CX": "Christmas Island",
    "PG": "Papua New Guinea",
    "LR": "Liberia",
    "AC": "Ascension",
    "IT": "Italy",
    "VC": "Saint Vincent and the Grenadines",
    "FK": "Falkland Islands (Islas Malvinas)",
    "CM": "Cameroon",
    "ZW": "Zimbabwe",
    "BY": "Belarus",
    "HU": "Hungary",
    "KH": "Cambodia",
    "BN": "Brunei",
    "NF": "Norfolk Island",
    "AZ": "Azerbaijan",
    "MR": "Mauritania",
    "ZA": "South Africa",
    "PS": "Palestine",
    "DM": "Dominica",
    "AO": "Angola",
    "MG": "Madagascar",
    "CY": "Cyprus",
    "PH": "Philippines",
    "LS": "Lesotho",
    "AD": "Andorra",
    "CN": "China",
    "NR": "Nauru",
    "CC": "Cocos (Keeling) Islands",
    "BZ": "Belize",
    "ZM": "Zambia",
    "HK": "Hong Kong",
    "BO": "Bolivia",
    "NG": "Nigeria",
    "KI": "Kiribati",
    "BD": "Bangladesh",
    "GW": "Guinea-Bissau",
    "TF": "French Southern Territories",
    "MS": "Montserrat",
    "GL": "Greenland",
    "PT": "Portugal",
    "MH": "Marshall Islands",
    "SR": "Suriname",
    "VE": "Venezuela",
    "AE": "United Arab Emirates",
    "SG": "Singapore",
    "GA": "Gabon",
    "CZ": "Czech Republic",
    "LT": "Lithuania",
    "FM": "Micronesia",
    "CO": "Colombia",
    "LI": "Liechtenstein",
    "RS": "Serbia",
    "CD": "Congo (Kinshasa)",
    "TR": "Turkey",
    "TG": "Togo",
    "DZ": "Algeria",
    "EC": "Ecuador",
    "MT": "Malta",
    "BE": "Belgium",
    "AQ": "Antarctica",
    "SS": "South Sudan",
    "GM": "Gambia",
    "DO": "Dominican Republic",
    "GB": "United Kingdom",
    "SH": "Saint Helena",
    "LU": "Luxembourg",
    "AF": "Afghanistan",
    "IL": "Israel",
    "UG": "Uganda",
    "HM": "Heard Island and McDonald Islands",
    "BQ": "Caribbean Netherlands",
    "NI": "Nicaragua",
    "WF": "Wallis and Futuna",
    "TH": "Thailand",
    "MU": "Mauritius",
    "BF": "Burkina Faso",
    "GY": "Guyana",
    "ST": "Sao Tome and Principe",
    "GN": "Guinea",
    "AR": "Argentina",
    "YE": "Yemen",
    "VG": "Virgin Islands, British",
    "PK": "Pakistan",
    "DE": "Germany",
    "LV": "Latvia",
    "AG": "Antigua and Barbuda",
    "SI": "Slovenia",
    "US": "United States",
    "IM": "Isle of Man",
    "RU": "Russia",
    "FO": "Faroe Islands",
    "LK": "Sri Lanka",
    "NU": "Niue",
    "CF": "Central African Republic",
    "KW": "Kuwait",
    "HY": "Hyrule",
    "TT": "Trinidad and Tobago",
    "HN": "Honduras",
    "BR": "Brazil",
    "MV": "Maldives",
    "BG": "Bulgaria",
    "EE": "Estonia",
    "PW": "Palau",
    "AS": "American Samoa",
    "MK": "Macedonia",
    "JM": "Jamaica",
    "SJ": "Svalbard and Jan Mayen",
    "GD": "Grenada",
    "PL": "Poland",
    "CR": "Costa Rica",
    "PA": "Panama",
    "IN": "India",
    "LA": "Laos",
    "CG": "Congo (Brazzaville)",
    "BS": "Bahamas",
    "WS": "Samoa",
    "KM": "Comoros",
    "TJ": "Tajikistan",
    "MW": "Malawi",
    "BH": "Bahrain",
    "QA": "Qatar",
    "AT": "Austria",
    "ML": "Mali",
    "SV": "El Salvador",
    "GP": "Guadeloupe",
    "VI": "Virgin Islands, U.S.",
    "SK": "Slovakia",
    "GE": "Georgia",
    "PM": "Saint Pierre and Miquelon",
    "AI": "Anguilla",
    "MA": "Morocco",
    "IO": "British Indian Ocean Territory",
    "RW": "Rwanda",
    "ID": "Indonesia",
    "CH": "Switzerland",
    "KY": "Cayman Islands",
    "LB": "Lebanon",
    "TV": "Tuvalu",
    "KN": "Saint Kitts and Nevis",
    "ER": "Eritrea",
    "BT": "Bhutan",
    "NL": "Netherlands",
    "TK": "Tokelau",
    "EG": "Egypt",
    "MX": "Mexico",
    "BI": "Burundi",
    "NA": "Namibia",
    "VU": "Vanuatu",
    "JO": "Jordan",
    "GQ": "Equatorial Guinea",
    "PY": "Paraguay",
    "AU": "Australia",
    "MM": "Myanmar",
    "PN": "Pitcairn Islands",
    "LY": "Libya",
    "SL": "Sierra Leone",
    "GF": "French Guiana",
    "FR": "France",
    "SA": "Saudi Arabia",
    "CI": "Cote d'Ivoire (Ivory Coast)",
    "KZ": "Kazakhstan",
    "LC": "Saint Lucia",
    "IE": "Ireland",
    "TW": "Taiwan",
    "ES": "Spain",
    "EH": "Western Sahara",
    "TL": "Timor-Leste",
    "MY": "Malaysia",
    "BJ": "Benin",
    "TA": "Tristan da Cunha",
    "GR": "Greece",
    "YT": "Mayotte",
    "MN": "Mongolia",
    "JP": "Japan",
    "SX": "Sint Maarten",
    "MC": "Monaco",
    "JE": "Jersey",
    "SM": "San Marino",
    "GG": "Guernsey",
    "SB": "Solomon Islands",
    "CU": "Cuba",
    "OM": "Oman",
    "IQ": "Iraq",
    "UA": "Ukraine",
    "ET": "Ethiopia",
    "BV": "Bouvet Island",
    "KP": "North Korea",
    "HR": "Croatia",
    "TM": "Turkmenistan",
    "KE": "Kenya",
    "MZ": "Mozambique",
    "NC": "New Caledonia",
    "AW": "Aruba",
    "MO": "Macau",
    "SY": "Syria",
    "GS": "South Georgia and the South Sandwich Islands",
    "SN": "Senegal",
    "GH": "Ghana",
    "DJ": "Djibouti",
    "AL": "Albania",
    "MD": "Moldova",
    "VA": "Vatican City",
    "PE": "Peru",
    "IR": "Iran",
    "SC": "Seychelles",
    "CV": "Cape Verde",
    "RO": "Romania",
    "FI": "Finland",
    "NZ": "New Zealand",
    "CK": "Cook Islands",
    "XK": "Kosovo",
    "UM": "Midway Islands",
    "BW": "Botswana",
    "NO": "Norway",
    "TN": "Tunisia",
    "BL": "Saint Barth\u00e9lemy",
    "TC": "Turks and Caicos Islands",
    "BA": "Bosnia and Herzegovina",
    "SZ": "Swaziland",
    "GT": "Guatemala",
    "AX": "Aland",
    "MP": "Northern Mariana Islands",
    "GI": "Gibraltar",
    "DK": "Denmark",
    "AM": "Armenia",
    "ME": "Montenegro",
    "SO": "Somalia",
    "UY": "Uruguay",
    "IS": "Iceland",
    "SD": "Sudan",
    "CW": "Cura\u00e7ao",
    "PF": "French Polynesia",
    "CL": "Chile",
    "FJ": "Fiji",
    "TZ": "Tanzania",
    "HT": "Haiti",
    "RE": "Reunion",
    "NP": "Nepal",
    "CA": "Canada",
    "KR": "South Korea",
    "TO": "Tonga",
    "BM": "Bermuda",
    "NE": "Niger",
    "KG": "Kyrgyzstan",
    "GU": "Guam",
    "TD": "Chad",
    "MQ": "Martinique",
    "BB": "Barbados",
    "VN": "Viet Nam",
    "AN": "Netherlands Antilles",
    "MF": "Saint Martin",
    "PR": "Puerto Rico"
};
if (typeof CountryList !== "undefined")
    Log.server("CountryList initialized more than once", "warn");
else
    var CountryList = function() {
        function getCountryName(code) {
            if (typeof code === undefined) {
                Log.server("getCountryName called with no country code", "warn");
                return "Unknown country"
            }
            var name = CountryNames[code];
            if (name === undefined) {
                Log.server("country with no name: " + code, "warn");
                return "Unknown country"
            }
            return name
        }
        function makeCountryNameList(includeCountries, exclude, preferred) {
            function add(cc) {
                var ccname = countryHash[cc];
                if (ccname && !(cc in excludeHash))
                    result.push(ccname)
            }
            if (typeof includeCountries == "undefined" || !includeCountries) {
                includeCountries = [];
                Array.prototype.push.apply(includeCountries, CountryOrder.general)
            }
            if (typeof exclude == "undefined" || !exclude)
                exclude = [];
            var excludeHash = {};
            exclude.forEach(function(cc) {
                if (cc)
                    excludeHash[cc] = true
            });
            if (typeof preferred == "undefined" || !preferred) {
                preferred = [];
                Array.prototype.push.apply(preferred, CountryOrder.preferred)
            }
            var countryHash = {};
            includeCountries.forEach(function(cc) {
                var name = CountryNames[cc];
                countryHash[cc] = {
                    code: cc,
                    name: name
                }
            });
            var preferredHash = {};
            if (preferred.length > 0)
                preferred.forEach(function(cc) {
                    var c = countryHash[cc];
                    preferredHash[cc] = c
                });
            var result = [];
            if (preferred.length > 0)
                preferred.forEach(add);
            if (result.length > 0)
                result.push({
                    code: "--",
                    name: "---",
                    disabled: true
                });
            includeCountries.forEach(function(cc) {
                if (optionIncludePreferredInMain || !preferredHash[cc])
                    add(cc)
            });
            return result
        }
        function getAllCountries() {
            if (typeof ko == "undefined") {
                Log.server("initializing country list before knockout loaded", "error");
                return null
            }
            return ko.observableArray(makeCountryNameList())
        }
        function getDisableSeparators() {
            if (typeof ko == "undefined") {
                Log.server("initializing country list before knockout loaded", "error");
                return null
            }
            var disableSeparators = function(option, item) {
                if (!item)
                    return;
                ko.applyBindingsToNode(option, {
                    disable: "disabled"in item && item.disabled,
                    style: {
                        color: "disabled"in item && item.disabled ? "#bbb" : "inherit"
                    }
                }, item)
            };
            return disableSeparators
        }
        var optionIncludePreferredInMain = true;
        var exported = {
            getCountryList: makeCountryNameList,
            getCountryName: getCountryName,
            allCountries: getAllCountries,
            disableSeparators: getDisableSeparators
        };
        if ("Pseudoloc"in window)
            $(document).ready(function() {
                var PSEUDO_LOCALE = "qq";
                var pageData = $("#pagedata").data("blob");
                var locale = pageData && pageData.locale || null;
                if (locale && locale == PSEUDO_LOCALE)
                    Object.keys(CountryNames).forEach(function(code) {
                        CountryNames[code] = Pseudoloc.str(CountryNames[code])
                    })
            });
        return exported
    }();
var DownloadPanelVM = function($, ko) {
    function CheckoutDiscountVM(parent, init) {
        function commitEditor() {
            setTimeout(function() {
                Log.debug("discount: committing editor");
                __codeEntry(__normalizedRawEntryText());
                checkDiscount()
            }, 100)
        }
        function checkDiscount() {
            Log.debug("checkDiscount: start");
            if (!__enabled) {
                Log.debug("checkDiscount returning, not enabled");
                return
            }
            if (__state() == "verifying") {
                Log.debug("checkDiscount returning, already verifying");
                return
            }
            var code = __codeEntry();
            if (code === "") {
                Log.debug("checkDiscount: empty code");
                discountApply(__defaultDiscount(), null, false);
                if (__defaultState() != "editing")
                    blurEditor();
                __state(__defaultState());
                if (__defaultIsSubscriber)
                    __subscriberDiscountVisible(true);
                __verifyError(null);
                __yumURL(null);
                discountRescroll();
                return
            }
            if (code == __checkedCode) {
                Log.debug("checkDiscount: code is already verified: ", code);
                if (code) {
                    blurEditor();
                    __state("verified")
                } else
                    __state("editing");
                return
            }
            if (looksLikeDownloadCode(code)) {
                Log.debug("checkDiscount returning, download code detected");
                discountApply(__defaultDiscount(), null, false);
                __verifyError(null);
                __yumURL("/yum?code\x3d" + encodeURIComponent(code));
                return
            }
            var successCb = function(response) {
                Log.debug("discount: XHR succeeded for code: ", code, ", response: ", response);
                __state("verified");
                __verifyXHR = null;
                if (response.ok)
                    if (__subscriberDiscount() && __subscriberDiscount().price < response.price)
                        handleSubscriberDiscountIsLower();
                    else {
                        discountApply(response, code, true);
                        __verifyError(null);
                        if (response.pinned)
                            warnPinned(response.price).then(discountRescroll);
                        else
                            discountRescroll()
                    }
                else {
                    discountApply(__defaultDiscount(), code, false);
                    __verifyError(TM("Sorry, that discount code is invalid or expired."));
                    discountRescroll()
                }
            };
            var failureCb = function(xhr, errorType) {
                if (errorType == "abort") {
                    Log.debug("discount: XHR aborted by user");
                    return
                }
                Log.error("discount: XHR failed for code: " + code);
                __state("verified");
                __verifyError(TM("Sorry, there was an unexpected error. Please try again."));
                __verifyXHR = null;
                discountApply(__defaultDiscount(), null, false);
                discountRescroll()
            };
            var license_id = TralbumData.current.type == "package" ? TralbumData.current.associated_license_id || undefined : TralbumData.current.licensed_item_id || undefined;
            var params = {
                item: __unitId,
                code: code,
                associated_license_id: license_id,
                country_code: Identities.ip_country_code
            };
            if (window.FacebookData)
                params.bid = BandData.id;
            __verifyError(null);
            __yumURL(null);
            blurEditor();
            __state("verifying");
            __verifyXHR = $.post("/lookup_discount_cb", params, null, "json").success(successCb).error(failureCb)
        }
        function discountVerified() {
            if (!__enabled)
                return true;
            if (__state() == "verifying") {
                NuDialog.alert(TM("A little busy"), TM("We are checking your discount code. Please wait..."));
                return false
            }
            var code = __normalizedRawEntryText();
            Log.debug("discountVerified: editor:", code, "checkedCode:", __checkedCode);
            return code == __checkedCode
        }
        function discountID() {
            return __discountID
        }
        function discountType() {
            return __discountType
        }
        function getUnitPrice() {
            if (!__enabled || __discountedPrice === null || isNaN(__discountedPrice))
                return __basePrice;
            return __discountedPrice
        }
        function getBasePrice() {
            return __basePrice
        }
        function getDiscountedPrice() {
            return __discountedPrice
        }
        function looksLikeDownloadCode(code) {
            return code.search(/^[a-z0-9]{4,5}\-[a-z0-9]{4,5}$/) === 0
        }
        function cancelVerify() {
            if (__verifyXHR) {
                __verifyXHR.abort();
                __verifyXHR = null
            }
        }
        function discountRescroll() {
            if (MediaView.mode == "phone")
                Dom.scrollToElement(__parent._dlg.dialog("widget"), 0, true)
        }
        function warnPinned(price) {
            price = TextFormat.currency(price, parent._currency);
            var deferred = $.Deferred();
            var message = TM("The discounted price is below the minimum we can process, so it was adjusted to {{amount}}.", {
                amount: price
            });
            NuDialog.alertHTML(TM("Discount code"), message, {
                close: function() {
                    deferred.resolve()
                }
            });
            return deferred
        }
        function discountApply(discountData, code, adjustUserPrice) {
            discountData = discountData || {};
            var price = __basePrice;
            var discountedPrice = discountData.price || null;
            var discountID = discountData.discount_id || null;
            var discountType = discountData.discount_type || null;
            if (discountedPrice !== null)
                if (discountedPrice != price)
                    price = discountedPrice;
                else
                    discountedPrice = null;
            __discountedPrice = discountedPrice;
            __discountID = discountID;
            __discountType = discountType;
            __checkedCode = code || "";
            var q = $("#orderQuantity")[0];
            q = q ? parseInt(q.value) : null;
            if (q === null || isNaN(q))
                q = 1;
            var $nypBasePrice = $(".nyp-summary-price");
            if ($nypBasePrice.length) {
                var $nypDiscountedPrice = $nypBasePrice.nextAll(".nyp-summary-discounted-price");
                if (discountedPrice === null) {
                    $nypBasePrice.removeClass("disabled");
                    $nypDiscountedPrice.remove()
                } else {
                    $nypBasePrice.addClass("disabled");
                    if (!$nypDiscountedPrice.length)
                        $nypDiscountedPrice = $('\x3cspan class\x3d"nyp-summary-discounted-price"\x3e\x3c/span\x3e').insertAfter($nypBasePrice);
                    $nypDiscountedPrice.html(" " + TextFormat.currency(price, parent._currency, false, false, true));
                    if (adjustUserPrice) {
                        var enteredPrice = Form.validate.parsePrice($("#userPrice").val());
                        var $editor = $("#userPrice");
                        if (enteredPrice && enteredPrice <= __basePrice && enteredPrice >= price)
                            $editor.val(price);
                        else {
                            __parent._pricingVM.numeric_price(null);
                            __parent._pricingVM.clearValidation();
                            $editor.val("").focus()
                        }
                    }
                }
                __parent.updateCurrencyDisplay()
            } else {
                var userPrice = TextFormat.currency(q * price, parent._currency, true);
                if (discountedPrice === null) {
                    Dom.display("normal-price-wrapper", false);
                    Dom.setText("userPrice", userPrice)
                } else {
                    var basePrice = TextFormat.currency(q * __basePrice, parent._currency, true);
                    Dom.setText("normal-price", basePrice);
                    Dom.display("normal-price-wrapper", true);
                    Dom.setText("userPrice", userPrice)
                }
            }
        }
        function applyInitialDiscount() {
            var dis = __defaultDiscount();
            if (dis)
                setTimeout(function() {
                    discountApply(dis, null, false)
                }, 0)
        }
        function setupEventHandlers() {
            var elem = $(".discount-section", __parent._dlg)[0];
            if (elem) {
                $("#discountInput", __parent._dlg).keydown(handleKeyDown);
                subscribeEditorBlur()
            } else
                Log.error("Missing expected discount code elements")
        }
        function handleEditCode() {
            Log.debug("discount: edit code");
            cancelVerify();
            __state("editing");
            $("#discountInput").select()
        }
        function handleApplyCode() {
            Log.debug("discount: apply code (click)");
            return false
        }
        function handleEditorBlur(isFocused) {
            if (!isFocused && __state() == "editing")
                commitEditor()
        }
        function handleKeyDown(event) {
            if (event.which == 13) {
                Log.debug("discount: apply code (Enter)");
                commitEditor();
                return false
            }
        }
        function handleSwitchToCode() {
            __subscriberDiscountVisible(false);
            __state("editing")
        }
        function focusSwitchToCode() {
            if (__state() === "editing" && (!window.MediaView || MediaView.mode != "phone"))
                __entryFocused(true)
        }
        function handleSubscriberDiscountIsLower() {
            __subscriberDiscountVisible(true);
            __verifyError(null);
            __codeEntry("");
            __rawEntryText("");
            discountApply(__subscriberDiscount(), null, true);
            var title = TM("Best discount");
            var body = TM("We noticed that your subscriber discount results in a lower price than your code, so we\u2019ve applied the subscriber discount instead.");
            var dialogOptions = {
                position: {
                    my: "center",
                    at: "center",
                    of: __parent._dlg.element
                }
            };
            NuDialog.alert(title, body, dialogOptions);
            discountRescroll()
        }
        function blurEditor() {
            if (__entryFocused()) {
                Log.debug("discount: blurring editor for mobile safari's sake");
                unsubscribeEditorBlur();
                __entryFocused(false);
                subscribeEditorBlur()
            }
        }
        function subscribeEditorBlur() {
            editorFocusSub = __entryFocused.subscribe(handleEditorBlur)
        }
        function unsubscribeEditorBlur() {
            if (editorFocusSub)
                editorFocusSub.dispose()
        }
        var self = this;
        var __parent = parent;
        var __unitId = init.download_info.unitId;
        var __hasDiscountCodes = init.download_info.has_discounts;
        var __enabled = !!((init.download_info.has_discounts || init.download_info.subscriberDiscount) && (!init.download_info.freeDownload || init.download_info.paidDownload));
        var __checkedCode = "";
        var __verifyXHR = null;
        var __basePrice = init.download_info.basePrice;
        var __discountedPrice = null;
        var __discountID = null;
        var __discountType = null;
        var __state = ko.observable(null);
        var __defaultState = ko.observable("editing");
        if (__enabled)
            __state(__defaultState());
        var __defaultIsSubscriber = !!init.download_info.subscriberDiscount;
        var __subscriberDiscountVisible = ko.observable(init.download_info.subscriberDiscount);
        var __entryFocused = ko.observable(false);
        var __rawEntryText = ko.observable("");
        var __normalizedRawEntryText = ko.computed(function() {
            return $.trim(__rawEntryText()).toLowerCase()
        });
        var __codeEntry = ko.observable("");
        var __verifyError = ko.observable(null);
        var __showVerifyError = ko.computed(function() {
            return __verifyError() && __state() == "verified"
        });
        var __yumURL = ko.observable(null);
        var __subscriberDiscount = ko.observable(init.download_info.subscriberDiscount);
        var __subscriberDiscountPercent = ko.computed(function() {
            return __subscriberDiscount() ? __subscriberDiscount().percent : ""
        });
        var __defaultDiscount = ko.computed(function() {
            return __subscriberDiscount() || null
        });
        var editorFocusSub = null;
        self.enabled = __enabled;
        self.hasDiscountCodes = __hasDiscountCodes;
        self.state = __state;
        self.subscriberDiscountVisible = __subscriberDiscountVisible;
        self.entryFocused = __entryFocused;
        self.rawEntryText = __rawEntryText;
        self.codeEntry = __codeEntry;
        self.verifyError = __verifyError;
        self.showVerifyError = __showVerifyError;
        self.yumURL = __yumURL;
        self.subscriberDiscount = __subscriberDiscount;
        self.subscriberDiscountPercent = __subscriberDiscountPercent;
        self.checkDiscount = checkDiscount;
        self.looksLikeDownloadCode = looksLikeDownloadCode;
        self.discountVerified = discountVerified;
        self.discountID = discountID;
        self.discountType = discountType;
        self.unitPrice = getUnitPrice;
        self.basePrice = getBasePrice;
        self.discountedPrice = getDiscountedPrice;
        self.handleEditCode = handleEditCode;
        self.handleApplyCode = handleApplyCode;
        self.handleSwitchToCode = handleSwitchToCode;
        self.focusSwitchToCode = focusSwitchToCode;
        if (__enabled) {
            setupEventHandlers();
            applyInitialDiscount()
        }
        return self
    }
    function PricingVM(parent, data) {
        function displayPrice(amount) {
            if (amount === undefined || isNaN(parseFloat(amount)))
                return self.NOAMOUNT;
            var currencyData = CurrencyData.info[ClientPrefsObservable.currency()];
            var convertedAmount = amount * self.currencyRate();
            return TextFormat.currency(convertedAmount, currencyData, false, true, true)
        }
        var self = this;
        var isSetPrice = data.download_info.isSetPrice;
        var setPrice = data.download_info.setPrice;
        var minimumPrice = data.download_info.minimumPrice;
        var taxablePrice = isSetPrice ? setPrice : minimumPrice;
        var isPackage = data.download_info.package !== undefined;
        var isWillCall = data.is_will_call;
        var digitalVATEnabled = data.seller.digital_vat_enabled;
        var initialBuyerCountry = data.buyer_country;
        var currency = CurrencyData.info[data.seller.currency];
        self.isSetPrice = ko.observable(isSetPrice);
        self.subTotal = ko.observable(data.sub_total);
        self.userPrice = ko.observable(null);
        self.unitPrice = ko.observable(minimumPrice);
        self.maxPrice = ko.observable(data.seller.max_price);
        self.showAsTotal = ko.observable(data.show_as_total);
        self.hasTax = ko.observable(data.has_tax);
        self.shippingAndTax = ko.observable(data.shipping_and_tax);
        self.isGift = ko.observable(data.is_gift);
        self.giftAddress = ko.observable();
        self.updating = ko.observable();
        self.buyerCountrySetToUSWithZip = ko.computed(function() {
            return ClientPrefsObservable.country() === "US" && ClientPrefsObservable.usZip()
        });
        self.buyerCountrySet = ko.computed(function() {
            return ClientPrefsObservable.country() !== "US" || self.buyerCountrySetToUSWithZip()
        });
        self.differentCurrency = ko.computed(function() {
            return ClientPrefsObservable.currency() != data.seller.currency
        });
        self.hasDigitalVAT = ko.computed(function() {
            var buyerCountry;
            if (ClientPrefsObservable.isDefault())
                buyerCountry = initialBuyerCountry;
            else
                buyerCountry = ClientPrefsObservable.country();
            return digitalVATEnabled && Geo.isEUCountry(buyerCountry) && taxablePrice > 0
        });
        self.currencyRate = ko.computed(function() {
            if (self.differentCurrency())
                return CurrencyData.rates[data.seller.currency] / CurrencyData.rates[ClientPrefsObservable.currency()];
            else
                return 1
        });
        self.isInitialNYP = ko.computed(function() {
            return !self.isSetPrice() && !self.userPrice()
        });
        self.NOAMOUNT = "\x26nbsp;-\x26nbsp;-\x26nbsp;";
        self.buyerCountryDisplay = ko.computed(function() {
            var c;
            var g;
            if (self.giftAddress()) {
                g = self.giftAddress();
                var name = CountryList.getCountryName(g.country);
                c = TextFormat.noOrphan(name);
                if (g.country === "US" && g.usZip)
                    c += ", " + g.usState + " " + g.usZip
            } else {
                name = CountryList.getCountryName(ClientPrefsObservable.country());
                c = TextFormat.noOrphan(name);
                if (self.buyerCountrySetToUSWithZip())
                    c += ", " + ClientPrefsObservable.usState() + " " + ClientPrefsObservable.usZip()
            }
            return c
        });
        self.buyerCurrencyDisplay = ko.computed(function() {
            return ClientPrefsObservable.currency()
        });
        self.subTotalDisplay = ko.computed(function() {
            return displayPrice(self.subTotal())
        });
        self.shippingDisplay = ko.computed(function() {
            return self.updating() ? self.NOAMOUNT : displayPrice(self.shippingAndTax())
        });
        self.currencySummaryVisible = ko.computed(function() {
            return isPackage && isWillCall || self.differentCurrency() || self.hasDigitalVAT()
        });
        self.shippingSummaryVisible = ko.computed(function() {
            return isPackage && !isWillCall
        });
        self.extrasVisible = ko.computed(function() {
            return self.currencySummaryVisible() || self.shippingSummaryVisible()
        });
        self.subTotalVisible = ko.computed(function() {
            return self.differentCurrency() || isPackage && self.userPrice() !== null
        });
        self.convertLinkVisible = ko.computed(function() {
            return !self.extrasVisible() || !self.subTotalVisible()
        });
        self.minPriceCurrency = ko.computed(function() {
            var min = self.unitPrice();
            if (min === undefined || isNaN(min))
                return null;
            return TextFormat.currency(min, currency, false, true, false)
        });
        self.absoluteMinCurrency = ko.computed(function() {
            var absMin = parent._absoluteMinPrice || 0;
            return TextFormat.currency(absMin, currency, false, true, false)
        });
        self.maxPriceCurrency = ko.computed(function() {
            var max = self.maxPrice();
            if (max === undefined || isNaN(max))
                return null;
            return TextFormat.currency(max, currency, false, true, false)
        });
        var priceFieldOptions = {
            currency: currency,
            numericOnly: true,
            informal: true
        };
        self.display_price = ko.observable("");
        self.numeric_price = self.display_price.extend({
            price: priceFieldOptions,
            errorKeys: {}
        });
        self.validate_display_price = function() {
            self.display_price(self.numeric_price())
        }
        ;
        self.numeric_price.validate = function() {
            var price = parseFloat(self.numeric_price());
            var min = ko.utils.unwrapObservable(self.unitPrice());
            var max = ko.utils.unwrapObservable(self.maxPrice());
            self.numeric_price.error_key(isNaN(price) ? "nan" : price < min ? "tooLow" : price > 0 && price < parent._absoluteMinPrice ? "absoluteMin" : price > max ? "tooHigh" : null);
            self.validate_display_price();
            if (self.numeric_price.error_key())
                $("#userPrice").focus()
        }
        ;
        self.validate = function() {
            ko.eachObservable(self, function(vm, key, val) {
                if (val.validate)
                    val.validate()
            })
        }
        ;
        self.hasErrors = ko.computed(function() {
            var result = ko.eachObservable(self, function(vm, key, val) {
                return val.error_key && val.error_key()
            });
            return !!result
        });
        self.clearValidation = function() {
            ko.eachObservable(self, function(vm, key, val) {
                if (val.error_key)
                    val.error_key(null)
            })
        }
        ;
        self.updateShippingSummary = function(p) {
            self.subTotal(p.subTotal);
            self.hasTax(p.hasTax);
            self.shippingAndTax(p.shippingAndTax);
            self.showAsTotal(p.showAsTotal);
            if (p.giftCountry)
                self.giftAddress({
                    "country": p.giftCountry,
                    "countryName": p.giftCountryName,
                    "usState": p.giftUsState,
                    "usZip": p.giftUsZip
                });
            else
                self.giftAddress(null);
            self.updating(false)
        }
        ;
        self.showCountryPref = function(_, event) {
            data.dialog_class_object.show_country_pref(event)
        }
    }
    return function(init, parent, panel) {
        var self = this;
        this._init = init;
        this._parent = parent;
        this.panel = $(panel);
        this.panes = {
            discount: new CheckoutDiscountVM(parent,init),
            pricing: new PricingVM(parent,init)
        };
        this.isCardable = ko.observable(init.download_info.is_cardable);
        this.savedCard = ko.observable(Sidecart.saved_card);
        this.giftCardBalance = ko.observable(init.gift_card_balance);
        this.checkout = function() {
            parent.checkout()
        }
        ;
        this.addToCart = function() {
            parent.checkout("cart")
        }
        ;
        this.checkoutWithCard = function() {
            Sidecart.payment_pref_changed = true;
            Sidecart.payment_pref = "c";
            parent.checkout()
        }
        ;
        this.switchDefaultPaymentMethod = function() {
            parent.checkout("payment_method")
        }
        ;
        this.cartMode = ko.pureComputed(function() {
            if (Sidecart.cfgFlags.payment_preference !== true)
                return "classic";
            if (self.giftCardBalance())
                return "neutral";
            if (Sidecart.payment_pref == Sidecart.PAYMENTTYPE_PAYPAL)
                return "paypal";
            if (Sidecart.payment_pref == Sidecart.PAYMENTTYPE_CREDITCARD)
                return "creditcard";
            if (Sidecart.hasCardableItems(self.isCardable()))
                return "neutral";
            else
                return "classic"
        });
        this.isPaypal = ko.pureComputed(function() {
            return self.cartMode() === "paypal"
        });
        this.isClassic = ko.pureComputed(function() {
            return self.cartMode() === "classic"
        });
        this.isCreditCard = ko.pureComputed(function() {
            return self.cartMode() === "creditcard"
        });
        this.isNeutral = ko.pureComputed(function() {
            return self.cartMode() === "neutral"
        });
        this.isNotClassic = ko.pureComputed(function() {
            return !self.isClassic()
        });
        this.viewPackageOptions = function() {
            var packages_url = TralbumData.current.type == "track" ? TralbumData.album_url : null;
            if (packages_url)
                window.top.location.href = packages_url;
            else
                this._parent._dlg.dialog("close")
        }
        ;
        this.submit = function() {
            var successMsg = TM("Thanks, an email has been sent to {{email}} with your download instructions.", {
                email: Text.escapeHtml(ChargeEmail._address)
            });
            var failureMsg = TM("Oops. Something unexpected happened and your email was not sent. Sorry for the inconvenience. Please try again. If the problem persists, contact support@bandcamp.com.");
            var data = $("#fan_email").serialize();
            var dlg = self.panel.closest(".ui-dialog-content");
            var startTime = (new Date).getTime();
            $.post("/email_download", data).done(function(response) {
                if (Trackpipe.showXHRError(response))
                    return;
                var handle = function() {
                    if (response.ok) {
                        $("#download-panel-busy").hide();
                        $("#download-panel-complete").show().find(".msg").html(successMsg)
                    } else {
                        if (response.errors)
                            Log.debug("response.errors", response.errors);
                        $("#download-panel-busy").hide();
                        $("#download-panel-complete").show().find(".msg").html(failureMsg)
                    }
                };
                var elapsed = (new Date).getTime() - startTime;
                if (elapsed < 800) {
                    var remaining = 800 - elapsed;
                    setTimeout(handle, remaining)
                } else
                    handle()
            }).fail(function() {
                NuDialog.alert(TM("Network Error"), TM("There was a network error. Please try again."))
            });
            var $belowPricing = $(".below-pricing");
            $belowPricing.addClass("fade-out");
            setTimeout(function() {
                $("#fan_email").hide();
                $("#download-panel-busy").show();
                if (window.MediaView && MediaView.mode == "phone")
                    dlg.dialog("option", "position", "center")
            }, 200)
        }
        ;
        self.countryList = CountryList.allCountries();
        self.setOptionDisable = CountryList.disableSeparators()
    }
}(jQuery, ko);
var GiftPanelVM = function(details, panel) {
    var self = this;
    this.panel = $(panel);
    this.sender_name = ko.observable(details.sender_name || "");
    this.recipient_name = ko.observable(details.recipient_name || "");
    this.recipient_email = ko.observable(details.recipient_email || "");
    this.sender_note = ko.observable(details.sender_note || "");
    this.is_for_fan = details.is_for_fan;
    this.recipient_fan_id = details.recipient_fan_id;
    this.fixing_email = details.fixing_email;
    this.recipient_email_error = ko.observable(false);
    this.submitEnabled = ko.computed(function() {
        return $.trim(self.sender_name()).length > 0 && $.trim(self.recipient_name()).length > 0 && (self.is_for_fan || $.trim(self.recipient_email()).length > 0)
    });
    this.focus = function() {
        if (self.fixing_email)
            $('input[name\x3d"gift-recipient-email"]', self.panel).focus();
        else if (self.sender_name().length === 0 || self.is_for_fan)
            $('input[name\x3d"gift-sender-name"]', self.panel).focus();
        else
            $('input[name\x3d"gift-recipient-name"]', self.panel).focus()
    }
    ;
    var element = $("form", this.panel)[0];
    ko.utils.registerEventHandler(element, "submit", function(event) {
        if (self.submit(element, event) !== true)
            if (event.preventDefault)
                event.preventDefault();
            else
                event.returnValue = false
    });
    this.submit = function(data, event) {
        var details = self.validate();
        if (details)
            if (details.recipient_fan_id && details.recipient_email.length === 0)
                if (window.FacebookData)
                    FacebookUtils.correctSrollThen(false, TralbumDownload, TralbumDownload._begin, event, details);
                else
                    TralbumDownload._begin(event, details);
            else if (window.FacebookData)
                FacebookUtils.correctSrollThen(false, TralbumDownload, TralbumDownload.beginGiftConfirmation, event, details);
            else
                TralbumDownload.beginGiftConfirmation(event, details);
        return false
    }
    ;
    this.validate = function() {
        var emailRegex = /(^)([^\s\(\)"'\/><,@]+@\w([^\s\(\)"'\/><&,@]*\w)?\.\w[^\s\(\)"'\/><&,@]*\w)($)/;
        var details = {
            sender_name: $.trim(self.sender_name()).substring(0, 100),
            recipient_name: $.trim(self.recipient_name()).substring(0, 100),
            recipient_email: $.trim(self.recipient_email()).substring(0, 100),
            sender_note: self.sender_note().substring(0, 1E3),
            recipient_fan_id: self.recipient_fan_id
        };
        var ok = details.recipient_email.length === 0 && self.is_for_fan || emailRegex.test(details.recipient_email);
        if (!ok) {
            self.recipient_email_error(true);
            self.focus_on_error("#gift-recipient-email");
            return null
        }
        return details
    }
    ;
    this.focus_on_error = function(item) {
        var mediaMode = window.MediaView ? MediaView.mode : null;
        if (mediaMode == "phone") {
            var container = $(item)[0];
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: container.offset().top - 5
                })
            }, 10)
        }
        $("input", item).focus()
    }
    ;
    this.recipient_email.subscribe(function() {
        if (self.recipient_email_error())
            self.recipient_email_error(false)
    });
    this.pasteFixup = function(which) {
        var match = /(.+)<(.+@.+)>/.exec(self[which]());
        if (match) {
            var name = $.trim(match[1]);
            var email = $.trim(match[2]);
            if (which == "recipient_name") {
                self.recipient_name(name);
                self.recipient_email(email)
            } else {
                if (self.recipient_name().length === 0)
                    self.recipient_name(name);
                self.recipient_email(email)
            }
        }
    }
    ;
    this.pasteNameEvent = function(data, event) {
        setTimeout(function() {
            self.pasteFixup("recipient_name")
        }, 0);
        return true
    }
    ;
    this.pasteEmailEvent = function(data, event) {
        setTimeout(function() {
            self.pasteFixup("recipient_email")
        }, 0);
        return true
    }
};
var PaymentPref = function() {
    return {
        setTitle: function(title) {
            this._dlg.parent().find(".ui-dialog-title").text(title)
        },
        showChoosePaymentMethod: function() {
            var self = this;
            Sidecart.cancelCheckout();
            ChangePaymentMethodPanel.lockDimensions(this._dlg);
            this._dlg.renderLiquid("cart/change_payment_method", {
                savedCard: Sidecart.saved_card
            });
            setTimeout(function() {
                ChangePaymentMethodPanel.setupTransitions(self._dlg);
                var geometry = ChangePaymentMethodPanel.getDimensionsCSS();
                $.extend(geometry, ChangePaymentMethodPanel.getCenterDialogCSS());
                self.setTitle(ChangePaymentMethodPanel.title());
                ChangePaymentMethodPanel.setDialog(self._dlg);
                ChangePaymentMethodPanel.initVM();
                self._dlg.parent().css(geometry)
            }, 1);
            setTimeout(function() {
                ChangePaymentMethodPanel.dropTransitions(self._dlg)
            }, 200)
        },
        showPaymentPref: function() {
            var self = this;
            Sidecart.cancelCheckout();
            PaymentTypePanel.init(function(val) {
                Sidecart.payment_pref = val;
                Sidecart.payment_pref_changed = true
            });
            PaymentTypePanel.lockDimensions(this._dlg);
            this._dlg.renderLiquid("cart/payment_pref", {
                non_usd_cardable_items: Sidecart.hasNonUsdCardableItems()
            });
            setTimeout(function() {
                PaymentTypePanel.setupTransitions(self._dlg);
                var geometry = PaymentTypePanel.getDimensionsCSS();
                $.extend(geometry, PaymentTypePanel.getCenterDialogCSS());
                self.setTitle(PaymentTypePanel.title());
                PaymentTypePanel.setDialog(self._dlg);
                PaymentTypePanel.registerEvents();
                self._dlg.parent().css(geometry)
            }, 1)
        },
        zzz: null
    }
}();
var PurchaseNote = function() {
    return {
        setupPurchaseNote: function() {
            var self = this;
            $("#purchase-note-link a").click(function() {
                self.revealPurchaseNote();
                return false
            });
            $("#purchase-note-footer .cancel").click(function() {
                self.cancelPurchaseNote();
                return false
            })
        },
        revealPurchaseNote: function() {
            Dom.display("purchase-note-link", false);
            Dom.display("purchase-note-entry", true);
            $("#purchase-note-input").focus();
            addCharacterCountdownEventListeners(elt("purchase-note-input"), elt("purchase-note-countdown"), 300)
        },
        cancelPurchaseNote: function() {
            Dom.display("purchase-note-link", true);
            Dom.display("purchase-note-entry", false);
            $("#purchase-note-input").val("");
            if (window.MediaView && MediaView.mode == "phone")
                Dom.scrollToElement(this._dlg.dialog("widget"))
        },
        purchaseNote: function() {
            var purchase_note = $.trim($("#purchase-note-input").val());
            return purchase_note ? purchase_note : null
        }
    }
}();
var NotifyMe = function() {
    return {
        notifyMe: function() {
            var notify_me_elem = $("#notify-me");
            return notify_me_elem ? $(notify_me_elem).is(":checked") : null
        },
        notifyMeLabel: function() {
            var notify_me_label_elem = $("#notify-me-label");
            return notify_me_label_elem ? $(notify_me_label_elem).is(":checked") : null
        }
    }
}();
var ChargeEmail = function() {
    return {
        validate_dialog: function() {
            function focusElem(id) {
                if (!window.MediaView || MediaView.mode != "phone")
                    Dom.focus(id)
            }
            var address = U.trim(elt("fan_email_address").value);
            var email_rex = /(^)([^\s\(\)"\'/><,]+@\w([^\s\(\)"\'/><&,]*\w)?\.\w[^\s\(\)"\'/><&,]*\w)($)/;
            if (!email_rex.test(address)) {
                ChargeEmail.show_error(TM("Please enter a valid email address."));
                focusElem("fan_email_address");
                return false
            }
            ChargeEmail._address = address;
            if ($("#no_loc").val() != "1") {
                if (/^--/.test($("#fan_email_country").val())) {
                    ChargeEmail.show_error(TM("Please choose a country"));
                    focusElem("fan_email_country");
                    return false
                }
                var minchars = 1;
                if ($("#fan_email_country").val() == "United States")
                    minchars = 5;
                var postcode = elt("fan_email_postalcode").value;
                postcode = postcode.replace(" ", "", "g");
                if (postcode.length < minchars || postcode.length > 10) {
                    if (ChargeEmail._is_usa())
                        ChargeEmail.show_error(TM("Please enter a valid zip code."));
                    else
                        ChargeEmail.show_error(TM("Please enter a valid postal code."));
                    focusElem("fan_email_postalcode");
                    return false
                }
            }
            return true
        },
        update_dialog: function() {
            if (!/^--/.test($("#fan_email_country").val())) {
                var e = $("#fan_email_postalcode").attr({
                    "title": ChargeEmail._postcode_name(),
                    "pattern": ChargeEmail._postcode_entry_pattern()
                }).get(0);
                if (e)
                    FieldHints.updateHint(e)
            }
        },
        show_error: function(msg) {
            $("#fan_email_error").show().text(msg)
        },
        filter_returnkey: function() {
            return !(window.event && window.event.keyCode == 13)
        },
        _is_usa: function() {
            return $("#fan_email_country").val() == "US"
        },
        _postcode_name: function() {
            return ChargeEmail._is_usa() ? TM("zip code") : TM("postal code")
        },
        _postcode_entry_pattern: function() {
            return window.MediaView && MediaView.mode == "phone" && ChargeEmail._is_usa() ? "[0-9]*" : ".*"
        }
    }
}();
var TralbumDownload = function() {
    return {
        initialized: false,
        init: function() {
            Y.lang.augmentObject(TralbumDownload, WatchInput);
            Y.lang.augmentObject(TralbumDownload, PurchaseNote);
            Y.lang.augmentObject(TralbumDownload, NotifyMe);
            Y.lang.augmentObject(TralbumDownload, PaymentPref)
        },
        preloadImage: function(img_path) {
            var $el = $(".buy-dlg .preload");
            var $ins = $("\x3cdiv/\x3e");
            img_path = TemplGlobals.static_siteroot + img_path;
            $ins.renderLiquid("cart/_img_preload", {
                path: img_path
            });
            $el.append($ins)
        },
        begin: function(event, isGift, itemVM) {
            var cfgFlags = $("#pagedata").data("blob").cfg || {};
            this._itemVM = itemVM;
            var itemType = null;
            if (typeof itemVM !== "undefined")
                itemType = itemVM.type;
            else
                itemType = TralbumData.item_type;
            if (cfgFlags.BALLS_disable_digital_sales) {
                NuDialog.alert(TM("Music Sales"), TM("Digital music sales will be back shortly. Please try your purchase again in one hour. Sorry for the inconvenience!"));
                return
            }
            if (window.FacebookData) {
                var patchYui = false;
                if (isGift)
                    FacebookUtils.correctSrollThen(patchYui, TralbumDownload, TralbumDownload.beginGift, event);
                else
                    FacebookUtils.correctSrollThen(patchYui, TralbumDownload, TralbumDownload.beginInner, event)
            } else if (isGift)
                this.beginGift(event, null, {
                    type: itemType
                });
            else
                this.beginInner(event);
            if (Sidecart.paymentTypeDialogAllowed() || Sidecart.cart_items.length === 0) {
                this.preloadImage("/img/_sprite-bc-cc-cart-20160909.png");
                this.preloadImage("/img/_sprite-bc-cc-cart@2x-20160909.png")
            }
        },
        getGiftTitle: function(options) {
            if (options.type == "bundle")
                return TM("Gift - Digital Discography");
            else if (options.type == "track")
                return TM("Gift \u2013 Digital Track");
            else
                return TM("Gift \u2013 Digital Album")
        },
        beginGift: function(event, giftDetails, options) {
            var self = this;
            var pageData = $("#pagedata").data("blob") || {};
            giftDetails = giftDetails || {};
            options = options || {};
            if (pageData && pageData.cfg && !pageData.cfg.gifting)
                return;
            this.destroy();
            if (TralbumData.current.download_pref == TralbumData.FREE)
                return;
            if (!giftDetails.sender_name && pageData.fan_name)
                giftDetails.sender_name = pageData.fan_name;
            if (!giftDetails.recipient_name && pageData.gift_recipient_name)
                giftDetails.recipient_name = pageData.gift_recipient_name;
            if (pageData.gift_recipient_fan_id) {
                giftDetails.recipient_fan_id = pageData.gift_recipient_fan_id;
                giftDetails.is_for_fan = true;
                delete pageData.gift_recipient_fan_id
            }
            var element = $("\x3cdiv\x3e");
            var title = this.getGiftTitle(options);
            self._dlg = NuDialog.alertHTML(title, element, {
                dialogClass: "gift-dialog",
                width: "36em",
                buttons: []
            });
            element.renderLiquid("gift_panel", giftDetails);
            var position;
            if (window.FacebookData && window.FacebookData.positionInfo)
                position = [event.clientX, event.clientY];
            else
                position = {
                    my: "center center",
                    at: "center center",
                    of: window
                };
            this._dlg.dialog("option", "position", position);
            var giftPanelVM = new GiftPanelVM(giftDetails,"#gift-panel-vm");
            ko.applyBindings(giftPanelVM, giftPanelVM.panel[0]);
            if (!window.MediaView || MediaView.mode != "phone")
                giftPanelVM.focus();
            this._dlg.on("dialogclose", function() {
                self._dlg = null
            });
            return this._dlg
        },
        beginGiftConfirmation: function(event, giftDetails) {
            var self = this;
            this.destroy();
            if (window.FacebookData && window.FacebookData.positionInfo)
                self._dlg = NuDialog.showTemplate("gift_confirm", giftDetails, {
                    title: "Confirm Recipient Email",
                    width: "36em",
                    buttons: [],
                    position: [event.clientX, event.clientY]
                });
            else {
                var confirm_title = TM("Confirm Recipient Email");
                self._dlg = NuDialog.showTemplate("gift_confirm", giftDetails, {
                    title: confirm_title,
                    width: "36em",
                    buttons: []
                })
            }
            var container = $("#gift_confirm_form");
            var giftConfirm = {
                confirm: container.find("#confirm"),
                goBack: container.find("#goback")
            };
            giftConfirm.confirm.on("click", function(e) {
                self.destroy();
                if (window.FacebookData)
                    FacebookUtils.correctSrollThen(false, TralbumDownload, TralbumDownload._begin, event, giftDetails);
                else
                    self._begin(event, giftDetails)
            });
            giftConfirm.goBack.on("click", function(e) {
                self.destroy();
                giftDetails.fixing_email = true;
                if (window.FacebookData)
                    FacebookUtils.correctSrollThen(false, TralbumDownload, TralbumDownload.beginGift, event, giftDetails);
                else
                    self.beginGift(event, giftDetails)
            });
            this._dlg.on("dialogclose", function() {
                self._dlg = null
            });
            return this._dlg
        },
        beginInner: function(event) {
            var tralbum = this._itemVM || TralbumData.current;
            var dlg = null;
            if (PaymentData.paymentType != "email" && PaymentData.paymentDownloadPage) {
                if (tralbum.download_pref == TralbumData.FREE) {
                    window.top.location.href = PaymentData.paymentDownloadPage;
                    return null
                }
                var dlgOptions = {
                    title: TralbumData.current.type == "track" ? TM("Download Track") : TM("Download Album"),
                    buttons: {}
                };
                dlgOptions.buttons[TM("Re-Download")] = function() {
                    window.top.location.href = PaymentData.paymentDownloadPage
                }
                ;
                dlgOptions.buttons[TM("Buy Another")] = function() {
                    TralbumDownload._begin()
                }
                ;
                dlg = NuDialog.showTemplate("redownload_confirm", {
                    item_type: TralbumData.current.type,
                    payment_type: PaymentData.paymentType
                }, dlgOptions);
                return dlg
            }
            if (this.freeDownloadBailout())
                return null;
            return this._begin(event)
        },
        _begin: function(event, giftDetails) {
            this.destroy();
            var blob = $("#pagedata").data("blob") || {};
            this.localize_page = blob.localize_page || false;
            this.locale = blob.locale || null;
            var tralbum = this._itemVM || TralbumData.current;
            var isSetPrice = tralbum.is_set_price === 1;
            this._seller = blob.item_sellers[tralbum.selling_band_id];
            this._currency = CurrencyData.info[this._seller.currency];
            this._absoluteMinPrice = this._currency[tralbum.type === "album" ? "medium_min_price" : "small_min_price"];
            var dialogHasDiscounts = TralbumData.has_discounts && (isSetPrice || tralbum.minimum_price > 0);
            var requireEmail = tralbum.require_email && (PaymentData.paymentType != "email" || !PaymentData.paymentDownloadPage);
            var setPrice;
            var minimumPrice;
            if (isSetPrice) {
                setPrice = tralbum.set_price;
                minimumPrice = undefined;
                this.taxablePrice = setPrice
            } else {
                setPrice = undefined;
                if (tralbum.minimum_price)
                    minimumPrice = tralbum.minimum_price;
                else if (giftDetails)
                    minimumPrice = tralbum.type == "track" ? this._currency.small_min_price : this._currency.medium_min_price;
                else
                    minimumPrice = 0;
                this.taxablePrice = minimumPrice
            }
            var cfg = blob.cfg || {};
            var mediaMode = window.MediaView ? MediaView.mode : null;
            var dlInfo = {
                download_info: {
                    isSetPrice: tralbum.is_set_price == 1,
                    setPrice: setPrice,
                    minimumPrice: minimumPrice,
                    requireEmail: requireEmail,
                    offerEmail: this.offerEmailBailout(),
                    hasAudio: TralbumData.hasAudio,
                    freeDownload: tralbum.download_pref == TralbumData.FREE,
                    paidDownload: tralbum.download_pref == TralbumData.PAID,
                    prefix: false,
                    donation: false,
                    band: BandData,
                    use_group: Browser.type == "ie",
                    has_discounts: dialogHasDiscounts,
                    unitId: tralbum.type.charAt(0) + tralbum.id,
                    basePrice: setPrice || minimumPrice,
                    tralbum_count: tralbum.tralbum_count || 1,
                    has_tracks: tralbum.has_tracks,
                    xxx: null
                },
                id: tralbum.licensed_item_id || tralbum.id,
                type: tralbum.license_id ? "licensed_" + tralbum.type : tralbum.type,
                item_type: tralbum.type || "album",
                band: BandData,
                no_codes: true,
                dialog_class: "TralbumDownload",
                dialog_class_object: TralbumDownload,
                fan_id: window.BandFollow && BandFollow.fan_id,
                seller: this._seller,
                seller_currency_prefix: this._currency.prefix,
                shipping_show_min_price: !tralbum.is_set_price,
                buyer_currency: ClientPrefs.currency,
                cart_has_contents: Sidecart.cart_items.length > 0,
                payment_pref: Sidecart.payment_pref,
                saved_card: Sidecart.saved_card,
                media_mode: mediaMode,
                platform: Browser.platform,
                is_mobile_app_compatible: Browser.mobile_app_compatible,
                cfg: cfg,
                is_device: Browser.platform_closed || Browser.platform == "android",
                platform_name: Browser.platform_name,
                show_notify_me: tralbum.download_pref != TralbumData.FREE,
                show_notify_me_label: !blob.fan_follows_label,
                options_footer: this.showPurchaseOptionsFooter && this.generatePackageOptionsStr(TralbumData.packages, TralbumData.is_bonus),
                has_digital_vat: this.hasDigitalVAT(),
                is_gift: !!giftDetails,
                gift_card_balance: blob.gift_card_balance,
                gift_card_redeem_link: TralbumDownload.giftCardRedeemLink(!!giftDetails, tralbum.type === "bundle" ? "bfd" : null),
                buyer_country: this.buyerCountry()
            };
            dlInfo.download_info.is_cardable = Sidecart.isCardable($.extend({}, dlInfo.download_info, {
                currency: this._currency.symbol
            }));
            this.showPurchaseOptionsFooter = false;
            this.subTotal = isSetPrice ? setPrice : minimumPrice;
            dlInfo.sub_total = this.subTotal;
            dlInfo.shipping_disp_subtotal = TextFormat.currency(this.converted_subtotal(this.subTotal), CurrencyData.info[ClientPrefs.currency], false, true, true);
            var element = $("\x3cdiv\x3e");
            var panelTitle = "";
            if (tralbum.type == "bundle")
                panelTitle = giftDetails ? TM("Gift: Full Digital Discography") : TM("Full Digital Discography");
            else if (tralbum.type == "track")
                panelTitle = giftDetails ? TM("Gift: Digital Track") : TM("Digital Track");
            else
                panelTitle = giftDetails ? TM("Gift: Digital Album") : TM("Digital Album");
            this._dlg = NuDialog.alertHTML(panelTitle, element, {
                width: "35.5em",
                buttons: [],
                dialogClass: "nu-dialog no-padding"
            });
            element.renderLiquid("download_panel", dlInfo);
            this.recordBuyDialogEvent(this.locale, isSetPrice, minimumPrice, tralbum.download_pref);
            var position;
            if (window.FacebookData && window.FacebookData.positionInfo)
                position = [event.clientX, event.clientY];
            else
                position = {
                    my: "center center",
                    at: "center center",
                    of: window
                };
            var downloadPanelVM = new DownloadPanelVM(dlInfo,this,"#download-panel-vm");
            ko.applyBindings(downloadPanelVM, downloadPanelVM.panel[0]);
            this._dlg.dialog("option", "position", position);
            this.watchInput("userPrice");
            this._discountVM = downloadPanelVM.panes.discount;
            this._pricingVM = downloadPanelVM.panes.pricing;
            this.setupPurchaseNote();
            var self = this;
            if (!this.country_pref)
                this.country_pref = CountryPrefPanel.make(function(new_country) {
                    self.oncountry_change(new_country)
                });
            if (!window.MediaView || MediaView.mode != "phone")
                Dom.select("userPrice", true);
            if ($("#email-section:visible").length > 0)
                ChargeEmail.update_dialog();
            if (elt("fan_email"))
                FieldHints.init("fan_email");
            this._dlg.on("dialogclose", function() {
                self.country_pref.hide();
                self._dlg = null
            });
            if (giftDetails)
                self._dlg.data("gift_details", giftDetails);
            return this._dlg
        },
        hasDigitalVAT: function() {
            return this._seller.digital_vat_enabled && ClientPrefsObservable.isEU() && this.taxablePrice > 0
        },
        buyerCountry: function() {
            var buyerLocation = $("#pagedata").data("blob").buyer_location;
            return buyerLocation === undefined ? null : buyerLocation.country_code
        },
        filter_returnkey: function(e) {
            if (e && e.keyCode == 13) {
                if (e.target && e.target.id == "purchase-note-input")
                    return true;
                TralbumDownload.checkout("cart");
                return false
            }
            return true
        },
        grab_price_from_dialog: function() {
            var price;
            var tralbum = this._itemVM || TralbumData.current;
            this.validPrice = true;
            if (tralbum.download_pref == TralbumData.PAID) {
                if (tralbum.is_set_price)
                    price = this._discountVM.unitPrice();
                else {
                    price = Form.validate.parsePrice(elt("userPrice").value);
                    var unitPrice = this._discountVM.unitPrice();
                    this._pricingVM.unitPrice(unitPrice);
                    this.validPrice = !(isNaN(price) || price < unitPrice);
                    if (this.validPrice)
                        this._pricingVM.userPrice(price);
                    else {
                        price = unitPrice;
                        this._pricingVM.userPrice(null)
                    }
                }
                this.subTotal = price;
                this._pricingVM.subTotal(price)
            }
            return this.validPrice ? price : undefined
        },
        inputChanged: function(ignore) {
            var amt = this.grab_price_from_dialog();
            var self = this;
            var dlStep = "paypal";
            if (amt === 0) {
                var needEmail = TralbumData.current.require_email_0 && (PaymentData.paymentType != "email" || !PaymentData.paymentDownloadPage) || this.offerEmailBailout();
                dlStep = needEmail ? "email" : "download"
            }
            var $belowPricing = $(".below-pricing");
            var $paymentNagSection = $(".payment-nag-section");
            var currentlyShowingPaymentNag = $paymentNagSection.is(":visible");
            var taskQueue = new TaskQueue;
            if (amt > 0 || amt === undefined)
                if (currentlyShowingPaymentNag) {
                    $belowPricing.addClass("fade-out");
                    taskQueue.addTask(function() {
                        $(".payment-nag-section").hide();
                        $("#email-section").hide();
                        $("#downloadButtons_email").hide();
                        $("downloadFinalStep_email").hide();
                        $(".purchase-note-section").show();
                        $(".format-section").show();
                        $(".buttons-section").show();
                        $(".notify-me-section").show();
                        $(".grey-link").removeClass("grey-link");
                        Dom.display(["downloadButtons_paypal", "downloadFinalStep_paypal", "download-aftercheckout"], dlStep == "paypal");
                        Dom.display(["downloadButtons_download", "downloadFinalStep_download"], dlStep == "download");
                        Dom.display(["notify-me-section", "notify-me-label-section"], dlStep == "paypal")
                    }, 200);
                    taskQueue.addTask(function() {
                        $belowPricing.removeClass("fade-out")
                    }, 200)
                } else {
                    $(".purchase-note-section").show();
                    $(".format-section").show();
                    $(".buttons-section").show();
                    $(".notify-me-section").show()
                }
            else if (amt === 0 && !currentlyShowingPaymentNag) {
                $belowPricing.addClass("fade-out");
                taskQueue.addTask(function() {
                    self.cancelPurchaseNote();
                    $(".purchase-note-section, .format-section, .buttons-section, .notify-me-section").hide();
                    Dom.display(["downloadButtons_paypal", "downloadFinalStep_paypal", "download-aftercheckout"], dlStep == "paypal");
                    Dom.display(["downloadButtons_download", "downloadFinalStep_download"], dlStep == "download");
                    Dom.display(["notify-me-section", "notify-me-label-section"], dlStep == "paypal");
                    $paymentNagSection.show()
                }, 200);
                taskQueue.addTask(function() {
                    $belowPricing.removeClass("fade-out")
                }, 200)
            }
            taskQueue.run();
            if (dlStep == "email") {
                ChargeEmail.update_dialog();
                FieldHints.jiggleHint("fan_email_address");
                FieldHints.jiggleHint("fan_email_postalcode")
            }
            if (this.isNYP() && !this._pricingVM.hasErrors())
                this._pricingVM.clearValidation()
        },
        showButtonsSection: function(event) {
            var needEmail = TralbumData.current.require_email_0 && (PaymentData.paymentType != "email" || !PaymentData.paymentDownloadPage) || this.offerEmailBailout();
            if (needEmail)
                Dom.display(["email-section", "downloadButtons_email", "downloadFinalStep_email"], true);
            $(".buttons-section").show();
            event.target.className = "grey-link"
        },
        updateCurrencyDisplay: function() {
            this.grab_price_from_dialog()
        },
        checkout: function(how) {
            if (!this._dlg)
                return;
            var self = this;
            var price = null;
            if (!this._discountVM.discountVerified())
                return;
            if (this.isNYP()) {
                this._pricingVM.validate();
                if (this._pricingVM.hasErrors())
                    return;
                price = Form.validate.parsePrice(elt("userPrice").value);
                if (price === 0) {
                    $assert(TralbumData.current.minimum_price === 0);
                    if (!this.freeDownloadBailout(true))
                        this.submitEmail();
                    return
                }
            } else if (!this._itemVM && TralbumData.current.download_pref == TralbumData.FREE) {
                if (this.offerEmailBailout() || !this.freeDownloadBailout(false)) {
                    this.submitEmail();
                    return
                }
                $assert(false, "Unexpected: should have already bailed out to a free/email download");
                return
            }
            var args = {};
            var tralbum = self._itemVM || TralbumData.current;
            args.checkout_now = how != "cart" && how != "payment_method";
            args.item_title = tralbum.title;
            args.item_title2 = null;
            args.item_type = tralbum.type ? tralbum.type[0] : "a";
            args.item_id = tralbum.id;
            args.ip_country_code = Identities.ip_country_code || $("#pagedata").data("blob").user_territory;
            args.associated_license_id = tralbum.licensed_item_id;
            args.preorder = tralbum.is_preorder;
            args.has_download = true;
            args.band_id = BandData.id;
            args.artist_name = tralbum.artist;
            args.unit_price = price || this._discountVM.unitPrice();
            args.currency = this._currency.symbol;
            args.quantity = 1;
            args.option_id = null;
            args.option_name = null;
            args.discount_id = this._discountVM.discountID();
            args.discount_type = this._discountVM.discountType();
            args.url = tralbum.url;
            args.purchase_note = this.purchaseNote();
            args.notify_me = this.notifyMe();
            args.notify_me_label = this.notifyMeLabel();
            args.releases = args.item_type == "b" && tralbum.tralbum_count ? tralbum.tralbum_count : null;
            var gift_details = self._dlg ? self._dlg.data("gift_details") : null;
            if (gift_details) {
                args.is_gift = true;
                args.gift_sender_name = gift_details.sender_name;
                if (gift_details.recipient_fan_id && gift_details.recipient_email.length === 0)
                    args.gift_recipient_fan_id = gift_details.recipient_fan_id;
                else
                    args.gift_recipient_email = gift_details.recipient_email;
                args.gift_recipient_name = gift_details.recipient_name;
                args.gift_sender_note = gift_details.sender_note
            }
            args.art_id = tralbum.art_id;
            Sidecart.add_to_cart(args);
            if (args.checkout_now && !Sidecart.paymentTypeDialogAllowed())
                PleaseWaitPanel.show(false);
            if (args.checkout_now === false && how === "payment_method")
                this.showChoosePaymentMethod();
            else if (!Sidecart.paymentTypeDialogAllowed() || args.checkout_now === false)
                this.destroy();
            else if (Sidecart.gift_balance) {
                this.destroy();
                var params = {
                    client_id: ClientID,
                    return_url: window.TralbumData && TralbumData.url || location.href,
                    from: "dialog"
                };
                if (window.MediaView && MediaView.mode == "phone")
                    params.mob = "1";
                window.top.location.href = siteroot_https + "/cart/checkout_start?" + Url.joinQuery(params)
            } else
                this.showPaymentPref();
            return
        },
        recordBuyDialogEvent: function(locale, isSetPrice, minPrice, downloadPref) {
            var pricingType;
            var abtestData;
            if (downloadPref == TralbumData.PAID) {
                pricingType = isSetPrice ? "fixed" : minPrice > 0 ? "nyp_nonzero_min" : "nyp_zero_min";
                locale = locale || "en";
                var country = this.buyerCountry() || "US";
                var stats = {
                    kind: "buy dialog",
                    payment_pref: Sidecart.payment_pref,
                    pricing_type: pricingType,
                    locale: locale,
                    country: country
                };
                abtestData = $("#abt-album-1").data("abtest");
                if (abtestData) {
                    stats.abt_name = abtestData.test_name;
                    stats.abt_bucket = abtestData.bucket;
                    stats.abt_variant_id = abtestData.variant_id
                }
                Stats.record(stats)
            }
        },
        isNYP: function() {
            if (this._itemVM)
                return !this._itemVM.is_set_price;
            else
                return TralbumData.current.download_pref == TralbumData.PAID && !TralbumData.current.is_set_price
        },
        submitEmail: function() {
            if (!ChargeEmail.validate_dialog() || !this._dlg)
                return;
            $("form", this._dlg).submit()
        },
        generatePackageOptionsStr: function(packages, viaSubscription) {
            var optionStr = null;
            var hasCD = false;
            var hasVinyl = false;
            var hasCassette = false;
            if (packages)
                $.each(packages, function(index, item) {
                    switch (item.type_id) {
                    case 1:
                        if (!hasCD)
                            hasCD = true;
                        break;
                    case 2:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                        if (!hasVinyl)
                            hasVinyl = true;
                        break;
                    case 3:
                        if (!hasCassette)
                            hasCassette = true;
                        break
                    }
                });
            if (hasCD && !hasVinyl && !hasCassette)
                optionStr = viaSubscription ? TM("Also available on CD or via subscription.") : TM("Also available on CD.");
            else if (!hasCD && hasVinyl && !hasCassette)
                optionStr = viaSubscription ? TM("Also available on vinyl or via subscription.") : TM("Also available on vinyl.");
            else if (!hasCD && !hasVinyl && hasCassette)
                optionStr = viaSubscription ? TM("Also available on cassette or via subscription.") : TM("Also available on cassette.");
            else if (hasCD && hasVinyl && !hasCassette)
                optionStr = viaSubscription ? TM("Also available on CD, vinyl or via subscription.") : TM("Also available on CD and vinyl.");
            else if (hasCD && !hasVinyl && hasCassette)
                optionStr = viaSubscription ? TM("Also available on CD, cassette or via subscription.") : TM("Also available on CD and cassette.");
            else if (!hasCD && hasVinyl && hasCassette)
                optionStr = viaSubscription ? TM("Also available on vinyl, cassette or via subscription.") : TM("Also available on vinyl and cassette.");
            else if (hasCD && hasVinyl && hasCassette)
                optionStr = viaSubscription ? TM("Also available on CD, vinyl, cassette or via subscription.") : TM("Also available on CD, vinyl, cassette.");
            else
                optionStr = viaSubscription ? TM("Also available via subscription.") : "";
            return optionStr
        },
        offerEmailBailout: function() {
            var tralbum = TralbumData.current;
            var closed = Browser.platform_closed;
            var isPhone = Browser.media_mode == "phone";
            return (closed || isPhone) && (tralbum.download_pref == TralbumData.FREE && !tralbum.require_email || tralbum.download_pref == TralbumData.PAID && !tralbum.is_set_price && tralbum.minimum_price === 0 && !tralbum.require_email_0)
        },
        freeDownloadBailout: function(yesZeroWasEntered) {
            var tralbum = this._itemVM || TralbumData.current;
            var requireEmail;
            if (this.offerEmailBailout())
                return false;
            if (tralbum.download_pref == TralbumData.PAID) {
                if (tralbum.is_set_price || tralbum.minimum_price > 0 || !yesZeroWasEntered)
                    return false;
                requireEmail = tralbum.require_email_0
            } else if (tralbum.download_pref == TralbumData.FREE)
                requireEmail = tralbum.require_email;
            else {
                $assert(false, "freeDownloadBailout: should not be making this check on this tralbum (2)");
                return false
            }
            if (requireEmail) {
                if (PaymentData.paymentType == "email" && PaymentData.paymentDownloadPage) {
                    this.navigate(PaymentData.paymentDownloadPage);
                    return true
                }
            } else if (TralbumData.freeDownloadPage) {
                this.navigate(TralbumData.freeDownloadPage);
                return true
            } else
                $assert(false, "freeDownloadBailout: missing pure-free download url");
            return false
        },
        navigate: function(url) {
            if (window.FacebookData)
                url = url + "\x26orig\x3df" + BandData.id;
            window.top.location.href = url
        },
        destroy: function() {
            if (this._dlg) {
                this._dlg.dialog("close");
                $assert(this._dlg === null)
            }
        },
        roundtrip: function(event, params) {
            if (event)
                Y.util.Event.preventDefault(event);
            Y.util.Connect.asyncRequest("POST", "/download_page_cb", this.roundtrip_cb, Url.joinQuery({
                "url": params.url
            }))
        },
        roundtrip_cb: {
            success: function(o) {
                var response = JSON.parse(o.responseText);
                if (response.ok && response.url)
                    window.top.location.href = response.url;
                else {
                    NuDialog.alert(TM("Download"), TM("Sorry, there was an unexpected problem. Please reload this page and try again."));
                    Log.info("download_page_cb failure: status: " + o.status + "; statusText: " + o.statusText)
                }
            },
            failure: function(o) {
                NuDialog.alert(TM("Download"), TM("Sorry, there was an unexpected problem. Please reload this page and try again."));
                Log.info("download_page_cb failure: status: " + o.status + "; statusText: " + o.statusText)
            }
        },
        show_currency_summary: function(event) {
            Y.util.Event.stopEvent(event);
            this.country_pref.show(elt("currencyToggle"), false)
        },
        show_country_pref: function(ev) {
            var target = ev.target || ev.srcElement;
            Y.util.Event.preventDefault(ev);
            this.country_pref.show(target, true)
        },
        oncountry_change: function(new_country) {
            if (this._dlg) {
                this.country_pref.hide();
                this.request({
                    req: "country3",
                    country: new_country.country,
                    us_zip: new_country.us_zip
                })
            }
        },
        converted_subtotal: function(subtotal) {
            if (this._currency.symbol == ClientPrefs.currency)
                return subtotal;
            else {
                var rate = CurrencyData.rates[this._currency.symbol] / CurrencyData.rates[ClientPrefs.currency];
                return subtotal * rate
            }
        },
        request: function(data) {
            var self = this;
            var cb = {
                success: function(o) {
                    self.req_success(o)
                },
                failure: function(o) {
                    self.req_failure(o)
                }
            };
            data.client_id = ClientID;
            if (this.localize_page)
                data.localize_page = this.localize_page;
            var d = Url.joinQuery(data);
            Y.util.Connect.asyncRequest("POST", "/cart/cb", cb, d)
        },
        req_success: function(o) {
            var data = JSON.parse(o.responseText);
            if (data.error)
                Log.debug("Cart ERROR");
            if (data.req == "country3")
                this.req_country3(data)
        },
        req_failure: function(o) {},
        req_country3: function(data) {},
        handleActionParam: function() {
            var action = HiddenParams["action"];
            var buyID = HiddenParams["buy_id"];
            var packageIndex = parseInt(HiddenParams["no"]) || 0;
            var tralbum = TralbumData.current;
            if (!tralbum)
                return;
            if ((action === "download" || action === "buy" || action === "gift") && !TralbumData.hasAudio)
                if (TralbumData.item_type === "track" || TralbumData.item_type === "album" && !TralbumData.is_preorder)
                    if (!TralbumData.packages || TralbumData.packages && TralbumData.packages.length < 1)
                        return;
            if ((action === "download" || action === "buy") && !tralbum.download_pref)
                if (TralbumData.packages && TralbumData.packages.length > 0) {
                    Log.debug("action\x3ddownload but not downloadable; showing package buy dialog instead.");
                    action = "package"
                } else {
                    Log.debug("action\x3ddownload but not downloadable; ignoring.");
                    action = null
                }
            if ((action === "download" || action === "buy") && !buyID && tralbum.type === "track" && tralbum.album_id) {
                Log.debug("action\x3ddownload for track-of-album; not showing dialog.");
                action = null
            }
            if (action === "package" && !TralbumData.packages) {
                Log.warn("action\x3dpackage but there are no packages; ignoring.");
                action = null
            }
            var isGift = action === "gift";
            if (action === "buy" || action === "gift")
                if (buyID) {
                    Log.debug("action\x3dbuy with buy_id\x3d" + buyID);
                    var id = parseInt(buyID.substr(1));
                    switch (buyID[0]) {
                    case "b":
                        if (!window.buyFullDiscographyVM) {
                            Log.warn("action\x3dbuy buy_id\x3d" + buyID + " but no buyFullDiscographyVM on page");
                            action = null
                        } else
                            action = "bfd";
                        break;
                    case "a":
                    case "t":
                        if (id !== tralbum.id) {
                            Log.warn("action\x3dbuy buy_id\x3d" + buyID + " mismatches current tralbum; ignoring");
                            action = null
                        } else
                            action = "download";
                        break;
                    case "p":
                        if (!TralbumData.packages) {
                            Log.warn("action\x3dbuy buy_id\x3d" + buyID + " specified but TralbumData.packages is missing. Bailing.");
                            action = null
                        } else {
                            packageIndex = -1;
                            for (var i = 0; i < TralbumData.packages.length; i++)
                                if (TralbumData.packages[i].id === id) {
                                    packageIndex = i;
                                    break
                                }
                            if (packageIndex === -1) {
                                Log.warn("action\x3dbuy buy_id\x3d" + buyID + " package id not found; ignoring");
                                action = null
                            } else
                                action = "package"
                        }
                        break;
                    default:
                        Log.warn("Unknown buy_id type prefix: " + buyID)
                    }
                } else if (action === "gift" && TralbumData.packages && TralbumData.packages.length > 0)
                    return;
                else {
                    Log.debug("action\x3dbuy without a buy_id; showing digital buy dialog");
                    action = "download"
                }
            switch (action) {
            case "download":
                TralbumDownload.showPurchaseOptionsFooter = true;
                TralbumDownload.begin(null, isGift);
                break;
            case "package":
                if (packageIndex < 0 || packageIndex >= TralbumData.packages.length)
                    packageIndex = 0;
                PackageOrder.begin(packageIndex, isGift);
                break;
            case "bfd":
                TralbumDownload.begin(null, isGift, window.buyFullDiscographyVM);
                break;
            case "buy_digital":
                if (!TralbumData.packages || TralbumData.packages.length === 0) {
                    TralbumDownload.showPurchaseOptionsFooter = true;
                    TralbumDownload.begin(null, isGift)
                }
                break;
            case null:
                break;
            default:
                Log.warn("Unexpected action param: " + action)
            }
        },
        giftCardRedeemLink: function(isGift, buyID) {
            var item = TralbumData.current;
            var params = {
                resume_id: item.type[0] + item.id,
                resume_action: isGift ? "gift" : "buy"
            };
            if (buyID)
                params.resume_buy_id = buyID;
            return Url.addQueryParams(siteroot_https + "/redeem", params)
        },
        zzz: null
    }
}();
var PackageOrder = function() {
    return {
        init: function() {
            Y.lang.augmentObject(PackageOrder, WatchInput);
            Y.lang.augmentObject(PackageOrder, PurchaseNote);
            Y.lang.augmentObject(PackageOrder, NotifyMe);
            Y.lang.augmentObject(PackageOrder, PaymentPref)
        },
        begin: function(packageIndex, isGift) {
            var cfgFlags = $("#pagedata").data("blob").cfg || {};
            if (cfgFlags.BALLS_disable_merch_sales) {
                NuDialog.alert(TM("Merch Sales"), TM("Merchandise sales will be back shortly. Please try your purchase again in one hour. Sorry for the inconvenience!"));
                return
            }
            if ($("#pagedata").data("blob").notify_me_data)
                window.NotifyMeData = $("#pagedata").data("blob").notify_me_data;
            if (window.FacebookData) {
                var patchYui = false;
                if (isGift)
                    FacebookUtils.correctSrollThen(patchYui, PackageOrder, PackageOrder.beginGift, packageIndex);
                else
                    FacebookUtils.correctSrollThen(patchYui, PackageOrder, PackageOrder._begin, packageIndex)
            } else if (isGift)
                this.beginGift(packageIndex);
            else
                this._begin(packageIndex)
        },
        getGiftTitle: function(options) {
            return Templ.render("_tralbum_physical_gift_title", options)
        },
        beginGift: function(packageIndex, giftDetails, options) {
            var self = this;
            var tralbumData = TralbumData.packages[packageIndex];
            var pageData = $("#pagedata").data("blob") || {};
            giftDetails = giftDetails || {};
            options = options || {
                merch_title: Text.escapeHtml(Text.truncate(tralbumData.title, 38, "...")),
                merch_type: tralbumData.type_id
            };
            if (pageData && pageData.cfg && (!pageData.cfg.physical_gifting || pageData.cfg.BALLS_disable_physical_gifting))
                return;
            self.destroy();
            if (!giftDetails.sender_name && pageData.fan_name)
                giftDetails.sender_name = pageData.fan_name;
            if (!giftDetails.recipient_name && pageData.gift_recipient_name)
                giftDetails.recipient_name = pageData.gift_recipient_name;
            giftDetails.is_us_buyer = Geo.isUSBuyer();
            if (!giftDetails.shipping_country_code)
                giftDetails.shipping_country_code = Geo.getDefaultCountryCode();
            if (pageData.gift_recipient_fan_id) {
                giftDetails.recipient_fan_id = pageData.gift_recipient_fan_id;
                delete pageData.gift_recipient_fan_id
            }
            giftDetails._hide_cancel = true;
            giftDetails._continue_text = TM("Continue");
            if (pageData.cfg)
                giftDetails._use_zip_regex = pageData.cfg.physical_gifting_zip_regex;
            var element = $("\x3cdiv\x3e");
            self._dlg = NuDialog.alertHTML(this.getGiftTitle(options), element, {
                width: "35.5em",
                buttons: [],
                dialogClass: "gift-dialog"
            });
            element.renderLiquid("physical_gift_panel", giftDetails);
            var position;
            if (window.FacebookData && window.FacebookData.positionInfo)
                position = [event.clientX, event.clientY];
            else
                position = {
                    my: "center center",
                    at: "center center",
                    of: window
                };
            this._dlg.dialog("option", "position", position);
            var physicalGiftVM = new PhysicalGiftViewModel(giftDetails,function(newGiftDetails) {
                if (window.FacebookData)
                    FacebookUtils.correctSrollThen(false, PackageOrder, PackageOrder.beginGiftConfirmation, packageIndex, newGiftDetails);
                else
                    PackageOrder.beginGiftConfirmation(packageIndex, newGiftDetails)
            }
            );
            ko.applyBindings(physicalGiftVM, $("#physical-gift-vm")[0]);
            this._dlg.on("dialogclose", function() {
                self._dlg = null
            });
            return this._dlg
        },
        beginGiftConfirmation: function(packageIndex, giftDetails) {
            var self$$0 = this;
            this.destroy();
            giftDetails.shipping_address_lines = Geo.localizeAddressFormat({
                street: giftDetails.shipping_street,
                street_2: giftDetails.shipping_street_2,
                city: giftDetails.shipping_city,
                state: giftDetails.shipping_state,
                zip: giftDetails.shipping_zip,
                country_code: giftDetails.shipping_country_code,
                country_name: giftDetails.shipping_country_name
            });
            if (window.FacebookData && window.FacebookData.positionInfo)
                self$$0._dlg = NuDialog.showTemplate("physical_gift_confirm", giftDetails, {
                    title: "Confirm Recipient Details",
                    width: "35.5em",
                    buttons: [],
                    position: [event.clientX, event.clientY]
                });
            else {
                var confirm_title = TM("Confirm Recipient Details");
                self$$0._dlg = NuDialog.showTemplate("physical_gift_confirm", giftDetails, {
                    title: confirm_title,
                    width: "35.5em",
                    buttons: []
                })
            }
            var ConfirmViewModel = function() {
                var self = this;
                self.submit = function() {
                    if (window.FacebookData)
                        FacebookUtils.correctSrollThen(false, PackageOrder, PackageOrder._begin, packageIndex, giftDetails);
                    else
                        PackageOrder._begin(packageIndex, giftDetails)
                }
                ;
                self.cancel = function() {
                    if (window.FacebookData)
                        FacebookUtils.correctSrollThen(false, PackageOrder, PackageOrder.beginGift, packageIndex, giftDetails);
                    else
                        PackageOrder.beginGift(packageIndex, giftDetails)
                }
            };
            var confirmViewModel = new ConfirmViewModel;
            ko.applyBindings(confirmViewModel, $("#physical-confirm-vm")[0]);
            this._dlg.on("dialogclose", function() {
                self$$0._dlg = null
            });
            return this._dlg
        },
        _begin: function(packageIndex, giftDetails) {
            this.destroy();
            var blob = $("#pagedata").data("blob") || {};
            this.localize_page = blob.localize_page || false;
            this.locale = blob.locale || null;
            var pkg = TralbumData.packages[packageIndex];
            this._package = pkg;
            this._seller = blob.item_sellers[pkg.selling_band_id];
            this._currency = CurrencyData.info[this._seller.currency];
            this._absoluteMinPrice = this._currency.medium_min_price;
            var isSetPrice = pkg.is_set_price == 1;
            var dialogHasDiscounts = BandData.has_discounts;
            var isWillCall = pkg.shipping_exception_mode && pkg.shipping_exception_mode == "w";
            var artistServiceDiscount = blob.artist_service_merch_discounts && blob.artist_service_merch_discounts[pkg.id];
            var subscriptionsByBandId = blob.fan_tralbum_data && blob.fan_tralbum_data.subscriptions_by_band_id || {};
            var subscriberDiscount = artistServiceDiscount && (subscriptionsByBandId[pkg.band_id] && artistServiceDiscount.band || subscriptionsByBandId[pkg.selling_band_id] && artistServiceDiscount.selling_band);
            var dlInfo = {
                download_info: {
                    isSetPrice: isSetPrice,
                    setPrice: pkg.price,
                    minimumPrice: pkg.price,
                    package: pkg,
                    hasAudio: TralbumData.hasAudio,
                    package_title: pkg.title,
                    encoding_name: "none",
                    show_options: !!pkg.options_title,
                    options_title: pkg.options_title,
                    options_data: pkg.options,
                    paidDownload: 2,
                    prefix: false,
                    donation: false,
                    band: BandData,
                    certified_seller: !!pkg.certified_seller,
                    use_group: Browser.type == "ie",
                    has_discounts: dialogHasDiscounts,
                    subscriberDiscount: subscriberDiscount,
                    unitId: "p" + pkg.id,
                    basePrice: pkg.price,
                    xxx: null
                },
                id: TralbumData.current.id,
                type: TralbumData.current.type,
                item_type: TralbumData.current.type == "track" ? "track" : "album",
                band: BandData,
                no_codes: true,
                dialog_class: "PackageOrder",
                dialog_class_object: PackageOrder,
                fan_id: window.BandFollow && BandFollow.fan_id,
                seller: this._seller,
                seller_currency_prefix: this._currency.prefix,
                shipping_country_name: ClientPrefs.country_name,
                buyer_currency: ClientPrefs.currency,
                shipping_show_subtotal: ClientPrefs.currency != this._currency.symbol,
                shipping_disp_subtotal: this.NO_AMT,
                shipping_has_tax: false,
                cart_has_shipping: Sidecart.has_shipping,
                payment_pref: Sidecart.payment_pref,
                saved_card: Sidecart.saved_card,
                cart_has_contents: Sidecart.cart_items.length > 0,
                media_mode: window.MediaView ? MediaView.mode : null,
                platform: Browser.platform,
                is_mobile_app_compatible: Browser.mobile_app_compatible,
                cfg: blob.cfg || {},
                is_device: Browser.platform_closed || Browser.platform == "android",
                platform_name: Browser.platform_name,
                is_will_call: isWillCall,
                show_notify_me: true,
                show_notify_me_label: !blob.fan_follows_label,
                is_gift: !!giftDetails,
                gift_card_balance: blob.gift_card_balance,
                gift_card_redeem_link: TralbumDownload.giftCardRedeemLink(!!giftDetails, "p" + pkg.id)
            };
            dlInfo.download_info.is_cardable = Sidecart.isCardable($.extend({}, dlInfo.download_info, {
                currency: this._currency.symbol
            }));
            var element = $("\x3cdiv\x3e");
            var dialogTitle = Text.escapeHtml(Text.truncate(pkg.title, 42, "..."));
            this._dlg = NuDialog.alertHTML(dialogTitle, element, {
                width: "35.5em",
                buttons: [],
                dialogClass: "nu-dialog no-padding"
            });
            element.renderLiquid("download_panel", dlInfo);
            var minPrice = this.calculateMinimumPrice(isSetPrice, pkg.price, giftDetails);
            this.recordBuyDialogEvent(this.locale, isSetPrice, minPrice);
            var position;
            if (window.FacebookData && window.FacebookData.positionInfo && window.FacebookData.positionInfo.scrollTop)
                position = ["center", window.FacebookData.positionInfo.scrollTop];
            else
                position = {
                    my: "center center",
                    at: "center center",
                    of: window
                };
            this._dlg.dialog("option", "position", position);
            var downloadPanelVM = new DownloadPanelVM(dlInfo,this,"#download-panel-vm");
            ko.applyBindings(downloadPanelVM, downloadPanelVM.panel[0]);
            this._discountVM = downloadPanelVM.panes.discount;
            this._pricingVM = downloadPanelVM.panes.pricing;
            this.setupPurchaseNote();
            var self = this;
            this.grab_values_from_dialog();
            if (!this.country_pref)
                this.country_pref = CountryPrefPanel.make(function(new_country) {
                    self.oncountry_change(new_country)
                });
            if (isWillCall)
                this.update_summary();
            else {
                var reqParams = {
                    req: "hypothetical_shipping",
                    pkg_id: this._package.id,
                    pkg_currency: this._package.currency
                };
                if (giftDetails) {
                    reqParams.recipient_country = giftDetails.shipping_country_code;
                    reqParams.pkg_is_gift = 1
                }
                this.request(reqParams)
            }
            if (!this.isNYP())
                $("#orderQuantity", this._dlg).val(1);
            $("#orderQuantity", this._dlg).keydown(function(e) {
                if (e.shiftKey || e.ctrlKey || e.altKey)
                    e.preventDefault();
                else {
                    var key = e.keyCode || e.which;
                    var validKey = key == 8 || key == 9 || key == 27 || key == 46 || key >= 35 && key <= 40 || key >= 48 && key <= 57 || key >= 96 && key <= 105;
                    if (!validKey)
                        e.preventDefault()
                }
            });
            this.watchInput("userPrice");
            this.watchInput("orderQuantity", 1, "integer");
            if (!window.MediaView || MediaView.mode != "phone")
                Dom.select("orderQuantity", true);
            this._dlg.on("dialogclose", function() {
                self.country_pref.hide();
                self._dlg = null
            });
            if (giftDetails)
                self._dlg.data("gift_details", giftDetails);
            return this._dlg
        },
        buyerCountry: function() {
            var buyerLocation = $("#pagedata").data("blob").buyer_location;
            return buyerLocation === undefined ? null : buyerLocation.country_code
        },
        calculateMinimumPrice: function(isSetPrice, minPrice, giftDetails) {
            if (isSetPrice)
                minPrice = undefined;
            else if (!minPrice)
                if (giftDetails)
                    minPrice = this._currency.medium_min_price;
                else
                    minPrice = 0;
            return minPrice
        },
        destroy: function() {
            if (this._dlg) {
                this._dlg.dialog("close");
                $assert(this._dlg === null)
            }
        },
        taxDisplay: function(rate) {
            if (!rate || rate === 0)
                return null;
            if (rate == Math.round(rate))
                return rate.toString();
            if (rate == rate.toFixed(1))
                return rate.toFixed(1).toString();
            if (rate == rate.toFixed(2))
                return rate.toFixed(2).toString();
            return rate.toFixed(3).toString()
        },
        checkout: function(how) {
            if (!this._dlg)
                return;
            var pkg = this._package;
            if (!pkg)
                return;
            var self = this;
            var price = null;
            if (!this.validateQuantity("orderQuantity", "item_option"))
                return;
            var qty = parseInt(elt("orderQuantity").value);
            if (!this._discountVM.discountVerified())
                return;
            if (this.isNYP()) {
                var maxPrice = this._seller.max_price / qty;
                if (maxPrice > 1E3)
                    maxPrice = Math.floor(maxPrice / 100) * 100;
                else if (maxPrice > 100)
                    maxPrice = Math.floor(maxPrice / 10) * 10;
                else
                    maxPrice = Math.floor(maxPrice);
                this._pricingVM.maxPrice(maxPrice);
                this._pricingVM.validate();
                if (this._pricingVM.hasErrors())
                    return;
                price = Form.validate.parsePrice(elt("userPrice").value)
            }
            var args = {};
            args.option_id = null;
            args.option_name = null;
            var option_elem = elt("item_option");
            if (option_elem && pkg.options) {
                var option = pkg.options[option_elem.value];
                if (option) {
                    args.option_id = option.id;
                    args.option_name = option.title
                }
            }
            args.checkout_now = how != "cart" && how != "payment_method";
            args.item_title = pkg.title;
            args.item_title2 = TralbumData.current.type === "package" ? null : TralbumData.current.title;
            args.item_type = "p";
            args.item_id = pkg.id;
            args.preorder = (pkg.download_type || pkg.album_id) && TralbumData.album_is_preorder;
            args.has_download = !!pkg.download_type;
            args.band_id = BandData.id;
            args.artist_name = TralbumData.artist;
            args.unit_price = price || this._discountVM.unitPrice();
            args.currency = this._currency.symbol;
            args.quantity = qty;
            args.discount_id = this._discountVM.discountID();
            args.discount_type = this._discountVM.discountType();
            args.url = TralbumData.url;
            args.associated_license_id = TralbumData.current.type == "package" ? TralbumData.current.associated_license_id : TralbumData.package_associated_license_id;
            args.ip_country_code = Identities.ip_country_code || $("#pagedata").data("blob").user_territory;
            if (pkg.arts && pkg.arts[0]) {
                args.image_id = pkg.arts[0].image_id;
                args.thumb_url = ImageUtils.imageURL(pkg.arts[0].image_id, "package_thumb", false);
                args.https_thumb_url = ImageUtils.imageURL(pkg.arts[0].image_id, "package_thumb", true)
            } else if (pkg.album_art_id) {
                args.art_id = pkg.album_art_id;
                args.thumb_url = ImageUtils.artURL(pkg.album_art_id, "package_thumb", false);
                args.https_thumb_url = ImageUtils.artURL(pkg.album_art_id, "package_thumb", true)
            }
            var download_license_id = TralbumData.current.license_id;
            if (["album", "track"].indexOf(TralbumData.current.type) >= 0 && pkg.download_id && pkg.download_id > 0) {
                args.download_type = "a";
                args.download_id = TralbumData.current.type === "album" ? TralbumData.current.id : TralbumData.current.album_id
            }
            args.purchase_note = this.purchaseNote();
            args.notify_me = this.notifyMe();
            args.notify_me_label = this.notifyMeLabel();
            args.certified_seller = !!pkg.certified_seller;
            var gift_details = self._dlg ? self._dlg.data("gift_details") : null;
            if (gift_details) {
                args.is_gift = true;
                args.is_physical_gift = true;
                args.gift_sender_name = gift_details.sender_name;
                if (gift_details.recipient_fan_id && (!gift_details.recipient_email || gift_details.recipient_email.length === 0))
                    args.gift_recipient_fan_id = gift_details.recipient_fan_id;
                else
                    args.gift_recipient_email = gift_details.recipient_email;
                args.gift_recipient_name = gift_details.recipient_name;
                args.gift_sender_note = gift_details.sender_note;
                args.shipping_street = gift_details.shipping_street;
                args.shipping_street_2 = gift_details.shipping_street_2;
                args.shipping_city = gift_details.shipping_city;
                args.shipping_state = gift_details.shipping_state;
                args.shipping_zip = gift_details.shipping_zip;
                args.shipping_country_code = gift_details.shipping_country_code;
                args.shipping_country_name = gift_details.shipping_country_name
            }
            Sidecart.add_to_cart(args);
            if (args.checkout_now && !Sidecart.paymentTypeDialogAllowed())
                PleaseWaitPanel.show(false);
            if (args.checkout_now === false && how === "payment_method")
                this.showChoosePaymentMethod();
            else if (!Sidecart.paymentTypeDialogAllowed() || args.checkout_now === false)
                this.destroy();
            else if (Sidecart.gift_balance) {
                this.destroy();
                var params = {
                    client_id: ClientID,
                    return_url: window.TralbumData && TralbumData.url || location.href,
                    from: "dialog"
                };
                if (window.MediaView && MediaView.mode == "phone")
                    params.mob = "1";
                window.top.location.href = siteroot_https + "/cart/checkout_start?" + Url.joinQuery(params)
            } else
                this.showPaymentPref();
            return
        },
        recordBuyDialogEvent: function(locale, isSetPrice, minPrice) {
            var abtestData;
            if (locale) {
                var pricingType = isSetPrice ? "fixed" : minPrice > 0 ? "nyp_nonzero_min" : "nyp_zero_min";
                var country = this.buyerCountry() || "US";
                var mediaMode = window.MediaView ? MediaView.mode : null;
                Crumb.ajax({
                    type: "POST",
                    url: "/api/internationalization/1/localized_buy_dialog_presented",
                    dataAs: "JSON",
                    data: {
                        "locale": locale,
                        "pricing_type": pricingType,
                        "payment_pref": Sidecart.payment_pref,
                        "country": country,
                        "media_mode": mediaMode,
                        "client_id": ClientID
                    },
                    success: function(response) {
                        if (response.error)
                            Log.warn("Buy dialog logging event error.", response)
                    },
                    error: function(error) {
                        Log.warn("Buy dialog logging failed.", error)
                    }
                })
            }
            abtestData = $("#abt-album-1").data("abtest");
            if (abtestData) {
                var stats = {
                    kind: "buy dialog",
                    physical_item_buy_dialog: true,
                    abt_name: abtestData.test_name,
                    abt_bucket: abtestData.bucket,
                    abt_variant_id: abtestData.variant_id
                };
                Stats.record(stats)
            }
        },
        isNYP: function() {
            return this._package && !this._package.is_set_price
        },
        filter_returnkey: function(e) {
            if (e && e.keyCode == 13) {
                if (e.target && e.target.id == "purchase-note-input")
                    return true;
                PackageOrder.checkout("cart");
                return false
            }
            return true
        },
        validateQuantity: function(quantityElem, optionElem, alertElem, optionsAlertElem) {
            quantityElem = elt(quantityElem);
            optionElem = elt(optionElem);
            alertElem = elt(alertElem || quantityElem.id + "_alert");
            optionsAlertElem = optionElem ? elt(optionsAlertElem || optionElem.id + "_alert") : null;
            var pkg = this._package;
            FormUtils.showHideAlert(alertElem, null);
            var quantity = parseInt(quantityElem.value);
            var errorMsg = null;
            if (isNaN(quantity))
                errorMsg = TM("Please provide a quantity.");
            else if (quantity < 1)
                errorMsg = TM("The minimum quantity is 1.");
            else {
                if (optionElem) {
                    var option_limit = 0;
                    Iter.each(pkg.options[optionElem.value].origins, function(origin) {
                        if (origin.quantity_available > option_limit)
                            option_limit = origin.quantity_available
                    });
                    option_limit = option_limit ? option_limit.quantity_available : null;
                    if (option_limit === 0) {
                        errorMsg = TM("Sorry, this package option is sold out.");
                        alertElem = optionsAlertElem || alertElem
                    } else if (option_limit !== null && quantity > option_limit) {
                        errorMsg = TM("Sorry, only {{limit}} of that option available.", {
                            limit: option_limit
                        });
                        alertElem = optionsAlertElem || alertElem
                    }
                }
                if (errorMsg === null && pkg.quantity_limits !== null && quantity > pkg.quantity_limits)
                    if (pkg.quantity_available == pkg.quantity_limits)
                        errorMsg = TM("Sorry, only {{number}} more available.", {
                            number: pkg.quantity_available
                        });
                    else
                        errorMsg = TM("Sorry, purchases are limited to {{limit}}.", {
                            limit: pkg.quantity_limits
                        })
            }
            if (errorMsg) {
                FormUtils.showHideAlert(alertElem, errorMsg);
                return false
            }
            return true
        },
        grab_values_from_dialog: function() {
            var price;
            try {
                this.quantity = parseInt(elt("orderQuantity").value)
            } catch (e) {}
            if (isNaN(this.quantity) || this.quantity < 1)
                this.quantity = 1;
            if (this._package.is_set_price)
                this.subTotal = this.quantity * this._discountVM.unitPrice();
            else {
                price = Form.validate.parsePrice(elt("userPrice").value);
                this._pricingVM.unitPrice(this._discountVM.unitPrice());
                if (isNaN(price)) {
                    this._pricingVM.userPrice(null);
                    price = this._discountVM.unitPrice()
                } else {
                    this._pricingVM.userPrice(price);
                    price = Math.max(price, this._discountVM.unitPrice())
                }
                this.subTotal = this.quantity * price
            }
            if (isNaN(this.subTotal))
                this.subTotal = this._discountVM.unitPrice();
            this._pricingVM.subTotal(this.subTotal)
        },
        inputChanged: function(ignore) {
            this.grab_values_from_dialog();
            if (this._package.is_set_price)
                elt("userPrice").innerHTML = TextFormat.currency(this.subTotal, this._currency, true);
            var normalSubTotal = this.quantity * this._discountVM.basePrice();
            if (this._discountVM.discountedPrice() !== null)
                Dom.setText("normal-price", TextFormat.currency(normalSubTotal, this._currency, true));
            if (this.isNYP())
                this.update_nyp_labels();
            var isWillCall = this._package.shipping_exception_mode && this._package.shipping_exception_mode == "w";
            if (typeof this.shipping_base !== undefined || isWillCall)
                this.update_summary();
            if (this.isNYP() && !this._pricingVM.hasErrors())
                this._pricingVM.clearValidation()
        },
        update_nyp_labels: function() {
            var items_plausible = parseInt(elt("orderQuantity").value) != 1;
            var params = {
                items_plausible: items_plausible
            };
            Templ.renderElem("nyp-header", "_per_item", params);
            $("#nyp-header").toggleClass("nyp-header-middle", items_plausible)
        },
        updateCurrencyDisplay: function() {
            this.grab_values_from_dialog();
            this.update_summary()
        },
        NO_AMT: "\x26nbsp;-\x26nbsp;-\x26nbsp;",
        update_summary: function() {
            var giftDetails = this._dlg ? this._dlg.data("gift_details") : null;
            this.country_pref.hide();
            this.updateShippingAndTax();
            this._pricingVM.updateShippingSummary({
                "subTotal": this.subTotal,
                "hasTax": this.shipping_has_tax,
                "shippingAndTax": this.shipping_and_tax,
                "showAsTotal": this.quantity > 1,
                "giftCountryName": giftDetails && giftDetails.shipping_country_name,
                "giftCountry": giftDetails && giftDetails.shipping_country_code,
                "giftUsState": giftDetails && giftDetails.shipping_state,
                "giftUsZip": giftDetails && giftDetails.shipping_zip
            })
        },
        updateShippingAndTax: function() {
            if (this.shipping_is_base)
                this.shipping_and_tax = this.shipping_base + this.shipping_incr * (this.quantity - 1);
            else
                this.shipping_and_tax = this.shipping_incr * this.quantity;
            if (this.shipping_has_tax)
                this.shipping_and_tax += Math.round(this.subTotal * this.shipping_tax_rate) / 100
        },
        show_country_pref: function(ev) {
            var target = ev.target || ev.srcElement;
            Y.util.Event.preventDefault(ev);
            this.country_pref.show(target, true)
        },
        hasShippingException: function() {
            return this._package && this._package.shipping_exception_mode && this._package.shipping_exception_mode !== ""
        },
        oncountry_change: function(new_country) {
            if (this._dlg) {
                this.country_pref.hide();
                this._pricingVM.updating(true);
                if (this.hasShippingException())
                    this.request({
                        req: "country3",
                        country: new_country.country,
                        us_zip: new_country.us_zip
                    });
                else
                    this.request({
                        req: "country2",
                        country: new_country.country,
                        us_zip: new_country.us_zip,
                        pkg_id: this._package.id,
                        pkg_currency: this._package.currency
                    })
            }
        },
        request: function(data) {
            var self = this;
            var cb = {
                success: function(o) {
                    self.req_success(o)
                },
                failure: function(o) {
                    self.req_failure(o)
                }
            };
            data.client_id = ClientID;
            if (this.localize_page)
                data.localize_page = this.localize_page;
            var d = Url.joinQuery(data);
            Y.util.Connect.asyncRequest("POST", "/cart/cb", cb, d)
        },
        req_success: function(o) {
            var data = JSON.parse(o.responseText);
            if (data.error)
                Log.debug("Cart ERROR");
            if (data.req == "country2")
                this.req_country2(data);
            else if (data.req == "country3")
                this.req_country3(data);
            else if (data.req == "hypothetical_shipping")
                this.req_hypothetical_shipping(data)
        },
        req_failure: function(o) {},
        req_hypothetical_shipping: function(data) {
            this.shipping_is_base = data.is_base;
            this.shipping_base = data.base;
            this.shipping_incr = data.incr;
            this.shipping_has_tax = data.has_tax;
            this.shipping_tax_rate = data.tax_rate;
            this.update_summary()
        },
        req_country2: function(data) {
            ClientPrefs.update(data);
            this.shipping_is_base = data.is_base;
            this.shipping_base = data.base;
            this.shipping_incr = data.incr;
            this.shipping_has_tax = data.has_tax;
            this.shipping_tax_rate = data.tax_rate;
            this.update_summary()
        },
        req_country3: function(data) {
            this.update_summary()
        },
        zzz: null
    }
}();
var Geo = function() {
    function initAddressLabels() {
        if (!("TM"in window)) {
            Log.server("load order problem - TM needs to load before address form labels are referenced in geo.js", "warn");
            return
        }
        addressLabels = {
            "AT": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "AU": {
                state: TM("State"),
                zip: TM("Postcode"),
                zipType: "postcode"
            },
            "BE": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "BR": {
                state: TM("Province"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "CA": {
                state: TM("Province"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "CH": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "CZ": {
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "DE": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "DK": {
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "ES": {
                state: TM("State"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "FI": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "FR": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "GB": {
                zip: TM("Postcode"),
                zipType: "postcode"
            },
            "GR": {
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "IE": {
                state: TM("County"),
                zip: TM("Postcode"),
                zipType: "postcode"
            },
            "IT": {
                state: TM("Province"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "IL": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "MX": {
                state: TM("Province"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "NL": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "NO": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "NZ": {
                zip: TM("Postcode"),
                zipType: "postcode"
            },
            "PL": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "PT": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "RU": {
                state: TM("Territory"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "SE": {
                zip: TM("Postal Code"),
                zipType: "postal-code"
            },
            "SA": {
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "SG": {
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "SK": {
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "US": {
                state: TM("State"),
                zip: TM("ZIP Code"),
                zipType: "zip"
            },
            "JP": {
                street: TM("Street", {}, "used for an address in Japan", "jp address"),
                state: TM("Prefecture"),
                zip: TM("Postal Code"),
                zipType: "postal-code"
            }
        }
    }
    var EUMemberStates = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"];
    var addressLabels = null;
    var localization = {
        "AT": {
            optionalParameters: {},
            zipValidator: /^\d{4}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "AU": {
            optionalParameters: {},
            zipValidator: /^\d{4}$/,
            zipFormat: "numeric",
            addressFormat: "CITY STATE ZIP|COUNTRY"
        },
        "BE": {
            optionalParameters: {},
            zipValidator: /^\d{4}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "BR": {
            optionalParameters: {},
            zipValidator: /^\d{5}[\-]?\d{3}$/,
            zipFormat: "numeric",
            addressFormat: "CITY-STATE|ZIP|COUNTRY"
        },
        "CA": {
            optionalParameters: {},
            zipValidator: /^[A-Z]\d[A-Z][ ]?\d[A-Z]\d$/,
            zipFormat: "alphanumeric",
            addressFormat: "CITY STATE ZIP|COUNTRY"
        },
        "CH": {
            optionalParameters: {},
            zipValidator: /^\d{4}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "CZ": {
            optionalParameters: {},
            zipValidator: /^\d{3}[ ]?\d{2}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "DE": {
            optionalParameters: {},
            zipValidator: /^\d{5}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "DK": {
            optionalParameters: {},
            zipValidator: /^\d{4}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "ES": {
            optionalParameters: {},
            zipValidator: /^\d{5}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY (STATE)|COUNTRY"
        },
        "FI": {
            optionalParameters: {},
            zipValidator: /^\d{5}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "FR": {
            optionalParameters: {},
            zipValidator: /^\d{2}[ ]?\d{3}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "GB": {
            optionalParameters: {},
            zipValidator: /^GIR[ ]?0AA|((AB|AL|B|BA|BB|BD|BH|BL|BN|BR|BS|BT|CA|CB|CF|CH|CM|CO|CR|CT|CV|CW|DA|DD|DE|DG|DH|DL|DN|DT|DY|E|EC|EH|EN|EX|FK|FY|G|GL|GY|GU|HA|HD|HG|HP|HR|HS|HU|HX|IG|IM|IP|IV|JE|KA|KT|KW|KY|L|LA|LD|LE|LL|LN|LS|LU|M|ME|MK|ML|N|NE|NG|NN|NP|NR|NW|OL|OX|PA|PE|PH|PL|PO|PR|RG|RH|RM|S|SA|SE|SG|SK|SL|SM|SN|SO|SP|SR|SS|ST|SW|SY|TA|TD|TF|TN|TQ|TR|TS|TW|UB|W|WA|WC|WD|WF|WN|WR|WS|WV|YO|ZE)(\d[\dA-Z]?[ ]?\d[ABD-HJLN-UW-Z]{2}))|BFPO[ ]?\d{1,4}$/,
            zipFormat: "alphanumeric",
            addressFormat: "CITY|ZIP|COUNTRY"
        },
        "GR": {
            optionalParameters: {},
            zipValidator: /^\d{3}[ ]?\d{2}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "IE": {
            optionalParameters: {
                state: true
            },
            zipValidator: /^/,
            zipFormat: "alphanumeric",
            addressFormat: "CITY ZIP|STATE|COUNTRY"
        },
        "IT": {
            optionalParameters: {},
            zipValidator: /^\d{5}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY STATE|COUNTRY"
        },
        "IL": {
            optionalParameters: {},
            zipValidator: /(^\d{5}$)|(^\d{7}$)/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "MX": {
            optionalParameters: {},
            zipValidator: /^\d{5}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY STATE|COUNTRY"
        },
        "NL": {
            optionalParameters: {},
            zipValidator: /^\d{4}[ ]?[A-Z]{2}$/,
            zipFormat: "alphanumeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "NO": {
            optionalParameters: {},
            zipValidator: /^\d{4}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "NZ": {
            optionalParameters: {},
            zipValidator: /^/,
            zipFormat: "alphanumeric",
            addressFormat: "CITY ZIP|COUNTRY"
        },
        "PL": {
            optionalParameters: {},
            zipValidator: /^\d{2}-\d{3}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "PT": {
            optionalParameters: {},
            zipValidator: /^\d{4}([\-]\d{3})?$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY/STATE|COUNTRY"
        },
        "RU": {
            optionalParameters: {},
            zipValidator: /^(\d{3})|(\d{6})$/,
            zipFormat: "numeric",
            addressFormat: "CITY STATE|ZIP|COUNTRY"
        },
        "SE": {
            optionalParameters: {},
            zipValidator: /^\d{3}[ ]?\d{2}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "SA": {
            optionalParameters: {},
            zipValidator: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
            zipFormat: "numeric",
            addressFormat: "CITY, STATE ZIP|COUNTRY"
        },
        "SG": {
            optionalParameters: {},
            zipValidator: /^\d{6}$/,
            zipFormat: "numeric",
            addressFormat: "CITY ZIP|COUNTRY"
        },
        "SK": {
            optionalParameters: {},
            zipValidator: /^\d{3}[ ]?\d{2}$/,
            zipFormat: "numeric",
            addressFormat: "ZIP CITY|COUNTRY"
        },
        "US": {
            optionalParameters: {},
            zipValidator: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
            zipFormat: "numeric",
            addressFormat: "CITY, STATE ZIP|COUNTRY"
        },
        "JP": {
            optionalParameters: {},
            zipValidator: /^\d{3}-\d{4}$|^\d{7}$/,
            zipFormat: "numeric",
            addressFormat: "CITY|STATE ZIP|COUNTRY"
        }
    };
    return {
        localizeAddressFormat: function(address) {
            var subs;
            var formattedAddress;
            var lines;
            var newLines;
            var i;
            var newLine;
            var match;
            var keys;
            var details;
            var matchKeys;
            if (localization[address.country_code] && localization[address.country_code].addressFormat) {
                subs = {
                    "STREET1": address.street,
                    "STREET2": address.street_2,
                    "CITY": address.city,
                    "STATE": address.state,
                    "ZIP": address.zip,
                    "COUNTRY": address.country_name
                };
                formattedAddress = "STREET1|STREET2|" + localization[address.country_code].addressFormat;
                lines = formattedAddress.split("|");
                newLines = [];
                for (i = 0; i < lines.length; i++) {
                    newLine = lines[i];
                    matchKeys = Object.keys(subs);
                    for (match = matchKeys.length > 0 ? (new RegExp(matchKeys.join("|"))).exec(newLine) : null; match !== null; ) {
                        newLine = newLine.replace(match[0], subs[match[0]] || "");
                        delete subs[match[0]];
                        matchKeys = Object.keys(subs);
                        match = matchKeys.length > 0 ? (new RegExp(matchKeys.join("|"))).exec(newLine) : null
                    }
                    if (newLine.length > 0 && !subs[newLine])
                        newLines.push(newLine)
                }
                return newLines
            } else {
                keys = ["street", "street_2", "city", "state", "zip", "country_name"];
                details = [];
                for (i = 0; i < keys.length; i++)
                    if (address[keys[i]])
                        details.push(address[keys[i]]);
                return details
            }
        },
        localize: function(countryCode) {
            if (!("TM"in window)) {
                var e = new Error;
                var stack = "stack"in e ? e.stack : "unknown stack";
                Log.server("load order problem - geo.localize called before TM loaded " + stack, "error");
                return
            }
            var fallback = {
                labels: {
                    state: TM("State / Province / Region", {}, "generic country state address label"),
                    zip: TM("ZIP / Postal Code", {}, "generic country postal code address label"),
                    zipType: "postal-code"
                },
                optionalParameters: {
                    state: true,
                    zip: true
                },
                zipValidator: /^/,
                zipFormat: "alphanumeric",
                isFallback: true
            };
            if (countryCode && countryCode in localization) {
                var addrFormat = localization[countryCode];
                if (!addressLabels)
                    initAddressLabels();
                if (!("labels"in addrFormat) && addressLabels && countryCode in addressLabels)
                    addrFormat["labels"] = addressLabels[countryCode];
                return addrFormat
            } else
                return fallback
        },
        isUSBuyer: function() {
            var pageData = $("#pagedata").data("blob") || {};
            var fanLocationCountry = pageData.fan_location_country;
            var ipLocationCountryCode = pageData.ip_location_country_code;
            var synonyms = ["US", "United States", "United States of America", "USA"];
            if (fanLocationCountry)
                return $.inArray(fanLocationCountry, synonyms) !== -1;
            if (window.ClientPrefs && !window.ClientPrefs.is_default)
                return window.ClientPrefs.country === "US";
            if (ipLocationCountryCode)
                return ipLocationCountryCode === "US";
            return true
        },
        isEUCountry: function(countryCode) {
            return !!Iter.find(EUMemberStates, function(EUMemberStateCode) {
                return EUMemberStateCode === countryCode
            })
        },
        getDefaultCountryCode: function() {
            if (window.ClientPrefs && !window.ClientPrefs.is_default)
                return window.ClientPrefs.country;
            var pageData = $("#pagedata").data("blob") || {};
            var ipLocationCountryCode = pageData.ip_location_country_code;
            return ipLocationCountryCode || ""
        }
    }
}();
(function(window, $) {
    var FanAction = {
        doAction: function(action, querystr, from, itemId, itemType, bandId, collectData) {
            var pagedata = $("#pagedata").data("blob") || {};
            var cfg = pagedata.cfg || {};
            var statClick = null;
            var isBandMember = Identities.bmgr.bands().length > 0;
            var isUnverifiedFan = Identities.fan() && !Identities.fan().private && !Identities.fan().verified;
            if (action === "wishlist")
                if (isUnverifiedFan)
                    statClick = "unverified_fan_wishlist_open";
                else if (isBandMember)
                    statClick = "logged_out_wishlist_open_band_no_fan";
                else
                    statClick = "logged_out_wishlist_open";
            else if (action === "follow" && itemType === "f")
                if (isUnverifiedFan)
                    statClick = "unverified_fan_fan_follow_open";
                else if (isBandMember)
                    statClick = "logged_out_fan_follow_open_band_no_fan";
                else
                    statClick = "logged_out_fan_follow_open";
            else if (action === "follow" && (!itemType || itemType === "b"))
                if (isUnverifiedFan)
                    statClick = "unverified_fan_follow_open";
                else if (isBandMember)
                    statClick = "logged_out_follow_open_band_no_fan";
                else
                    statClick = "logged_out_follow_open";
            else if (action === "follow" && (!itemType || itemType === "g"))
                if (isUnverifiedFan)
                    statClick = "unverified_fan_follow_open";
                else if (isBandMember)
                    statClick = "logged_out_follow_open_band_no_fan";
                else
                    statClick = "logged_out_genre_follow_open";
            if (statClick)
                Stats.record({
                    "kind": "click",
                    "click": statClick
                });
            var ref_token = window.ReferrerToken;
            if (ref_token)
                Crumb.ajax({
                    type: "POST",
                    url: "/api/editorial/3/wish_follow",
                    dataAs: "JSON",
                    data: {
                        "action": action,
                        "logged_in": false,
                        "ref_token": ref_token
                    },
                    success: function(response) {
                        if (response.error)
                            Log.warn("Editorial logged out action recording error.", response)
                    },
                    error: function(error) {
                        Log.warn("Editorial logged out action recording failed.", error)
                    }
                });
            querystr = querystr || "";
            if (querystr.length === 0 && pagedata.signup_querystrings)
                querystr = pagedata.signup_querystrings[itemType + itemId] || "";
            var loginFrom = from || (action == "follow" ? "loflwlgn" : "lowllgn");
            var signupFrom = from || (action == "follow" ? "loflwlrn" : "lowllrn");
            var loginUrl;
            var signupUrl;
            if (querystr.length > 0) {
                loginUrl = siteroot_https + "/login" + querystr + "\x26action\x3d" + action + "\x26from\x3d" + loginFrom;
                signupUrl = siteroot_https + "/fans" + querystr + "\x26action\x3d" + action + "\x26from\x3d" + signupFrom
            } else {
                loginUrl = siteroot_https + "/login?action\x3d" + action + "\x26from\x3d" + loginFrom;
                signupUrl = siteroot_https + "/fans?action\x3d" + action + "\x26from\x3d" + signupFrom
            }
            if (Identities.fan() && !Identities.fan().private && !Identities.fan().verified && window.VerifyNag) {
                var fan_email = pagedata.signup_params.email || window.FanSignup.state.email;
                window.verifyNag = window.verifyNag || new VerifyNag({
                    "fan_email": fan_email
                });
                window.verifyNag.openDialog()
            } else if (window.FanSignup) {
                var isBand = (!Identities.fan() || Identities.fan().private) && Identities.user();
                if (MediaView.mode === "phone" && isBand) {
                    var fanSignupUrl = siteroot_https + "/fan_signup" + querystr + "\x26action\x3d" + action + "\x26from\x3d" + signupFrom + "\x26pane\x3dexisting_artist";
                    window.location.href = fanSignupUrl
                } else if (Url.isCustomDomain() && isBand)
                    if (FanSignup.subdomainURL) {
                        var params = {
                            "fan_action_pane": "existing_artist",
                            "fan_action": action
                        };
                        window.location.href = Url.addQueryParams(FanSignup.subdomainURL, params)
                    } else
                        window.location.href = siteroot_https + "/fans";
                else {
                    FanSignup.actionParams = {
                        "action": action
                    };
                    if (itemId && itemType) {
                        FanSignup.actionParams.actionItemId = itemId;
                        FanSignup.actionParams.actionItemType = itemType;
                        FanSignup.actionParams.actionBandId = bandId
                    } else if (bandId)
                        FanSignup.actionParams.actionBandId = bandId;
                    if (collectData)
                        FanSignup.actionParams.collectData = collectData;
                    FanSignup.actionParams.from = from;
                    FanSignup.actionParams.queryString = querystr;
                    var pane;
                    if (isBand && FanSignup.affiliations && (FanSignup.affiliations.fan || FanSignup.affiliations.fan_already_linked_email))
                        pane = "dupe_fan";
                    else if (isBand)
                        pane = "existing_artist";
                    else
                        pane = "action";
                    FanSignup.openPane(pane, true)
                }
            } else {
                var title;
                if (action == "wishlist")
                    title = TM("Wishlist");
                else if (action === "follow")
                    title = TM("Follow");
                var dialogOptions = {
                    "title": title,
                    "buttons": [],
                    "minHeight": 100
                };
                if (MediaView.mode === "desktop")
                    dialogOptions.width = "38em";
                NuDialog.showTemplate("fan/fan_action_panel", {
                    "siteroot": window.siteroot,
                    "is_band_member": Identities.bmgr.bands().length > 0,
                    "action": action,
                    "loginUrl": loginUrl,
                    "signupUrl": signupUrl
                }, dialogOptions)
            }
        }
    };
    window.FanAction = FanAction;
    $(document).ready(function() {
        var urlParams = Url.parseQuery(location.search);
        var pagedata = $("#pagedata").data("blob") || {};
        var cfg = pagedata.cfg || {};
        if (urlParams.show_nag) {
            var fan_email = pagedata.signup_params.email || window.FanSignup.state.email;
            window.verifyNag = window.verifyNag || new VerifyNag({
                "fan_email": fan_email
            });
            window.verifyNag.openDialog();
            SignupUtils.cleanURL()
        }
        $(document).on("visibilitychange", function() {
            if (document.visibilityState && document.visibilityState === "visible" && !Identities.user() && Cookie.get("identity"))
                window.location.reload(true)
        })
    })
}
)(window, jQuery);
window.PaymentTypePanel = function() {
    return {
        onchange: function() {},
        init: function(onchange_fn, save_fn) {
            this.dlg = null;
            this._from = null;
            if (typeof onchange_fn === "function")
                this.onchange = onchange_fn;
            if (typeof save_fn === "function")
                this.save = save_fn;
            return this
        },
        getCenterDialogCSS: function() {
            return {
                left: $(window).width() / 2 - $(".payment-pref-dlg").width() / 2
            }
        },
        getDimensionsCSS: function() {
            var height = $(".payment-pref-dlg").height();
            var tb_height = $(".ui-dialog-titlebar").outerHeight();
            var width = $(".payment-pref-dlg").width();
            return {
                height: height + tb_height,
                width: width
            }
        },
        setDialog: function(dlg) {
            this.dlg = dlg
        },
        lockDimensions: function(dlg) {
            var height = dlg.parent().height();
            var width = dlg.parent().width();
            dlg.parent().css({
                "display": "block",
                "float": "left",
                "height": height,
                "width": width
            });
            return {
                height: height,
                width: width
            }
        },
        setupTransitions: function(dlg) {
            dlg.parent().css({
                "transition-property": "top, left, height, width",
                "transition-duration": "0.2s, 0.2s, 0.2s, 0.2s"
            })
        },
        updateSelection: function() {
            $(".payment-pref-dlg div").removeClass("selected");
            $(".payment-pref-dlg input[name\x3dpayment-type]:checked").closest("div").addClass("selected")
        },
        from: function(v) {
            if (typeof v === "undefined")
                return this._from || "dialog";
            else
                this._from = v
        },
        save: function() {
            Sidecart.checkout_wait();
            var val = $(".payment-pref-dlg input[name\x3dpayment-type]:checked").val();
            this.onchange(val);
            this.hide();
            Sidecart.checkout(null, this.from());
            return false
        },
        registerEvents: function() {
            var self = this;
            $(".payment-pref-dlg input[name\x3dpayment-type]:checked").closest("div").addClass("selected");
            $(".payment-pref-dlg input[name\x3dpayment-type]").on("change", this.updateSelection);
            $(".payment-pref-dlg  button").on("click", function(e) {
                self.save();
                return false
            });
            if (MediaView.mode === "phone")
                $(".payment-pref-dlg form div").on("click", function() {
                    $(this).find("input").prop("checked", true);
                    self.save();
                    return false
                });
            else
                $(".payment-pref-dlg form div").on("click", function() {
                    $(this).find("input").prop("checked", true);
                    self.updateSelection()
                })
        },
        title: function() {
            return TM("How would you like to pay?")
        },
        show: function(options, _hasNonUsdCardableItems) {
            var self = this;
            var hasNonUsdCardableItems = self._from === "checkout" ? _hasNonUsdCardableItems : Sidecart.hasNonUsdCardableItems();
            this.dlg = NuDialog.showTemplate("cart/payment_pref", {
                non_usd_cardable_items: hasNonUsdCardableItems
            }, $.extend({
                width: "auto",
                minHeight: 0,
                closeOnEscape: true,
                title: this.title(),
                draggable: true,
                buttons: [],
                dialogClass: "no-padding"
            }, options));
            this.registerEvents()
        },
        hide: function() {
            if (this.dlg)
                this.dlg.dialog("close")
        },
        showPleaseWait: function() {
            var btn = $(".payment-pref-dlg button.proceed");
            btn.attr("disabled", true);
            btn.text(TM("Please wait..."))
        },
        showPaypalWait: function() {
            $(".payment-pref-dlg").toggleClass("paypal-wait")
        },
        zzz: null
    }
}();
window.ChangePaymentMethodVM = function($, ko) {
    return function(payment_method_panel, el) {
        var self = this;
        this.$el = $(el);
        this._pmPanel = payment_method_panel;
        this.changeCardDetails = function() {
            var return_url = window.TralbumData ? TralbumData.url : location.href;
            var checkout_params = Sidecart.getCheckoutParams(null, return_url);
            var params = {
                pane: "creditcard",
                return_params: Url.joinQuery(checkout_params)
            };
            window.top.location.href = TemplGlobals.siteroot_https + "/settings?" + Url.joinQuery(params)
        }
        ;
        this.close = function() {
            this._pmPanel.hide()
        }
        ;
        this.startPayPalFlow = function() {
            PleaseWaitPanel.show(false);
            Sidecart.payment_pref_override = "p";
            Sidecart.checkout();
            self.close()
        }
    }
}(jQuery, ko);
window.ChangePaymentMethodPanel = function() {
    return {
        getCenterDialogCSS: function() {
            return {
                left: $(window).width() / 2 - $(".change-payment-method-dlg").width() / 2
            }
        },
        getDimensionsCSS: function() {
            var height = $(".change-payment-method-dlg").height();
            var tb_height = $(".ui-dialog-titlebar").outerHeight();
            var width = $(".change-payment-method-dlg").width();
            return {
                height: height + tb_height,
                width: width
            }
        },
        setDialog: function(dlg) {
            this.dlg = dlg
        },
        lockDimensions: function(dlg) {
            var height = dlg.parent().height();
            var width = dlg.parent().width();
            dlg.parent().css({
                "display": "block",
                "float": "left",
                "height": height,
                "width": width
            });
            return {
                height: height,
                width: width
            }
        },
        setupTransitions: function(dlg) {
            dlg.parent().css({
                "transition-property": "top, left, height, width",
                "transition-duration": "0.2s, 0.2s, 0.2s, 0.2s"
            })
        },
        dropTransitions: function(dlg) {
            dlg.parent().css({
                "transition-property": "none",
                "transition-duration": "none"
            })
        },
        hide: function() {
            if (this.dlg)
                this.dlg.dialog("close")
        },
        title: function() {
            return TM("Change payment method")
        },
        show: function(options) {
            this.dlg = NuDialog.showTemplate("cart/change_payment_method", {
                savedCard: Sidecart.saved_card
            }, $.extend({
                width: "auto",
                minHeight: 0,
                closeOnEscape: true,
                title: this.title(),
                draggable: true,
                buttons: [],
                dialogClass: "no-padding"
            }, options));
            this.initVM()
        },
        initVM: function() {
            var paymentMethodVM = new ChangePaymentMethodVM(this,".change-payment-method-dlg");
            ko.applyBindings(paymentMethodVM, paymentMethodVM.$el[0])
        },
        zzz: null
    }
}();
var GiftPanel = {
    validateGiftDetails: function(giftPanel, field, recipientFanId) {
        var characterLimit = {
            "short": 100,
            "long": 1E3
        };
        var validationErrors = false;
        var mediaMode = window.MediaView ? MediaView.mode : null;
        var scrollToField = function(field) {
            var fieldContainer = giftPanel[field].parent();
            var margin = 5;
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: fieldContainer.offset().top - 5
                })
            }, 100)
        };
        var validateSenderName = function() {
            if (!field && giftPanel.senderName.val().length === 0) {
                giftPanel.senderNameError.addClass("alertActive");
                giftPanel.senderNameError.text(TM("Please enter your name."));
                giftPanel.senderName.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("senderName");
                validationErrors = true
            } else if (!field && giftPanel.senderName.val().length >= characterLimit.short) {
                giftPanel.senderNameError.addClass("alertActive");
                var errorText = TM("Your name must be less than {{num}} characters.", {
                    num: characterLimit.short
                });
                giftPanel.senderNameError.text(errorText);
                giftPanel.senderName.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("senderName");
                validationErrors = true
            } else {
                giftPanel.senderNameError.removeClass("alertActive");
                giftPanel.senderName.removeClass("has-validation-error")
            }
        };
        var validateRecipientName = function() {
            if (!field && giftPanel.recipientName.val().length === 0) {
                giftPanel.recipientNameError.addClass("alertActive");
                giftPanel.recipientNameError.text(TM("Please enter the recipient\u2019s name."));
                giftPanel.recipientName.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("recipientName");
                validationErrors = true
            } else if (!field && giftPanel.recipientName.val().length >= characterLimit.short) {
                giftPanel.recipientNameError.addClass("alertActive");
                var errorText = TM("The recipient\u2019s name must be less than {{num}} characters.", {
                    num: characterLimit.short
                });
                giftPanel.recipientNameError.text(errorText);
                giftPanel.recipientName.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("recipientName");
                validationErrors = true
            } else {
                giftPanel.recipientNameError.removeClass("alertActive");
                giftPanel.recipientName.removeClass("has-validation-error")
            }
        };
        var validateRecipientEmail = function() {
            if (!field && (giftPanel.recipientEmail.val().length === 0 || !GiftPanel.emailValid(giftPanel.recipientEmail.val()))) {
                giftPanel.recipientEmailError.addClass("alertActive");
                giftPanel.recipientEmailError.text(TM("Please enter an email like: lucky@duck.com"));
                giftPanel.recipientEmail.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("recipientEmail");
                validationErrors = true
            } else if (!field && giftPanel.recipientEmail.val().length >= characterLimit.short) {
                giftPanel.recipientEmailError.addClass("alertActive");
                var errorText = TM("Recipient\u2019s email must be less than {{num}} characters.", {
                    num: characterLimit.short
                });
                giftPanel.recipientEmailError.text(errorText);
                giftPanel.recipientEmail.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("recipientEmail");
                validationErrors = true
            } else {
                giftPanel.recipientEmailError.removeClass("alertActive");
                giftPanel.recipientEmail.removeClass("has-validation-error")
            }
        };
        var validateSenderNote = function() {
            if (!field && giftPanel.senderNote.val().length >= characterLimit.long) {
                giftPanel.senderNoteError.addClass("alertActive");
                var errorText = TM("Sender note must be less than {{num}} characters.", {
                    num: characterLimit.long
                });
                giftPanel.senderNoteError.text(errorText);
                giftPanel.senderNote.addClass("has-validation-error");
                if (!validationErrors && mediaMode == "phone")
                    scrollToField("senderNote");
                validationErrors = true
            } else {
                giftPanel.senderNoteError.removeClass("alertActive");
                giftPanel.senderNote.removeClass("has-validation-error")
            }
        };
        if (field === "senderName")
            validateSenderName();
        else if (field === "recipientName")
            validateRecipientName();
        else if (field === "recipientEmail")
            validateRecipientEmail();
        else if (field === "senderName")
            validateSenderNote();
        else {
            validateSenderName();
            validateRecipientName();
            if (!recipientFanId || giftPanel.recipientEmail.val().length)
                validateRecipientEmail();
            validateSenderNote();
            return !validationErrors
        }
    },
    emailValid: function(email) {
        var emailRegex = /(^)([^\s\(\)"'\/><,@]+@\w([^\s\(\)"'\/><&,@]*\w)?\.\w[^\s\(\)"'\/><&,@]*\w)($)/;
        return emailRegex.test(email)
    }
};
var PhysicalGiftViewModel = function(giftDetails, submitCallback, cancelCallback, validationOverride) {
    function statePlaceholderText() {
        return self.localization.optionalParameters.state ? TM("(optional)") : ""
    }
    function zipPlaceholderText() {
        return self.localization.optionalParameters.zip ? TM("(optional)") : ""
    }
    var self = this;
    ko.extenders.validate = function(target) {
        target.subscribe(function() {
            if (target().length > 0)
                target.validate(true)
        });
        return target
    }
    ;
    self.form = "form[name\x3d'physical-gift']";
    self.hasValidationErrors = false;
    self.errorTexts = {
        "state": {
            error: TM("Please enter the recipient\u2019s state."),
            tooLong: TM("Recipient\u2019s state must be less than 60 characters.")
        },
        "province": {
            error: TM("Please enter the recipient\u2019s province."),
            tooLong: TM("Recipient\u2019s province must be less than 60 characters.")
        },
        "prefecture": {
            error: TM("Please enter the recipient\u2019s prefecture."),
            tooLong: TM("Recipient\u2019s prefecture must be less than 60 characters.")
        },
        "territory": {
            error: TM("Please enter the recipient\u2019s territory."),
            tooLong: TM("Recipient\u2019s territory must be less than 60 characters.")
        },
        "county": {
            error: TM("Please enter the recipient\u2019s county."),
            tooLong: TM("Recipient\u2019s county must be less than 60 characters.")
        },
        "ZIP code": {
            error: TM("Sorry, that doesn\u2019t appear to be a valid ZIP code."),
            tooLong: TM("Recipient\u2019s ZIP code must be less than 20 characters.")
        },
        "postal code": {
            error: TM("Sorry, that doesn\u2019t appear to be a valid postal code."),
            tooLong: TM("Recipient\u2019s postal code must be less than 20 characters.")
        },
        "postcode": {
            error: TM("Sorry, that doesn\u2019t appear to be a valid postcode."),
            tooLong: TM("Recipient\u2019s postcode must be less than 20 characters.")
        }
    };
    self.senderName = ko.observable(giftDetails.sender_name).extend({
        validate: ""
    });
    self.recipientName = ko.observable(giftDetails.recipient_name).extend({
        validate: ""
    });
    self.recipientFanId = giftDetails.recipient_fan_id;
    self.recipientEmail = ko.observable(giftDetails.recipient_email).extend({
        validate: ""
    });
    self.senderNote = ko.observable(giftDetails.sender_note);
    self.shippingStreet = ko.observable(giftDetails.shipping_street).extend({
        validate: ""
    });
    self.shippingStreet2 = ko.observable(giftDetails.shipping_street_2).extend({
        validate: ""
    });
    self.shippingCity = ko.observable(giftDetails.shipping_city).extend({
        validate: ""
    });
    self.shippingState = ko.observable(giftDetails.shipping_state).extend({
        validate: ""
    });
    self.shippingStateName = ko.observable(giftDetails.shipping_state_name);
    self.shippingStateCode = ko.observable(giftDetails.shipping_state).extend({
        validate: ""
    });
    self.shippingZIP = ko.observable(giftDetails.shipping_zip).extend({
        validate: ""
    });
    self.shippingCountry = ko.observable(CountryList.getCountryName(giftDetails.shipping_country_code));
    self.shippingCountryCode = ko.observable(giftDetails.shipping_country_code);
    self.countryList = CountryList.allCountries();
    self.setOptionDisable = CountryList.disableSeparators();
    self.prettyShippingCountry = ko.computed(function() {
        var string = self.shippingCountryCode() == "GB" ? "the " : "";
        string += self.shippingCountry();
        return string
    });
    self.isUSBuyer = ko.observable(giftDetails.is_us_buyer);
    self.shippingRestrictionWarningVisible = ko.computed(function() {
        if (self.isUSBuyer() && self.shippingCountryCode() !== "US")
            return true;
        return false
    });
    self.shippingToJapanWarningVisible = ko.computed(function() {
        if (self.shippingCountryCode() === "JP")
            return true;
        return false
    });
    self.senderNameError = ko.observable("");
    self.recipientNameError = ko.observable("");
    self.recipientEmailError = ko.observable("");
    self.shippingStreetError = ko.observable("");
    self.shippingStreet2Error = ko.observable("");
    self.shippingCityError = ko.observable("");
    self.shippingStateError = ko.observable("");
    self.shippingZIPError = ko.observable("");
    self.shippingCountryError = ko.observable("");
    self.shippingPhoneNumberError = ko.observable("");
    self.localization = Geo.localize(self.shippingCountryCode());
    self.shippingStateLabel = ko.observable(self.localization.labels.state);
    self.shippingZIPLabel = ko.observable(self.localization.labels.zip);
    self.shippingStatePlaceholder = ko.observable(statePlaceholderText());
    self.shippingZIPPlaceholder = ko.observable(zipPlaceholderText());
    self.shippingCountryCode.subscribe(function() {
        self.shippingCountry($(self.form).find("#countrySelect option:selected").text());
        self.updateLocalization();
        self.shippingZIPError("");
        self.shippingStateError("");
        self.shippingCityError("");
        self.shippingState("")
    });
    self.shippingStateCode.subscribe(function() {
        self.shippingStateName($(self.form).find("#stateSelect option:selected").text())
    });
    self.submitEnabled = ko.computed(function() {
        if (validationOverride === "addressUpdate")
            return true;
        var enabled = self.senderName() && self.senderName().length > 0 && self.recipientName() && self.recipientName().length > 0 && (self.recipientEmail() && self.recipientEmail().length > 0 || self.recipientFanId);
        return enabled
    });
    self.useZipRegex = giftDetails._use_zip_regex;
    self.updateLocalization = function() {
        self.localization = Geo.localize(self.shippingCountryCode());
        self.shippingStateLabel(self.localization.labels.state);
        self.shippingStatePlaceholder(statePlaceholderText());
        self.shippingZIPLabel(self.localization.labels.zip);
        self.shippingZIPPlaceholder(zipPlaceholderText())
    }
    ;
    self.focused = false;
    self.focusOnError = function(item) {
        if (self.focused)
            return;
        var mediaMode = window.MediaView ? MediaView.mode : null;
        if (mediaMode == "phone") {
            var container = $(item).parent();
            setTimeout(function() {
                $("html, body").animate({
                    scrollTop: container.offset().top - 5
                })
            }, 10)
        }
        $("input", item).focus();
        self.focused = true
    }
    ;
    self.submit = function() {
        self.validateAll();
        if (self.hasValidationErrors)
            return;
        giftDetails = {
            sender_name: $.trim(self.senderName()),
            recipient_name: $.trim(self.recipientName()),
            recipient_email: $.trim(self.recipientEmail()),
            recipient_fan_id: $.trim(self.recipientFanId),
            shipping_street: $.trim(self.shippingStreet()),
            shipping_street_2: $.trim(self.shippingStreet2()),
            shipping_city: $.trim(self.shippingCity()),
            shipping_zip: $.trim(self.shippingZIP()),
            shipping_country_code: self.shippingCountryCode(),
            shipping_country_name: self.shippingCountry(),
            is_us_buyer: self.isUSBuyer()
        };
        if (self.shippingCountryCode() === "US") {
            giftDetails.shipping_state = self.shippingStateCode();
            giftDetails.shipping_state_name = self.shippingStateName()
        } else
            giftDetails.shipping_state = self.shippingState();
        if (self.senderNote() && !/^\s+$/.test(self.senderNote()))
            giftDetails.sender_note = self.senderNote().substring(0, 1E3);
        if ($.isFunction(submitCallback))
            submitCallback(giftDetails)
    }
    ;
    self.cancel = function() {
        if ($.isFunction(cancelCallback))
            cancelCallback()
    }
    ;
    self.senderName.validate = function(simple) {
        if (!self.senderName() || self.senderName().length === 0) {
            self.senderNameError(TM("Please enter your name."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-sender-name")
        } else if (self.senderName().length > 100) {
            self.senderNameError(TM("Your name must be less than 100 characters."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-sender-name")
        } else
            self.senderNameError("")
    }
    ;
    self.recipientName.validate = function(simple) {
        if (!self.recipientName() || self.recipientName().length === 0) {
            self.recipientNameError(TM("Please enter the recipient\u2019s name."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-recipient-name")
        } else if (self.recipientName().length > 100) {
            self.recipientNameError(TM("The recipient\u2019s name must be less than 100 characters."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-recipient-name")
        } else
            self.recipientNameError("")
    }
    ;
    self.recipientEmail.validate = function(simple) {
        if (self.recipientFanId)
            return;
        if (!self.recipientEmail() || self.recipientEmail().length === 0 || !simple && !GiftPanel.emailValid(self.recipientEmail())) {
            self.recipientEmailError(TM("Please enter an email like: lucky@duck.com"));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-recipient-email")
        } else if (self.recipientEmail().length > 100) {
            self.recipientEmailError(TM("Recipient\u2019s email must be less than 100 characters."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-recipient-email")
        } else
            self.recipientEmailError("")
    }
    ;
    self.shippingStreet.validate = function(simple) {
        if (!self.shippingStreet() || self.shippingStreet().length === 0) {
            self.shippingStreetError(TM("Please enter the recipient\u2019s address."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-street")
        } else if (self.shippingStreet().length > 150) {
            self.shippingStreetError(TM("Recipient\u2019s address must be less than 150 characters."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-street")
        } else
            self.shippingStreetError("")
    }
    ;
    self.shippingStreet2.validate = function(simple) {
        if (self.shippingStreet2() && self.shippingStreet2().length > 150) {
            self.shippingStreet2Error(TM("Recipient\u2019s address must be less than 150 characters."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-street-2")
        } else
            self.shippingStreet2Error("")
    }
    ;
    self.shippingCity.validate = function(simple) {
        if (!self.shippingCity() || self.shippingCity().length === 0) {
            self.shippingCityError(TM("Please enter the recipient\u2019s city."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-city")
        } else if (self.shippingCity().length > 150) {
            self.shippingCityError(TM("Recipient\u2019s city must be less than 150 characters."));
            self.hasValidationErrors = true;
            self.focusOnError("#gift-city")
        } else
            self.shippingCityError("")
    }
    ;
    self.shippingState.validate = function(simple) {
        if (self.shippingCountryCode() === "US")
            return;
        var state = self.localization.labels.state ? self.localization.labels.state.toLowerCase() : null;
        if (!state || self.localization.isFallback)
            return;
        if ((!self.shippingState() || self.shippingState().length === 0) && !self.localization.optionalParameters.state) {
            var errorText = self.errorTexts[state] ? self.errorTexts[state].error : self.errorTexts["state"].error;
            self.shippingStateError(errorText);
            self.hasValidationErrors = true;
            self.focusOnError("#gift-state")
        } else if (self.shippingState().length > 60) {
            errorText = self.errorTexts[state] ? self.errorTexts[state].tooLong : self.errorTexts["state"].tooLong;
            self.shippingStateError(errorText);
            self.hasValidationErrors = true;
            self.focusOnError("#gift-state")
        } else
            self.shippingStateError("")
    }
    ;
    self.shippingStateCode.validate = function(simple) {
        if (self.shippingCountryCode() !== "US")
            return;
        if (!simple && self.shippingStateCode() === "--") {
            self.shippingStateError(TM("Please enter the recipient\u2019s state."));
            self.hasValidationErrors = true
        } else
            self.shippingStateError("")
    }
    ;
    self.shippingZIP.validate = function(simple) {
        var zip = self.localization.labels.zip ? self.localization.labels.zip.toLowerCase().replace("zip", "ZIP") : null;
        if (!zip || self.localization.isFallback)
            return;
        if (self.shippingZIP())
            self.shippingZIP(self.shippingZIP().toUpperCase());
        var isValid = true;
        if (self.useZipRegex)
            isValid = self.localization.zipValidator.test(self.shippingZIP());
        if (!self.shippingZIP() || self.shippingZIP().length === 0 || !simple && !isValid) {
            var errorText = self.errorTexts[zip] ? self.errorTexts[zip].error : self.errorTexts["ZIP code"].error;
            self.shippingZIPError(errorText);
            self.hasValidationErrors = true;
            self.focusOnError("#gift-zip")
        } else if (self.shippingZIP().length > 20) {
            errorText = self.errorTexts[zip] ? self.errorTexts[zip].tooLong : self.errorTexts["ZIP code"].tooLong;
            self.shippingZIPError(errorText);
            self.hasValidationErrors = true;
            self.focusOnError("#gift-zip")
        } else
            self.shippingZIPError("")
    }
    ;
    self.validateAll = function() {
        self.hasValidationErrors = false;
        self.focused = false;
        if (validationOverride === "addressUpdate") {
            self.shippingStreet.validate();
            self.shippingStreet2.validate();
            self.shippingCity.validate();
            self.shippingZIP.validate();
            self.shippingState.validate();
            self.shippingStateCode.validate()
        } else {
            self.senderName.validate();
            self.recipientName.validate();
            self.recipientEmail.validate();
            self.shippingStreet.validate();
            self.shippingStreet2.validate();
            self.shippingCity.validate();
            self.shippingZIP.validate();
            self.shippingState.validate();
            self.shippingStateCode.validate()
        }
    }
};
CurrencyCodes = [{
    "common_name": "Afghanistan",
    "code": "AF",
    "currency_code": "USD"
}, {
    "common_name": "Aland",
    "code": "AX",
    "currency_code": "EUR"
}, {
    "common_name": "Albania",
    "code": "AL",
    "currency_code": "ALL"
}, {
    "common_name": "Algeria",
    "code": "DZ",
    "currency_code": "DZD"
}, {
    "common_name": "American Samoa",
    "code": "AS",
    "currency_code": "USD"
}, {
    "common_name": "Andorra",
    "code": "AD",
    "currency_code": "EUR"
}, {
    "common_name": "Angola",
    "code": "AO",
    "currency_code": "USD"
}, {
    "common_name": "Anguilla",
    "code": "AI",
    "currency_code": "XCD"
}, {
    "common_name": "Antarctica",
    "code": "AQ",
    "currency_code": "USD"
}, {
    "common_name": "Antigua and Barbuda",
    "code": "AG",
    "currency_code": "XCD"
}, {
    "common_name": "Argentina",
    "code": "AR",
    "currency_code": "ARS"
}, {
    "common_name": "Armenia",
    "code": "AM",
    "currency_code": "EUR"
}, {
    "common_name": "Aruba",
    "code": "AW",
    "currency_code": "AWG"
}, {
    "common_name": "Ascension",
    "code": "AC",
    "currency_code": "SHP"
}, {
    "common_name": "Australia",
    "code": "AU",
    "currency_code": "AUD"
}, {
    "common_name": "Austria",
    "code": "AT",
    "currency_code": "EUR"
}, {
    "common_name": "Azerbaijan",
    "code": "AZ",
    "currency_code": "USD"
}, {
    "common_name": "Bahamas",
    "code": "BS",
    "currency_code": "BSD"
}, {
    "common_name": "Bahrain",
    "code": "BH",
    "currency_code": "BHD"
}, {
    "common_name": "Bangladesh",
    "code": "BD",
    "currency_code": "BDT"
}, {
    "common_name": "Barbados",
    "code": "BB",
    "currency_code": "BBD"
}, {
    "common_name": "Belarus",
    "code": "BY",
    "currency_code": "EUR"
}, {
    "common_name": "Belgium",
    "code": "BE",
    "currency_code": "EUR"
}, {
    "common_name": "Belize",
    "code": "BZ",
    "currency_code": "BZD"
}, {
    "common_name": "Benin",
    "code": "BJ",
    "currency_code": "XOF"
}, {
    "common_name": "Bermuda",
    "code": "BM",
    "currency_code": "BMD"
}, {
    "common_name": "Bhutan",
    "code": "BT",
    "currency_code": "BTN"
}, {
    "common_name": "Bolivia",
    "code": "BO",
    "currency_code": "BOB"
}, {
    "common_name": "Bosnia and Herzegovina",
    "code": "BA",
    "currency_code": "EUR"
}, {
    "common_name": "Botswana",
    "code": "BW",
    "currency_code": "BWP"
}, {
    "common_name": "Bouvet Island",
    "code": "BV",
    "currency_code": "NOK"
}, {
    "common_name": "Brazil",
    "code": "BR",
    "currency_code": "BRL"
}, {
    "common_name": "British Indian Ocean Territory",
    "code": "IO",
    "currency_code": "USD"
}, {
    "common_name": "Brunei",
    "code": "BN",
    "currency_code": "BND"
}, {
    "common_name": "Bulgaria",
    "code": "BG",
    "currency_code": "EUR"
}, {
    "common_name": "Burkina Faso",
    "code": "BF",
    "currency_code": "XOF"
}, {
    "common_name": "Burundi",
    "code": "BI",
    "currency_code": "BIF"
}, {
    "common_name": "Cambodia",
    "code": "KH",
    "currency_code": "KHR"
}, {
    "common_name": "Cameroon",
    "code": "CM",
    "currency_code": "XAF"
}, {
    "common_name": "Canada",
    "code": "CA",
    "currency_code": "CAD"
}, {
    "common_name": "Cape Verde",
    "code": "CV",
    "currency_code": "CVE"
}, {
    "common_name": "Caribbean Netherlands",
    "code": "BQ",
    "currency_code": "USD"
}, {
    "common_name": "Cayman Islands",
    "code": "KY",
    "currency_code": "KYD"
}, {
    "common_name": "Central African Republic",
    "code": "CF",
    "currency_code": "XAF"
}, {
    "common_name": "Chad",
    "code": "TD",
    "currency_code": "XAF"
}, {
    "common_name": "Chile",
    "code": "CL",
    "currency_code": "CLP"
}, {
    "common_name": "China",
    "code": "CN",
    "currency_code": "CNY"
}, {
    "common_name": "Christmas Island",
    "code": "CX",
    "currency_code": "AUD"
}, {
    "common_name": "Cocos (Keeling) Islands",
    "code": "CC",
    "currency_code": "AUD"
}, {
    "common_name": "Colombia",
    "code": "CO",
    "currency_code": "COP"
}, {
    "common_name": "Comoros",
    "code": "KM",
    "currency_code": "KMF"
}, {
    "common_name": "Congo (Brazzaville)",
    "code": "CG",
    "currency_code": "XAF"
}, {
    "common_name": "Congo (Kinshasa)",
    "code": "CD",
    "currency_code": "USD"
}, {
    "common_name": "Cook Islands",
    "code": "CK",
    "currency_code": "NZD"
}, {
    "common_name": "Costa Rica",
    "code": "CR",
    "currency_code": "CRC"
}, {
    "common_name": "Cote d'Ivoire (Ivory Coast)",
    "code": "CI",
    "currency_code": "XOF"
}, {
    "common_name": "Croatia",
    "code": "HR",
    "currency_code": "HRK"
}, {
    "common_name": "Cuba",
    "code": "CU",
    "currency_code": "USD"
}, {
    "common_name": "Cura\u00c3\u00a7ao",
    "code": "CW",
    "currency_code": "ANG"
}, {
    "common_name": "Cyprus",
    "code": "CY",
    "currency_code": "EUR"
}, {
    "common_name": "Czech Republic",
    "code": "CZ",
    "currency_code": "CZK"
}, {
    "common_name": "Denmark",
    "code": "DK",
    "currency_code": "DKK"
}, {
    "common_name": "Djibouti",
    "code": "DJ",
    "currency_code": "DJF"
}, {
    "common_name": "Dominica",
    "code": "DM",
    "currency_code": "XCD"
}, {
    "common_name": "Dominican Republic",
    "code": "DO",
    "currency_code": "DOP"
}, {
    "common_name": "Ecuador",
    "code": "EC",
    "currency_code": "USD"
}, {
    "common_name": "Egypt",
    "code": "EG",
    "currency_code": "EGP"
}, {
    "common_name": "El Salvador",
    "code": "SV",
    "currency_code": "USD"
}, {
    "common_name": "Equatorial Guinea",
    "code": "GQ",
    "currency_code": "XAF"
}, {
    "common_name": "Eritrea",
    "code": "ER",
    "currency_code": "USD"
}, {
    "common_name": "Estonia",
    "code": "EE",
    "currency_code": "EUR"
}, {
    "common_name": "Ethiopia",
    "code": "ET",
    "currency_code": "ETB"
}, {
    "common_name": "Falkland Islands (Islas Malvinas)",
    "code": "FK",
    "currency_code": "FKP"
}, {
    "common_name": "Faroe Islands",
    "code": "FO",
    "currency_code": "DKK"
}, {
    "common_name": "Fiji",
    "code": "FJ",
    "currency_code": "USD"
}, {
    "common_name": "Finland",
    "code": "FI",
    "currency_code": "EUR"
}, {
    "common_name": "France",
    "code": "FR",
    "currency_code": "EUR"
}, {
    "common_name": "French Guiana",
    "code": "GF",
    "currency_code": "EUR"
}, {
    "common_name": "French Polynesia",
    "code": "PF",
    "currency_code": "XPF"
}, {
    "common_name": "French Southern Territories",
    "code": "TF",
    "currency_code": "EUR"
}, {
    "common_name": "Gabon",
    "code": "GA",
    "currency_code": "XAF"
}, {
    "common_name": "Gambia",
    "code": "GM",
    "currency_code": "GMD"
}, {
    "common_name": "Georgia",
    "code": "GE",
    "currency_code": "EUR"
}, {
    "common_name": "Germany",
    "code": "DE",
    "currency_code": "EUR"
}, {
    "common_name": "Ghana",
    "code": "GH",
    "currency_code": "USD"
}, {
    "common_name": "Gibraltar",
    "code": "GI",
    "currency_code": "GIP"
}, {
    "common_name": "Greece",
    "code": "GR",
    "currency_code": "EUR"
}, {
    "common_name": "Greenland",
    "code": "GL",
    "currency_code": "DKK"
}, {
    "common_name": "Grenada",
    "code": "GD",
    "currency_code": "XCD"
}, {
    "common_name": "Guadeloupe",
    "code": "GP",
    "currency_code": "EUR"
}, {
    "common_name": "Guam",
    "code": "GU",
    "currency_code": "USD"
}, {
    "common_name": "Guatemala",
    "code": "GT",
    "currency_code": "GTQ"
}, {
    "common_name": "Guernsey",
    "code": "GG",
    "currency_code": "GBP"
}, {
    "common_name": "Guinea",
    "code": "GN",
    "currency_code": "GNF"
}, {
    "common_name": "Guinea-Bissau",
    "code": "GW",
    "currency_code": "XOF"
}, {
    "common_name": "Guyana",
    "code": "GY",
    "currency_code": "GYD"
}, {
    "common_name": "Haiti",
    "code": "HT",
    "currency_code": "HTG"
}, {
    "common_name": "Heard Island and McDonald Islands",
    "code": "HM",
    "currency_code": "AUD"
}, {
    "common_name": "Honduras",
    "code": "HN",
    "currency_code": "HNL"
}, {
    "common_name": "Hong Kong",
    "code": "HK",
    "currency_code": "HKD"
}, {
    "common_name": "Hungary",
    "code": "HU",
    "currency_code": "HUF"
}, {
    "common_name": "Hyrule",
    "code": "HY",
    "currency_code": "RUP"
}, {
    "common_name": "Iceland",
    "code": "IS",
    "currency_code": "ISK"
}, {
    "common_name": "India",
    "code": "IN",
    "currency_code": "INR"
}, {
    "common_name": "Indonesia",
    "code": "ID",
    "currency_code": "IDR"
}, {
    "common_name": "Iran",
    "code": "IR",
    "currency_code": "USD"
}, {
    "common_name": "Iraq",
    "code": "IQ",
    "currency_code": "IQD"
}, {
    "common_name": "Ireland",
    "code": "IE",
    "currency_code": "EUR"
}, {
    "common_name": "Isle of Man",
    "code": "IM",
    "currency_code": "GBP"
}, {
    "common_name": "Israel",
    "code": "IL",
    "currency_code": "ILS"
}, {
    "common_name": "Italy",
    "code": "IT",
    "currency_code": "EUR"
}, {
    "common_name": "Jamaica",
    "code": "JM",
    "currency_code": "JMD"
}, {
    "common_name": "Japan",
    "code": "JP",
    "currency_code": "JPY"
}, {
    "common_name": "Jersey",
    "code": "JE",
    "currency_code": "GBP"
}, {
    "common_name": "Jordan",
    "code": "JO",
    "currency_code": "JOD"
}, {
    "common_name": "Kazakhstan",
    "code": "KZ",
    "currency_code": "KZT"
}, {
    "common_name": "Kenya",
    "code": "KE",
    "currency_code": "KES"
}, {
    "common_name": "Kiribati",
    "code": "KI",
    "currency_code": "AUD"
}, {
    "common_name": "Kosovo",
    "code": "XK",
    "currency_code": "EUR"
}, {
    "common_name": "Kuwait",
    "code": "KW",
    "currency_code": "KWD"
}, {
    "common_name": "Kyrgyzstan",
    "code": "KG",
    "currency_code": "USD"
}, {
    "common_name": "Laos",
    "code": "LA",
    "currency_code": "LAK"
}, {
    "common_name": "Latvia",
    "code": "LV",
    "currency_code": "EUR"
}, {
    "common_name": "Lebanon",
    "code": "LB",
    "currency_code": "LBP"
}, {
    "common_name": "Lesotho",
    "code": "LS",
    "currency_code": "LSL"
}, {
    "common_name": "Liberia",
    "code": "LR",
    "currency_code": "LRD"
}, {
    "common_name": "Libya",
    "code": "LY",
    "currency_code": "LYD"
}, {
    "common_name": "Liechtenstein",
    "code": "LI",
    "currency_code": "CHF"
}, {
    "common_name": "Lithuania",
    "code": "LT",
    "currency_code": "EUR"
}, {
    "common_name": "Luxembourg",
    "code": "LU",
    "currency_code": "EUR"
}, {
    "common_name": "Macau",
    "code": "MO",
    "currency_code": "MOP"
}, {
    "common_name": "Macedonia",
    "code": "MK",
    "currency_code": "MKD"
}, {
    "common_name": "Madagascar",
    "code": "MG",
    "currency_code": "USD"
}, {
    "common_name": "Malawi",
    "code": "MW",
    "currency_code": "MWK"
}, {
    "common_name": "Malaysia",
    "code": "MY",
    "currency_code": "MYR"
}, {
    "common_name": "Maldives",
    "code": "MV",
    "currency_code": "MVR"
}, {
    "common_name": "Mali",
    "code": "ML",
    "currency_code": "XOF"
}, {
    "common_name": "Malta",
    "code": "MT",
    "currency_code": "EUR"
}, {
    "common_name": "Marshall Islands",
    "code": "MH",
    "currency_code": "USD"
}, {
    "common_name": "Martinique",
    "code": "MQ",
    "currency_code": "EUR"
}, {
    "common_name": "Mauritania",
    "code": "MR",
    "currency_code": "MRO"
}, {
    "common_name": "Mauritius",
    "code": "MU",
    "currency_code": "MUR"
}, {
    "common_name": "Mayotte",
    "code": "YT",
    "currency_code": "EUR"
}, {
    "common_name": "Mexico",
    "code": "MX",
    "currency_code": "MXN"
}, {
    "common_name": "Micronesia",
    "code": "FM",
    "currency_code": "USD"
}, {
    "common_name": "Midway Islands",
    "code": "UM",
    "currency_code": "USD"
}, {
    "common_name": "Moldova",
    "code": "MD",
    "currency_code": "MDL"
}, {
    "common_name": "Monaco",
    "code": "MC",
    "currency_code": "EUR"
}, {
    "common_name": "Mongolia",
    "code": "MN",
    "currency_code": "MNT"
}, {
    "common_name": "Montenegro",
    "code": "ME",
    "currency_code": "EUR"
}, {
    "common_name": "Montserrat",
    "code": "MS",
    "currency_code": "XCD"
}, {
    "common_name": "Morocco",
    "code": "MA",
    "currency_code": "MAD"
}, {
    "common_name": "Mozambique",
    "code": "MZ",
    "currency_code": "USD"
}, {
    "common_name": "Myanmar",
    "code": "MM",
    "currency_code": "MMK"
}, {
    "common_name": "Namibia",
    "code": "NA",
    "currency_code": "NAD"
}, {
    "common_name": "Nauru",
    "code": "NR",
    "currency_code": "AUD"
}, {
    "common_name": "Nepal",
    "code": "NP",
    "currency_code": "NPR"
}, {
    "common_name": "Netherlands",
    "code": "NL",
    "currency_code": "EUR"
}, {
    "common_name": "Netherlands Antilles",
    "code": "AN",
    "currency_code": "ANG"
}, {
    "common_name": "New Caledonia",
    "code": "NC",
    "currency_code": "XPF"
}, {
    "common_name": "New Zealand",
    "code": "NZ",
    "currency_code": "NZD"
}, {
    "common_name": "Nicaragua",
    "code": "NI",
    "currency_code": "NIO"
}, {
    "common_name": "Niger",
    "code": "NE",
    "currency_code": "XOF"
}, {
    "common_name": "Nigeria",
    "code": "NG",
    "currency_code": "NGN"
}, {
    "common_name": "Niue",
    "code": "NU",
    "currency_code": "NZD"
}, {
    "common_name": "Norfolk Island",
    "code": "NF",
    "currency_code": "AUD"
}, {
    "common_name": "North Korea",
    "code": "KP",
    "currency_code": "KPW"
}, {
    "common_name": "Northern Mariana Islands",
    "code": "MP",
    "currency_code": "USD"
}, {
    "common_name": "Norway",
    "code": "NO",
    "currency_code": "NOK"
}, {
    "common_name": "Oman",
    "code": "OM",
    "currency_code": "OMR"
}, {
    "common_name": "Pakistan",
    "code": "PK",
    "currency_code": "PKR"
}, {
    "common_name": "Palau",
    "code": "PW",
    "currency_code": "USD"
}, {
    "common_name": "Palestine",
    "code": "PS",
    "currency_code": "ILS"
}, {
    "common_name": "Panama",
    "code": "PA",
    "currency_code": "PAB"
}, {
    "common_name": "Papua New Guinea",
    "code": "PG",
    "currency_code": "PGK"
}, {
    "common_name": "Paraguay",
    "code": "PY",
    "currency_code": "PYG"
}, {
    "common_name": "Peru",
    "code": "PE",
    "currency_code": "PEN"
}, {
    "common_name": "Philippines",
    "code": "PH",
    "currency_code": "PHP"
}, {
    "common_name": "Pitcairn Islands",
    "code": "PN",
    "currency_code": "NZD"
}, {
    "common_name": "Poland",
    "code": "PL",
    "currency_code": "PLN"
}, {
    "common_name": "Portugal",
    "code": "PT",
    "currency_code": "EUR"
}, {
    "common_name": "Puerto Rico",
    "code": "PR",
    "currency_code": "USD"
}, {
    "common_name": "Qatar",
    "code": "QA",
    "currency_code": "QAR"
}, {
    "common_name": "Reunion",
    "code": "RE",
    "currency_code": "EUR"
}, {
    "common_name": "Romania",
    "code": "RO",
    "currency_code": "EUR"
}, {
    "common_name": "Russia",
    "code": "RU",
    "currency_code": "RUB"
}, {
    "common_name": "Rwanda",
    "code": "RW",
    "currency_code": "USD"
}, {
    "common_name": "Saint Barth\u00c3\u00a9lemy",
    "code": "BL",
    "currency_code": "EUR"
}, {
    "common_name": "Saint Helena",
    "code": "SH",
    "currency_code": "SHP"
}, {
    "common_name": "Saint Kitts and Nevis",
    "code": "KN",
    "currency_code": "XCD"
}, {
    "common_name": "Saint Lucia",
    "code": "LC",
    "currency_code": "XCD"
}, {
    "common_name": "Saint Martin",
    "code": "MF",
    "currency_code": "EUR"
}, {
    "common_name": "Saint Pierre and Miquelon",
    "code": "PM",
    "currency_code": "EUR"
}, {
    "common_name": "Saint Vincent and the Grenadines",
    "code": "VC",
    "currency_code": "XCD"
}, {
    "common_name": "Samoa",
    "code": "WS",
    "currency_code": "WST"
}, {
    "common_name": "San Marino",
    "code": "SM",
    "currency_code": "EUR"
}, {
    "common_name": "Sao Tome and Principe",
    "code": "ST",
    "currency_code": "STD"
}, {
    "common_name": "Saudi Arabia",
    "code": "SA",
    "currency_code": "SAR"
}, {
    "common_name": "Senegal",
    "code": "SN",
    "currency_code": "XOF"
}, {
    "common_name": "Serbia",
    "code": "RS",
    "currency_code": "EUR"
}, {
    "common_name": "Seychelles",
    "code": "SC",
    "currency_code": "SCR"
}, {
    "common_name": "Sierra Leone",
    "code": "SL",
    "currency_code": "SLL"
}, {
    "common_name": "Singapore",
    "code": "SG",
    "currency_code": "SGD"
}, {
    "common_name": "Sint Maarten",
    "code": "SX",
    "currency_code": "AWG"
}, {
    "common_name": "Slovakia",
    "code": "SK",
    "currency_code": "EUR"
}, {
    "common_name": "Slovenia",
    "code": "SI",
    "currency_code": "EUR"
}, {
    "common_name": "Solomon Islands",
    "code": "SB",
    "currency_code": "SBD"
}, {
    "common_name": "Somalia",
    "code": "SO",
    "currency_code": "SOS"
}, {
    "common_name": "South Africa",
    "code": "ZA",
    "currency_code": "ZAR"
}, {
    "common_name": "South Georgia and the South Sandwich Islands",
    "code": "GS",
    "currency_code": "GBP"
}, {
    "common_name": "South Korea",
    "code": "KR",
    "currency_code": "KRW"
}, {
    "common_name": "South Sudan",
    "code": "SS",
    "currency_code": "USD"
}, {
    "common_name": "Spain",
    "code": "ES",
    "currency_code": "EUR"
}, {
    "common_name": "Sri Lanka",
    "code": "LK",
    "currency_code": "LKR"
}, {
    "common_name": "Sudan",
    "code": "SD",
    "currency_code": "USD"
}, {
    "common_name": "Suriname",
    "code": "SR",
    "currency_code": "USD"
}, {
    "common_name": "Svalbard and Jan Mayen",
    "code": "SJ",
    "currency_code": "NOK"
}, {
    "common_name": "Swaziland",
    "code": "SZ",
    "currency_code": "SZL"
}, {
    "common_name": "Sweden",
    "code": "SE",
    "currency_code": "SEK"
}, {
    "common_name": "Switzerland",
    "code": "CH",
    "currency_code": "CHF"
}, {
    "common_name": "Syria",
    "code": "SY",
    "currency_code": "SYP"
}, {
    "common_name": "Taiwan",
    "code": "TW",
    "currency_code": "TWD"
}, {
    "common_name": "Tajikistan",
    "code": "TJ",
    "currency_code": "USD"
}, {
    "common_name": "Tanzania",
    "code": "TZ",
    "currency_code": "TZS"
}, {
    "common_name": "Thailand",
    "code": "TH",
    "currency_code": "THB"
}, {
    "common_name": "Timor-Leste",
    "code": "TL",
    "currency_code": "USD"
}, {
    "common_name": "Togo",
    "code": "TG",
    "currency_code": "XOF"
}, {
    "common_name": "Tokelau",
    "code": "TK",
    "currency_code": "NZD"
}, {
    "common_name": "Tonga",
    "code": "TO",
    "currency_code": "TOP"
}, {
    "common_name": "Trinidad and Tobago",
    "code": "TT",
    "currency_code": "TTD"
}, {
    "common_name": "Tristan da Cunha",
    "code": "TA",
    "currency_code": "SHP"
}, {
    "common_name": "Tunisia",
    "code": "TN",
    "currency_code": "TND"
}, {
    "common_name": "Turkey",
    "code": "TR",
    "currency_code": "TRY"
}, {
    "common_name": "Turkmenistan",
    "code": "TM",
    "currency_code": "USD"
}, {
    "common_name": "Turks and Caicos Islands",
    "code": "TC",
    "currency_code": "USD"
}, {
    "common_name": "Tuvalu",
    "code": "TV",
    "currency_code": "AUD"
}, {
    "common_name": "Uganda",
    "code": "UG",
    "currency_code": "UGX"
}, {
    "common_name": "Ukraine",
    "code": "UA",
    "currency_code": "UAH"
}, {
    "common_name": "United Arab Emirates",
    "code": "AE",
    "currency_code": "AED"
}, {
    "common_name": "United Kingdom",
    "code": "GB",
    "currency_code": "GBP"
}, {
    "common_name": "United States",
    "code": "US",
    "currency_code": "USD"
}, {
    "common_name": "Uruguay",
    "code": "UY",
    "currency_code": "UYU"
}, {
    "common_name": "Uzbekistan",
    "code": "UZ",
    "currency_code": "USD"
}, {
    "common_name": "Vanuatu",
    "code": "VU",
    "currency_code": "VUV"
}, {
    "common_name": "Vatican City",
    "code": "VA",
    "currency_code": "EUR"
}, {
    "common_name": "Venezuela",
    "code": "VE",
    "currency_code": "USD"
}, {
    "common_name": "Viet Nam",
    "code": "VN",
    "currency_code": "USD"
}, {
    "common_name": "Virgin Islands, British",
    "code": "VG",
    "currency_code": "USD"
}, {
    "common_name": "Virgin Islands, U.S.",
    "code": "VI",
    "currency_code": "USD"
}, {
    "common_name": "Wallis and Futuna",
    "code": "WF",
    "currency_code": "XPF"
}, {
    "common_name": "Western Sahara",
    "code": "EH",
    "currency_code": "MAD"
}, {
    "common_name": "Yemen",
    "code": "YE",
    "currency_code": "YER"
}, {
    "common_name": "Zambia",
    "code": "ZM",
    "currency_code": "ZMW"
}, {
    "common_name": "Zimbabwe",
    "code": "ZW",
    "currency_code": "USD"
}];
if ('undefined' === typeof window.Templ) {
    Log.server('Premature template registration: ' + ["cart/_img_preload", "cart/payment_pref", "cart/change_payment_method", "cart/sidecart_item", "cart/sidecart_summary", "cart/country_pref", "_package_listing_title", "_package_listing_price"], 'warn');
} else {
    Templ.register({
        "cart/_img_preload": ["<img src=\"", {
            "filters": [["a", []]],
            "name": "path",
            "type": "variable"
        }, "\" alt=\"preload image\">"],
        "cart/payment_pref": ["<!-- payment_pref.liquid -->\n<div class=\"payment-pref-dlg\">\n    <form>\n        <div>\n            <input name=\"payment-type\" value=\"p\" type=\"radio\" checked id=\"pick-paypal\">\n            <label class=\"paypal\" for=\"pick-paypal\">", {
            "nodelist": ["PayPal"],
            "type": "translate"
        }, "</label>\n        </div>\n        <div>\n            <input name=\"payment-type\" value=\"c\" type=\"radio\" id=\"pick-credit-card\">\n            <label class=\"credit-card\" for=\"pick-credit-card\"><span>", {
            "nodelist": ["Credit card"],
            "type": "translate"
        }, "</span>\n                <ul class=\"we-accept-these-cards\">\n                    <li class=\"icon-cc visa\"></li>\n                    <li class=\"icon-cc mastercard\"></li>\n                    ", {
            "blocks": [{
                "attachment": ["\n                        <li class=\"icon-cc discover\"></li>\n                        <li class=\"icon-cc amex\"></li>\n                    "],
                "expression": "!non_usd_cardable_items ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n                </ul>\n            </label>\n        </div>\n       <button class=\"proceed\">", {
            "nodelist": ["Proceed to payment"],
            "type": "translate"
        }, "</button>\n    </form>\n    <div class=\"paypal-wait-msg\">\n        <span>", {
            "nodelist": ["You’ll now be taken to PayPal to complete your payment..."],
            "type": "translate"
        }, "</span>\n    </div>\n</div>\n"],
        "cart/change_payment_method": ["\n<!-- change_payment_method.liquid -->\n<div class=\"change-payment-method-dlg\">\n    <div data-bind=\"click: changeCardDetails\" class=\"row\">\n        <span class=\"credit-card\">", {
            "nodelist": ["Change card details"],
            "type": "translate"
        }, "</span>\n        ", {
            "blocks": [{
                "attachment": ["\n            <div class=\"saved-card-details\">\n                <span class=\"icon-cc ", {
                    "filters": [["a", []]],
                    "name": "savedCard.brand_slug",
                    "type": "variable"
                }, "\">", {
                    "filters": [["h", []]],
                    "name": "savedCard.brand_slug",
                    "type": "variable"
                }, "</span>\n                <span class=\"last-4\">x-", {
                    "filters": [["h", []]],
                    "name": "savedCard.last4",
                    "type": "variable"
                }, "</span>\n            </div>\n        "],
                "expression": "savedCard ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    </div>\n    <div data-bind=\"click: startPayPalFlow\" class=\"row\">\n        <span class=\"paypal\" for=\"pick-paypal\">", {
            "nodelist": ["Check out with PayPal"],
            "type": "translate"
        }, "</span>\n    </div>\n</div>\n"],
        "cart/sidecart_item": ["<div class=\"cartItemReveal reveal\">\n<div class=\"cartItemContents\">\n", {
            "expression": "item.item_title ",
            "type": "let",
            "variable": "description"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["     ", {
                    "nodelist": [{
                        "filters": [],
                        "name": "item.item_title2",
                        "type": "variable"
                    }, ", ", {
                        "filters": [],
                        "name": "description",
                        "type": "variable"
                    }],
                    "to": "description",
                    "type": "capture"
                }],
                "expression": "item.item_title2 && media_mode != \"phone\" ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": [{
                    "nodelist": [{
                        "nodelist": ["", {
                            "filters": [],
                            "name": "description",
                            "type": "variable"
                        }, ", digital album"],
                        "type": "translate"
                    }],
                    "to": "description",
                    "type": "capture"
                }],
                "expression": "item.item_type == 'a' && media_mode != \"phone\" ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": [{
                    "nodelist": [{
                        "nodelist": ["", {
                            "filters": [],
                            "name": "description",
                            "type": "variable"
                        }, ", digital track"],
                        "type": "translate"
                    }],
                    "to": "description",
                    "type": "capture"
                }],
                "expression": "item.item_type == 't' && media_mode != \"phone\" ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "nodelist": ["\n        ", {
                        "nodelist": ["", {
                            "filters": [],
                            "name": "item.band_name",
                            "type": "variable"
                        }, ", full digital discography (", {
                            "nodelist": [{
                                "filters": [["h", []]],
                                "name": "item.releases",
                                "type": "variable"
                            }],
                            "type": "translateVariable",
                            "var_name": "num"
                        }, " releases)"],
                        "type": "translate"
                    }, "\n    "],
                    "to": "description",
                    "type": "capture"
                }, "\n"],
                "expression": "item.item_type == 'b' && media_mode != \"phone\" ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": ["     ", {
                    "nodelist": [{
                        "filters": [],
                        "name": "description",
                        "type": "variable"
                    }, ", ", {
                        "filters": [],
                        "name": "item.option_name",
                        "type": "variable"
                    }],
                    "to": "description",
                    "type": "capture"
                }],
                "expression": "item.option_name && media_mode != \"phone\" ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": ["    ", {
                    "nodelist": [{
                        "nodelist": ["", {
                            "filters": [],
                            "name": "description",
                            "type": "variable"
                        }, ", quantity ", {
                            "nodelist": [{
                                "filters": [],
                                "name": "item.quantity",
                                "type": "variable"
                            }],
                            "type": "translateVariable",
                            "var_name": "num"
                        }, ""],
                        "type": "translate"
                    }],
                    "to": "description",
                    "type": "capture"
                }],
                "expression": "item.quantity > 1 && media_phone != \"phone\" ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n", {
            "blocks": [{
                "attachment": ["     ", {
                    "nodelist": [{
                        "nodelist": ["", {
                            "filters": [],
                            "name": "description",
                            "type": "variable"
                        }, " (no longer available)"],
                        "type": "translate"
                    }],
                    "to": "description",
                    "type": "capture"
                }],
                "expression": "item.unavailable ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "nodelist": [{
                                "nodelist": ["Digital Album"],
                                "type": "translate"
                            }],
                            "to": "item_type_disp",
                            "type": "capture"
                        }, "\n    "],
                        "expression": "item.item_type == 'a' && !item.item_title2 ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n    ", {
                            "nodelist": [{
                                "nodelist": ["Digital Track"],
                                "type": "translate"
                            }],
                            "to": "item_type_disp",
                            "type": "capture"
                        }, "\n    "],
                        "expression": "item.item_type == 't' ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        ", {
                            "nodelist": [{
                                "nodelist": ["Full Digital Discography"],
                                "type": "translate"
                            }],
                            "to": "item_type_disp",
                            "type": "capture"
                        }, "\n        ", {
                            "expression": "item.band_name ",
                            "type": "let",
                            "variable": "description"
                        }, "\n    "],
                        "expression": "item.item_type == 'b' ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        ", {
                            "expression": "description ",
                            "type": "let",
                            "variable": "item_type_disp"
                        }, "\n        ", {
                            "expression": "item.item_title2 ",
                            "type": "let",
                            "variable": "description"
                        }, "\n    "],
                        "expression": "item.item_title2 ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n    <div class=\"thumb ", {
                    "blocks": [{
                        "attachment": ["package"],
                        "expression": "item.item_type == 'p' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\"", {
                    "blocks": [{
                        "attachment": [" style=\"background-image:url(", {
                            "filters": [["art_url", ["\"art_embedded_player_large\""]], ["a", []]],
                            "name": "item.art_id",
                            "type": "variable"
                        }, ")\""],
                        "expression": "item.art_id ",
                        "type": "ncondition"
                    }, {
                        "attachment": [" style=\"background-image:url(", {
                            "filters": [["image_url", ["\"package_thumb\""]], ["a", []]],
                            "name": "item.image_id",
                            "type": "variable"
                        }, ")\""],
                        "expression": "item.image_id ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "></div>\n\n    ", {
                    "blocks": [{
                        "attachment": ["<span class=\"gifticon bc-ui bc-ui-m\"></span>"],
                        "expression": "item.is_gift ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n    <a class=\"itemName notSkinnable", {
                    "blocks": [{
                        "attachment": [" no-art"],
                        "expression": "item.item_type == 'b' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" href=\"", {
                    "filters": [["a", []]],
                    "name": "item.url",
                    "type": "variable"
                }, "\">", {
                    "filters": [["a", []]],
                    "name": "description",
                    "type": "variable"
                }, "</a>\n    <span class=\"item-price\">", {
                    "filters": [],
                    "name": "item.disp_price",
                    "type": "variable"
                }, "</span>\n    <span class=\"item-type\">", {
                    "filters": [["a", []]],
                    "name": "item_type_disp",
                    "type": "variable"
                }, "</span>\n    \n    <br>\n    <a class=\"delete notSkinnable\" href=\"#\"><span>&#215</span></a>\n"],
                "expression": "media_mode == \"phone\" ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    <p>\n        ", {
                    "blocks": [{
                        "attachment": ["<span class=\"gifticon bc-ui bc-ui-m\"></span>"],
                        "expression": "item.is_gift ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n        <a class=\"itemName notSkinnable\" href=\"", {
                    "filters": [["a", []]],
                    "name": "item.url",
                    "type": "variable"
                }, "\">", {
                    "filters": [["h", []]],
                    "name": "description",
                    "type": "variable"
                }, "</a>\n        <br>\n        <a class=\"delete notSkinnable\" href=\"#\"><span>x</span></a>\n        <span class=\"price\">", {
                    "filters": [],
                    "name": "item.disp_price",
                    "type": "variable"
                }, "</span>\n    </p>\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n</div>\n</div>\n"],
        "cart/sidecart_summary": [{
            "expression": "(currency == 'RUP') ",
            "type": "let",
            "variable": "hyrule"
        }, "\n", {
            "expression": "(hyrule && disp_total == '99') ",
            "type": "let",
            "variable": "wallet"
        }, "\n\n<table id=\"summary\">\n  ", {
            "blocks": [{
                "attachment": ["\n    <tr>\n        <th class=\"small\">", {
                    "nodelist": ["subtotal"],
                    "type": "translate"
                }, "</th>\n        <td id=\"cartSubtotal\" class=\"small numeric\">", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [],
                            "name": "currency_prefix",
                            "type": "variable"
                        }],
                        "expression": "media_mode == 'phone' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, {
                    "filters": [],
                    "name": "disp_subtotal",
                    "type": "variable"
                }, "</td>\n        <td class=\"currency\"><a class=\"country-picker\" href=\"/no_js/country_picker\">", {
                    "filters": [],
                    "name": "currency",
                    "type": "variable"
                }, "</a></td>\n    </tr>\n  "],
                "expression": "has_shipping || has_tax ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n  ", {
            "blocks": [{
                "attachment": ["\n    <tr", {
                    "blocks": [{
                        "attachment": [" class=\"shipping\""],
                        "expression": "!has_tax ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, ">\n        <th class=\"small\">", {
                    "nodelist": ["shipping"],
                    "type": "translate"
                }, "</th>\n        <td id=\"cartShipping\" class=\"small numeric\">", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [],
                            "name": "currency_prefix",
                            "type": "variable"
                        }],
                        "expression": "media_mode == 'phone' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, {
                    "filters": [],
                    "name": "disp_shipping",
                    "type": "variable"
                }, "</span></td>\n        <td class=\"currency\"><a class=\"country-picker\" href=\"/no_js/country_picker\">", {
                    "filters": [],
                    "name": "currency",
                    "type": "variable"
                }, "</a></td>\n    </tr>\n  "],
                "expression": "has_shipping ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n  ", {
            "blocks": [{
                "attachment": ["\n    <tr class=\"shipping\">\n        <th class=\"small\">", {
                    "nodelist": ["tax"],
                    "type": "translate"
                }, "</th>\n        <td id=\"cartTax\" class=\"small numeric\">", {
                    "blocks": [{
                        "attachment": [{
                            "filters": [],
                            "name": "currency_prefix",
                            "type": "variable"
                        }],
                        "expression": "media_mode == 'phone' ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, {
                    "filters": [],
                    "name": "disp_tax",
                    "type": "variable"
                }, "</span></td>\n        <td class=\"currency\"><a class=\"country-picker\" href=\"/no_js/country_picker\">", {
                    "filters": [],
                    "name": "currency",
                    "type": "variable"
                }, "</a></td>\n    </tr>\n  "],
                "expression": "has_tax ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n    <tr class=\"total\">\n        <th>", {
            "blocks": [{
                "attachment": [{
                    "nodelist": ["Total:"],
                    "type": "translate"
                }],
                "expression": "media_mode == 'phone' && header_rework_2018 ",
                "type": "ncondition"
            }, {
                "attachment": [{
                    "nodelist": ["total"],
                    "type": "translate"
                }],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "</th>\n        <td class=\"numeric", {
            "blocks": [{
                "attachment": [" notable"],
                "expression": "wallet ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\">", {
            "blocks": [{
                "attachment": [{
                    "filters": [],
                    "name": "currency_prefix",
                    "type": "variable"
                }],
                "expression": "media_mode == 'phone' ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, {
            "filters": [],
            "name": "disp_total",
            "type": "variable"
        }, "</span></td>\n        <td class=\"currency\"><a class=\"country-picker", {
            "blocks": [{
                "attachment": [" notable"],
                "expression": "wallet ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\" href=\"/no_js/country_picker\">", {
            "filters": [],
            "name": "currency",
            "type": "variable"
        }, "</a></td>\n    </tr>\n  ", {
            "blocks": [{
                "attachment": ["\n    <tr class=\"total\">\n      <th>", {
                    "nodelist": ["Pay with:"],
                    "type": "translate"
                }, "\n            <td colspan=\"2\" class=\"card-details\"><div class=\"saved-card-details\">\n                <span class=\"icon-cc ", {
                    "filters": [],
                    "name": "saved_card.brand_slug",
                    "type": "variable"
                }, "\">", {
                    "filters": [],
                    "name": "saved_card.brand_slug",
                    "type": "variable"
                }, "</span>\n                <span class=\"last-4\">x-", {
                    "filters": [],
                    "name": "saved_card.last4",
                    "type": "variable"
                }, "</span>\n            </div>\n            <a class=\"switcher\" data-bind=\"click: switchDefaultPaymentMethod\" href=\"#\">", {
                    "nodelist": ["change"],
                    "type": "translate"
                }, "</a>\n            </td>\n      </th>\n    </tr>\n  "],
                "expression": "header_rework_2018 && media_mode == 'phone' && saved_card ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n  ", {
            "blocks": [{
                "attachment": ["\n    <tr><td class=\"small hyrule\" colspan=\"3\">\n    ", {
                    "blocks": [{
                        "attachment": ["\n      You need the Giant's Wallet!\n    "],
                        "expression": "wallet ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n      Hoo hoot! Link... Look up here! It appears that the time has finally come for you to start your adventure! You will encounter many hardships ahead.. That is your fate. Don't feel discouraged, even during the toughest times! <br><br>\n      Did you get all that? <a href=\"http://www.youtube.com/watch?v=Fc3pFGJDYOM&t=0m6s\" target=\"_blank\">No</a> / <a href=\"http://www.youtube.com/watch?v=H2qF5jXu7ik&t=2m17s\" target=\"_blank\">Yes</a>\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n    </td></tr>\n  "],
                "expression": "hyrule ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n</table>\n\n<div class=\"summary-notes\">\n  ", {
            "blocks": [{
                "attachment": ["\n    <span>", {
                    "nodelist": ["ship to ", {
                        "nodelist": ["<a class=\"country-picker\" href=\"/no_js/country_picker\">", {
                            "filters": [["h", []]],
                            "name": "country_name",
                            "type": "variable"
                        }],
                        "type": "translateVariable",
                        "var_name": "country_list"
                    }, ""],
                    "type": "translate"
                }, {
                    "blocks": [{
                        "attachment": [", ", {
                            "filters": [["h", []]],
                            "name": "us_state",
                            "type": "variable"
                        }, " ", {
                            "filters": [["h", []]],
                            "name": "us_zip",
                            "type": "variable"
                        }],
                        "expression": "country == 'US' && us_zip ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "</a></span>", {
                    "blocks": [{
                        "attachment": ["<span class=\"small\"> ", {
                            "nodelist": ["(click to change country or set ZIP code, taxes may apply)"],
                            "type": "translate"
                        }, "</span>"],
                        "expression": "country == 'US' && !us_zip ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n  "],
                "expression": "has_shipping && !contains.physical_gift ",
                "type": "ncondition"
            }],
            "type": "ef"
        }, "\n</div>"],
        "cart/country_pref": ["<div><div class=\"country_pref_pointer\"></div></div>\n<div style=\"clear:both\"></div>\n<div class=\"country_pref_body\">\n    <div class=\"bd\">\n        <a class=\"country_pref_close\" href=\"#\">x</a>\n        ", {
            "nodelist": ["Select your country:"],
            "type": "translate"
        }, "\n        <div style=\"clear:both\"></div>\n        <select class=\"country_pref_select\">", {
            "filters": [],
            "name": "options",
            "type": "variable"
        }, "</select><br>\n        <div class=\"us-zip\">\n            <label>\n                ", {
            "nodelist": ["Zip:"],
            "type": "translate"
        }, "\n                <input type=\"text\" class=\"country_pref_zip\" size=\"5\" maxlength=\"5\"/>\n            </label>\n            <a class=\"us-zip-done\">", {
            "nodelist": ["Save"],
            "type": "translate"
        }, "</a>\n        </div>\n    </div>\n</div>\n"],
        "_package_listing_title": ["\n\n\n\n\n", {
            "expression": "(package.quantity_warning && package.quantity_available <= 0) || (package.quantity_limits && package.quantity_limits <= 0) ",
            "type": "let",
            "variable": "package_sold_out"
        }, "\n", {
            "expression": "package.quantity_limits && package.cart_quantity && package.cart_quantity >= package.quantity_limits ",
            "type": "let",
            "variable": "cant_buy_package"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n", {
                    "filters": [["h", []]],
                    "name": "package.title",
                    "type": "variable"
                }, "\n"],
                "expression": "package_sold_out || cant_buy_package ",
                "type": "ncondition"
            }, {
                "attachment": ["\n\n\n", {
                    "blocks": [{
                        "attachment": ["\n<a class=\"buy-link subscribe-link\" data-pkg=\"", {
                            "filters": [["attr", []]],
                            "name": "package_index",
                            "type": "variable"
                        }, "\" href=\"", {
                            "filters": [["band_url", []], ["a", []]],
                            "name": "pkg_sub.url_bits",
                            "type": "variable"
                        }, "/", {
                            "filters": [],
                            "name": "pkg_sub.url_fragment",
                            "type": "variable"
                        }, "\">\n    <span class=\"buyItemPackageTitle primaryText\">", {
                            "filters": [["h", []]],
                            "name": "package.title",
                            "type": "variable"
                        }, "</span>\n</a>\n"],
                        "expression": "package.subscriber_only && !(is_pkg_subscriber || member_of_current_band) ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n<button class=\"order_package_link buy-link ", {
                    "blocks": [{
                        "attachment": ["subscriber-only-buy-link", {
                            "blocks": [{
                                "attachment": [" subscriber-view"],
                                "expression": "is_pkg_subscriber || member_of_current_band ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }],
                        "expression": "package.subscriber_only ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\" type=\"button\" data-pkg=\"", {
                    "filters": [],
                    "name": "package_index",
                    "type": "variable"
                }, "\">\n    <span class=\"buyItemPackageTitle primaryText\">", {
                    "filters": [["h", []]],
                    "name": "package.title",
                    "type": "variable"
                }, "</span>\n</button>\n\n", {
                    "blocks": [{
                        "attachment": ["\n<span class='notable' style='font-size:70%'>", {
                            "nodelist": ["(private)"],
                            "type": "translate"
                        }, "</span>"],
                        "expression": "package.private && !package.subscriber_only ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }],
        "_package_listing_price": ["\n\n\n\n", {
            "expression": "(package.quantity_warning && package.quantity_available <= 0) || (package.quantity_limits && package.quantity_limits <= 0) ",
            "type": "let",
            "variable": "package_sold_out"
        }, "\n", {
            "expression": "package.quantity_limits && package.cart_quantity && package.cart_quantity >= package.quantity_limits ",
            "type": "let",
            "variable": "cant_buy_package"
        }, "\n", {
            "expression": "cfg.dupe_purchases_fix && items_purchased && items_purchased.packages[package.id] ",
            "type": "let",
            "variable": "package_is_purchased"
        }, "\n\n", {
            "blocks": [{
                "attachment": ["\n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "nodelist": [{
                                "nodelist": ["Pre-order Now"],
                                "type": "translate"
                            }],
                            "to": "_buy_text",
                            "type": "capture"
                        }, "\n    "],
                        "expression": "digital_preorder && (package.album_id || package.download_type) ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        ", {
                            "nodelist": [{
                                "nodelist": ["Buy Now"],
                                "type": "translate"
                            }],
                            "to": "_buy_text",
                            "type": "capture"
                        }, "\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "expression": "merch_item_page ",
                "type": "ncondition"
            }, {
                "attachment": ["\n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "nodelist": ["\n            ", {
                                "blocks": [{
                                    "attachment": [{
                                        "nodelist": ["Pre-order Now"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "0",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Compact Disc"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "1",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "2",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "15",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "16",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "17",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "18",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Cassette"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "3",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order DVD"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "4",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order USB Drive"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "5",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Sheet Music"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "6",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Poster/Print"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "10",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order T-Shirt/Apparel"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "11",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Ticket"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "12",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Button"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "13",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Pre-order Tote Bag"],
                                        "type": "translate"
                                    }, "\n            "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "14",
                                    "type": "condition"
                                }],
                                "type": "case"
                            }, "\n        "],
                            "to": "_buy_text",
                            "type": "capture"
                        }, "\n    "],
                        "expression": "digital_preorder && (package.album_id || package.download_type) ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        ", {
                            "nodelist": ["\n            ", {
                                "blocks": [{
                                    "attachment": [{
                                        "nodelist": ["Buy Now"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "0",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Compact Disc"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "1",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "2",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "15",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "16",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "17",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Record/Vinyl"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "18",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Cassette"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "3",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy DVD"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "4",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy USB Drive"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "5",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Sheet Music"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "6",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Poster/Print"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "10",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy T-Shirt/Apparel"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "11",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Ticket"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "12",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Button"],
                                        "type": "translate"
                                    }, "\n                "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "13",
                                    "type": "condition"
                                }, {
                                    "attachment": [{
                                        "nodelist": ["Buy Tote Bag"],
                                        "type": "translate"
                                    }, "\n            "],
                                    "child_condition": null,
                                    "child_relation": null,
                                    "left": "package.type_id",
                                    "operator": "==",
                                    "right": "14",
                                    "type": "condition"
                                }],
                                "type": "case"
                            }, "\n        "],
                            "to": "_buy_text",
                            "type": "capture"
                        }, "\n    "],
                        "type": "else_ncondition"
                    }],
                    "type": "ef"
                }, "\n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n\n\n", {
            "blocks": [{
                "attachment": ["\n    <h4 class=\"notable\">", {
                    "nodelist": ["Sold Out"],
                    "type": "translate"
                }, "</h4>\n"],
                "expression": "package_sold_out && !(package_is_purchased) ",
                "type": "ncondition"
            }, {
                "attachment": ["\n\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <div class=\"buyItemEdition notable\">", {
                            "nodelist": ["You have the maximum quantity of this item in <span class=\"end\">your cart.</span>"],
                            "type": "translate"
                        }, "</div>\n    "],
                        "expression": "cant_buy_package ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n    ", {
                    "expression": "package.download_type && digital_preorder_release_date && digital_preorder_release_date != package.release_date ",
                    "type": "let",
                    "variable": "separate_digital_release_date"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <div class=\"buyItemEdition secondaryText\">", {
                            "nodelist": ["digital album releases ", {
                                "nodelist": ["<span class=\"end\">", {
                                    "filters": [["time", ["'yyyyMMMMd'"]]],
                                    "name": "digital_preorder_release_date",
                                    "type": "variable"
                                }],
                                "type": "translateVariable",
                                "var_name": "date"
                            }, ""],
                            "type": "translate"
                        }, "</span></div>\n    "],
                        "expression": "separate_digital_release_date ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <div class=\"buyItemEdition secondaryText\">\n        ", {
                            "blocks": [{
                                "attachment": ["\n            ", {
                                    "nodelist": ["\n            item ships out on or around ", {
                                        "nodelist": ["<span class=\"end\">", {
                                            "filters": [["time", ["'yyyyMMMMd'"]]],
                                            "name": "package.release_date",
                                            "type": "variable"
                                        }, "</span>"],
                                        "type": "translateVariable",
                                        "var_name": "release_date"
                                    }, "\n            "],
                                    "type": "translate"
                                }, "\n        "],
                                "expression": "separate_digital_release_date ",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n            ", {
                                    "nodelist": ["\n            shipping out on or around ", {
                                        "nodelist": ["<span class=\"end\">", {
                                            "filters": [["time", ["'yyyyMMMMd'"]]],
                                            "name": "package.release_date",
                                            "type": "variable"
                                        }, "</span>"],
                                        "type": "translateVariable",
                                        "var_name": "release_date"
                                    }, "\n            "],
                                    "type": "translate"
                                }, "\n        "],
                                "type": "else_ncondition"
                            }],
                            "type": "ef"
                        }, "\n        </div>\n    "],
                        "expression": "package.release_date ",
                        "type": "ncondition"
                    }, {
                        "attachment": ["\n        <div class=\"buyItemEdition secondaryText\">\n        ", {
                            "expression": "package.fulfillment_days ",
                            "type": "let",
                            "variable": "fulfillment_days"
                        }, "\n        ", {
                            "blocks": [{
                                "attachment": ["\n            ", {
                                    "blocks": [{
                                        "attachment": ["\n                item ships out within <span class=\"end\">", {
                                            "filters": [["h", []]],
                                            "name": "fulfillment_days",
                                            "type": "variable"
                                        }, " day</span>\n            "],
                                        "expression": "fulfillment_days== 1",
                                        "type": "ncondition"
                                    }, {
                                        "attachment": ["\n                item ships out within <span class=\"end\">", {
                                            "filters": [["h", []]],
                                            "name": "fulfillment_days",
                                            "type": "variable"
                                        }, " days</span>\n            "],
                                        "type": "else_ncondition"
                                    }],
                                    "type": "translatePlural"
                                }, "\n        "],
                                "expression": "separate_digital_release_date ",
                                "type": "ncondition"
                            }, {
                                "attachment": ["\n            ", {
                                    "blocks": [{
                                        "attachment": ["\n                ships out within <span class=\"end\">", {
                                            "filters": [["h", []]],
                                            "name": "fulfillment_days",
                                            "type": "variable"
                                        }, " day</span>\n            "],
                                        "expression": "fulfillment_days== 1",
                                        "type": "ncondition"
                                    }, {
                                        "attachment": ["\n                ships out within <span class=\"end\">", {
                                            "filters": [["h", []]],
                                            "name": "fulfillment_days",
                                            "type": "variable"
                                        }, " days</span>\n            "],
                                        "type": "else_ncondition"
                                    }],
                                    "type": "translatePlural"
                                }, "\n        "],
                                "type": "else_ncondition"
                            }],
                            "type": "ef"
                        }, "\n        </div>\n    "],
                        "expression": "package.shipping_exception_mode != 'w' && package.fulfillment_days && package.fulfillment_days > 0 ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    \n    ", {
                    "blocks": [{
                        "attachment": ["\n    <div class=\"buyItemEdition secondaryText\">\n        ", {
                            "blocks": [{
                                "attachment": ["\n           ", {
                                    "nodelist": ["edition of ", {
                                        "nodelist": [{
                                            "filters": [],
                                            "name": "package.edition_size",
                                            "type": "variable"
                                        }],
                                        "type": "translateVariable",
                                        "var_name": "edition_size"
                                    }, ""],
                                    "type": "translate"
                                }, "&nbsp;\n        "],
                                "expression": "package.edition_size ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n        ", {
                            "blocks": [{
                                "attachment": ["\n            <span class=\"notable end\">", {
                                    "nodelist": ["", {
                                        "nodelist": [{
                                            "filters": [],
                                            "name": "package.quantity_available",
                                            "type": "variable"
                                        }],
                                        "type": "translateVariable",
                                        "var_name": "quantity_available"
                                    }, " remaining"],
                                    "type": "translate"
                                }, "</span>\n        "],
                                "expression": "package.quantity_warning && package.quantity_available > 0 ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, " \n    </div>\n    "],
                        "expression": "(package.edition_size || (package.quantity_warning && package.quantity_available > 0)) && (package.shipping_exception_mode != 'w') ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, " \n\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <div class=\"listing-purchasable-with-gift-card ", {
                            "blocks": [{
                                "attachment": [" user-has-balance "],
                                "expression": "gift_card_balance ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\">\n            <svg class=\"icon gift-card-icon-bordered small\" width=\"9px\" height=\"10px\" viewBox=\"0 0 9 10\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#gift-card-icon\"></use></svg>\n            ", {
                            "nodelist": ["Purchasable with gift card"],
                            "type": "translate"
                        }, "\n        </div>\n    "],
                        "expression": "package.certified_seller ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <h4 class=\"compound-button main-button\">\n            ", {
                            "template_name": "'tralbum_common/package_buy_button'",
                            "type": "include"
                        }, "\n            \n            <span class=\"nobreak\">\n            ", {
                            "expression": "item_sellers[package.selling_band_id].currency ",
                            "type": "let",
                            "variable": "package_currency"
                        }, "\n            ", {
                            "nodelist": ["\n                <span class=\"base-text-color\">", {
                                "filters": [["currency", ["package_currency", "false", "true", "true"]]],
                                "name": "package.price",
                                "type": "variable"
                            }, "</span>\n                <span class=\"buyItemExtra secondaryText\">", {
                                "filters": [["h", []]],
                                "name": "package_currency",
                                "type": "variable"
                            }, "</span>\n            "],
                            "to": "price",
                            "type": "capture"
                        }, "\n            ", {
                            "blocks": [{
                                "attachment": ["\n                ", {
                                    "nodelist": ["", {
                                        "filters": [],
                                        "name": "price",
                                        "type": "variable"
                                    }, " <span class=\"buyItemExtra buyItemNyp secondaryText\">or more</span>"],
                                    "type": "translate"
                                }, "&nbsp;\n            "],
                                "child_condition": null,
                                "child_relation": null,
                                "left": "package.is_set_price",
                                "operator": "!=",
                                "right": "1",
                                "type": "condition"
                            }, {
                                "attachment": ["\n                ", {
                                    "nodelist": ["", {
                                        "filters": [],
                                        "name": "price",
                                        "type": "variable"
                                    }, ""],
                                    "type": "translate"
                                }, "\n            "],
                                "type": "else_condition"
                            }],
                            "type": "if"
                        }, "\n            </span>\n        </h4>\n    "],
                        "expression": "!package_is_purchased || is_custom_domain ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "expression": "'physical' ",
                            "type": "let",
                            "variable": "you_own_this_type"
                        }, "\n        ", {
                            "nodelist": ["\n            <span class=\"buy-again\">", {
                                "nodelist": ["Buy again"],
                                "type": "translate"
                            }, "</span>\n        "],
                            "to": "_buy_text",
                            "type": "capture"
                        }, "\n        ", {
                            "template_name": "'tralbum_common/you_own_this'",
                            "type": "include"
                        }, "\n    "],
                        "expression": "package_is_purchased || (is_custom_domain && !merch_item_page) ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    \n    ", {
                    "blocks": [{
                        "attachment": ["\n        ", {
                            "blocks": [{
                                "attachment": ["\n        <h4 class=\"ft compound-button send-as-gift\">\n            <button class=\"order_package_link buy-link\" type=\"button\" data-pkg=\"", {
                                    "filters": [["attr", []]],
                                    "name": "package_index",
                                    "type": "variable"
                                }, "\">", {
                                    "nodelist": ["Send as Gift"],
                                    "type": "translate"
                                }, "</button>&nbsp;\n            <!--<a href=\"/no_js/gift_package?pkg=", {
                                    "filters": [["attr", []]],
                                    "name": "package_index",
                                    "type": "variable"
                                }, "\">Send as Gift</a>-->\n        </h4>\n        "],
                                "expression": "!package.subscriber_only || (package.subscriber_only && (is_pkg_subscriber || member_of_current_band)) ",
                                "type": "ncondition"
                            }],
                            "type": "ef"
                        }, "\n    "],
                        "expression": "!package_sold_out && !cant_buy_package && cfg.physical_gifting && !cfg.BALLS_disable_physical_gifting && package.type_id != 12 ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n\n    ", {
                    "blocks": [{
                        "attachment": ["\n        <div class=\"subscribe-login\">", {
                            "nodelist": ["already a subscriber?"],
                            "type": "translate"
                        }, " <a href=\"", {
                            "filters": [["a", []]],
                            "name": "login_bounce_url",
                            "type": "variable"
                        }, "\">", {
                            "nodelist": ["log in"],
                            "type": "translate"
                        }, "</a></div>\n    "],
                        "expression": "!cant_buy_package && package.subscriber_only && !(is_pkg_subscriber || member_of_current_band) && !logged_in ",
                        "type": "ncondition"
                    }],
                    "type": "ef"
                }, "\n    \n"],
                "type": "else_ncondition"
            }],
            "type": "ef"
        }, "\n"]
    });
}
;(function(exports) {
    function doPost(url, parms, callback) {
        if (Url.isCustomDomain())
            url = siteroot_https + url;
        var args = {
            type: "POST",
            url: url,
            data: parms,
            dataType: Url.isCustomDomain() && !$.support.cors ? "jsonp" : "json",
            xhrFields: {
                withCredentials: true
            },
            success: function(data) {
                if (Trackpipe.showXHRError(data)) {
                    Log.error("XHR POST returned error JSON", data);
                    return
                }
                Log.note("XHR form submission succeeded with data", data);
                callback(data)
            },
            error: function(jqXHR, errorType, exception) {
                Log.error("XHR POST failed", jqXHR, errorType, exception);
                if (jqXHR.data)
                    Trackpipe.showXHRError(jqXHR.data);
                else
                    Dialog.alert("Network Error", "There was a network error while processing your request. Please try again.");
                callback(jqXHR.data)
            }
        };
        Crumb.ajax(args)
    }
    var FanControls = {
        fan_id: null,
        is_owned: false,
        initialized: null,
        init: function(data, items_purchased) {
            var pagedata = $("#pagedata").data("blob") || {};
            var cfg = pagedata.cfg || {};
            var userTesting = pagedata.user_testing || {};
            if (!data || !data.show_collect && !data.is_collected || this.initialized)
                return;
            if (!FanControls.fan_id)
                FanControls.fan_id = data.fan_id;
            var applyEventHandlers = function() {
                var args = [data.fan_id, data.collect_item_id, data.collect_item_type, data.collect_band_id];
                $("#wishlist-msg").click(function() {
                    var wishlistItem = null;
                    var fanId = args[0];
                    var itemId = args[1];
                    var itemType = args[2];
                    var bandId = args[3];
                    if (window.TralbumData) {
                        itemType = itemType || window.TralbumData.current.type[0];
                        itemId = itemId || window.TralbumData.current.id;
                        bandId = bandId || window.TralbumData.current.band_id
                    }
                    wishlistItem = Identities.fan() && !Identities.fan().private && Identities.fan().verified;
                    if (wishlistItem)
                        FanControls.collectItem(fanId, itemId, itemType, bandId);
                    else {
                        var pagedata = $("#pagedata").data("blob");
                        FanAction.doAction("wishlist", pagedata.lo_querystr || "", null, itemId, itemType, bandId)
                    }
                });
                $("#wishlisted-msg").click(function(event) {
                    if (!$(event.target).closest("a[href]").length && $(event.target).closest(".wishlist-button-tooltip-outer").length === 0)
                        FanControls.uncollectItem.apply(exports, args)
                });
                if (window.Fixup)
                    Fixup.compoundLinkButtons("#purchased-msg")
            };
            $(document).ready(function() {
                if (cfg.dupe_purchases_fix) {
                    if (window.TralbumData && items_purchased && items_purchased.packages && !$.isEmptyObject(items_purchased.packages) && !$(".you-own-this.physical").length)
                        TralbumData.items_purchased = items_purchased;
                    if (Identities.fan())
                        TralbumData.tralbum_collect_info = data;
                    $(".buyItem.digital .you-own-this-link, .buyItem.buyFullDiscography .you-own-this-link").attr("href", data.fan_trackpipe_url)
                }
                data.is_private_fan = Identities.fan() && Identities.fan().private;
                data.cfg = cfg;
                data.user_testing = userTesting;
                var html = $(Templ.render("tralbum_common/tralbum_collect_controls", data));
                if (MediaView.mode == "phone") {
                    var shareButton = $("li.share-link-container");
                    if (shareButton.length)
                        html.insertBefore(shareButton);
                    else
                        html.appendTo("ul.tralbumCommands");
                    applyEventHandlers();
                    if (pagedata.embed_info.item_public) {
                        var wishlistViewLink = $("#wishlisted-msg a.view");
                        var href = $(wishlistViewLink).attr("href");
                        $(wishlistViewLink).attr("href", href.replace(/#/g, "/"))
                    }
                } else
                    Share.panelLinkPromise.done(function() {
                        html.insertAfter("#collect-anchor");
                        applyEventHandlers()
                    })
            });
            this.show_wishlist_tooltip = data.show_wishlist_tooltip || false;
            this.show_follow_tooltip = data.show_follow_tooltip || false;
            this.is_owned = data.is_purchased || false;
            this.initialized = true
        },
        collectItem: function(fan_id, item_id, item_type, band_id) {
            if (!fan_id && Identities.fan())
                fan_id = Identities.fan().id;
            $("#collect-item").addClass("wishlisted").removeClass("wishlist");
            $("#wishlist-alert").hide();
            var parms = {
                "fan_id": fan_id,
                "item_id": item_id,
                "item_type": item_type,
                "band_id": band_id
            };
            if (window.ReferrerToken)
                parms.ref_token = window.ReferrerToken;
            var callback = function(data) {
                if (data.ok === true)
                    Log.note("successfully added item to wishlist");
                else {
                    $("#collect-item").addClass("wishlist").removeClass("wishlisted");
                    $("#wishlist-alert").show()
                }
            };
            doPost("/collect_item_cb", parms, callback);
            if (window.FanOnboarding && this.show_wishlist_tooltip && $(".signup-tooltip-parent.show-tooltip").length === 0 && MediaView.mode !== "phone") {
                window.FanOnboarding.setFirstWishlistedItem(TralbumData.current.title, TralbumData.current.type);
                this.show_wishlist_tooltip = false;
                if (Menubar.initialValues && Menubar.initialValues.has_collection) {
                    window.FanOnboarding.setTooltips(["x"]);
                    window.FanOnboarding.initForView()
                } else {
                    var identities = $("#pagedata").data("blob").identities;
                    var menubar = Menubar.initialValues;
                    SignupUtils.renderMenubar(identities, menubar, {
                        "action": "wishlist"
                    });
                    window.FanOnboarding.showTooltip("w")
                }
            }
        },
        uncollectItem: function(fan_id, item_id, item_type, band_id) {
            if (!fan_id && Identities.fan())
                fan_id = Identities.fan().id;
            $("#collect-item").addClass("wishlist").removeClass("wishlisted");
            $("#wishlist-alert").hide();
            var parms = {
                "fan_id": fan_id,
                "item_id": item_id,
                "item_type": item_type,
                "band_id": band_id
            };
            var callback = function(data) {
                if (data.ok === true)
                    Log.note("successfully removed item from wishlist");
                else {
                    $("#collect-item").addClass("wishlisted").removeClass("wishlist");
                    $("#wishlist-alert").show()
                }
            };
            doPost("/uncollect_item_cb", parms, callback)
        }
    };
    var BandFollow = {
        fan_id: null,
        fan_email: null,
        band_id: null,
        band_name: null,
        band_image_id: null,
        band_art_id: null,
        fan_image_id: null,
        initialized: null,
        theButton: null,
        root: null,
        is_following: false,
        init: function(data) {
            if (!data || $("#following-actions").length === 0 || this.initialized)
                return;
            this.show_follow_tooltip = data.show_follow_tooltip;
            this.fan_id = data.fan_id;
            this.fan_email = data.fan_email;
            this.band_id = data.band_id;
            this.band_image_id = data.band_image_id;
            this.fan_image_id = data.fan_image_id;
            this.band_art_id = data.band_art_id;
            this.is_following = data.is_following;
            var pagedata$$0 = $("#pagedata").data("blob") || {};
            this.cfg = pagedata$$0.cfg || {};
            if (typeof BandData !== "undefined")
                this.band_name = BandData.name;
            else if (typeof pagedata$$0.label !== "undefined")
                this.band_name = pagedata$$0.label.label_name;
            var self = this;
            $(document).ready(function() {
                $("#following-actions").renderLiquid("fan/band_follow", data);
                self.root = $("#following-actions");
                self.theButton = $("#follow-unfollow", self.root);
                if (MediaView.mode != "phone")
                    self.theButton.hover(function() {
                        if ($(this).parent().parent().hasClass("show-tooltip"))
                            return;
                        if ($(this).hasClass("following"))
                            $("div", this).html(TM("Unfollow"))
                    }, function() {
                        if ($(this).parent().parent().hasClass("show-tooltip"))
                            return;
                        if ($(this).hasClass("following"))
                            $("div", this).html(TM("Following"))
                    });
                self.theButton.click(function() {
                    if ($(this).parent().parent().hasClass("show-tooltip"))
                        return;
                    var followBand = Identities.fan() && !Identities.fan().private && (Identities.fan().verified || self.theButton.hasClass("following"));
                    if (followBand)
                        BandFollow.followUnfollow(Identities.fan().id, typeof BandData !== "undefined" ? BandData.id : null, data.tralbum_id, data.tralbum_type);
                    else {
                        var pagedata = $("#pagedata").data("blob");
                        FanAction.doAction("follow", pagedata.lo_querystr || "", null, typeof BandData !== "undefined" ? BandData.id : null, "b", BandData.id)
                    }
                });
                if (HiddenParams.get("external_follow")) {
                    Stats.record({
                        kind: "click",
                        click: "artist_dash_external_follow_refer"
                    });
                    if (!self.theButton.hasClass("following"))
                        self.theButton.click()
                }
            });
            this.initialized = true
        },
        followUnfollow: function(fan_id, band_id, tralbum_id, tralbum_type, from_signup) {
            var isFollowing = this.theButton.hasClass("following");
            BandFollow.updateButton(!isFollowing);
            var action = isFollowing ? "unfollow" : "follow";
            var url = "/fan_follow_band_cb";
            var data$$0 = {
                fan_id: fan_id,
                action: action
            };
            if (action == "follow") {
                if (window.ReferrerToken)
                    data$$0.ref_token = window.ReferrerToken;
                if (HiddenParams.get("external_follow"))
                    Stats.record({
                        kind: "click",
                        click: "artist_dash_external_follow"
                    });
                if ($(".stub-page-content.fan").length > 0)
                    Stats.record({
                        kind: "click",
                        click: "fan_stub_page_follow"
                    })
            }
            var self = this;
            if (!!band_id)
                data$$0.band_id = band_id;
            if (!!tralbum_id && !!tralbum_type) {
                data$$0.tralbum_id = tralbum_id;
                data$$0.tralbum_type = tralbum_type
            }
            doPost(url, data$$0, function(data) {
                if (data && data.ok) {
                    Log.note("successful: band " + action);
                    BandFollow.updateButton(data.is_following);
                    if (data.is_following && !from_signup)
                        BandFollow.showMailingListDialog(data.mailing_list_info);
                    self.is_following = data.is_following
                } else
                    BandFollow.updateButton(isFollowing)
            });
            Stats.record({
                kind: "click",
                click: "band_" + action
            });
            if (window.FanOnboarding && action == "follow" && this.show_follow_tooltip && !from_signup)
                window.FanOnboarding.showTooltip("b")
        },
        showMailingListDialog: function(mailingListInfo) {
            var self = this;
            var buttons = [];
            var dialogClass = "nu-dialog mailing-list-opt-in blank-title";
            if (mailingListInfo.label_id) {
                dialogClass += " label";
                buttons = [{
                    text: TM("Done"),
                    click: function() {
                        var notifyMeBand = $("#notify-me-band").prop("checked");
                        var notifyMeLabel = $("#notify-me-label").prop("checked");
                        if (notifyMeLabel || notifyMeBand) {
                            var data$$0 = {
                                address: self.fan_email
                            };
                            if (notifyMeBand)
                                data$$0.band_id = self.band_id;
                            if (notifyMeLabel)
                                data$$0.label_id = mailingListInfo.label_id;
                            Crumb.ajax({
                                type: "POST",
                                url: "/band_follow_email_opt_in_cb",
                                data: data$$0,
                                dataType: "json",
                                success: function(data) {},
                                error: function(jqXHR, errorType, exception) {},
                                complete: function() {}
                            })
                        }
                        $(this).dialog("close")
                    }
                }]
            } else {
                dialogClass += " band";
                buttons = [{
                    text: TM("Yes please!"),
                    click: function() {
                        Crumb.ajax({
                            type: "POST",
                            url: "/band_follow_email_opt_in_cb",
                            data: {
                                address: self.fan_email,
                                band_id: self.band_id
                            },
                            dataType: "json",
                            success: function(data) {},
                            error: function(jqXHR, errorType, exception) {},
                            complete: function() {}
                        });
                        $(this).dialog("close")
                    }
                }, {
                    text: TM("No thanks"),
                    click: function() {
                        $(this).dialog("close")
                    }
                }]
            }
            NuDialog.showTemplate("fan/band_follow_mailing_list_opt_in", {
                artist: self.band_name,
                label: mailingListInfo.label_name,
                email_address: self.fan_email
            }, {
                dialogClass: dialogClass,
                buttons: buttons
            })
        },
        updateButton: function(isFollowing) {
            $("div", this.theButton).text(isFollowing ? TM("Following") : TM("Follow"));
            if (isFollowing) {
                $(".crowdfunding-success-text").addClass("crowdfunding-none");
                $(".crowdfunding-success-text-following").removeClass("crowdfunding-none");
                $(".crowdfunding-campaign-end-message-follow-prompt").hide();
                $(".crowdfunding-campaign-end-message-follow").show()
            } else {
                $(".crowdfunding-success-text-following").addClass("crowdfunding-none");
                $(".crowdfunding-success-text").removeClass("crowdfunding-none");
                $(".crowdfunding-campaign-end-message-follow-prompt").show();
                $(".crowdfunding-campaign-end-message-follow").hide()
            }
            this.theButton[isFollowing ? "addClass" : "removeClass"]("following")
        }
    };
    exports.FanControls = FanControls;
    exports.BandFollow = BandFollow
}
)(window);
CollectedBy = {};
(function() {
    CollectedBy.initTooltips = function(container) {
        $(container).bc_tooltips({
            itemSelector: "a.pic"
        })
    }
    ;
    var MAX_REVIEWS = 6;
    var PREVIEW_REVIEWS = 3;
    var MAX_THUMBS = 80;
    var PREVIEW_THUMBS = 50;
    var SINGLE_TOGGLE = false;
    var MEATY_REVEAL = 15;
    CollectedBy.renderFull = function(container$$0, collectors, excludeFanIDs, censorCallback, showLess, options) {
        function doCensor() {
            function onConfirm() {
                censorCallback(fanID, itemType, itemID, $this.closest(".writing"))
            }
            var $this = $(this);
            var fanID = $this.data("fan-id");
            var itemType = $this.data("item-type");
            var itemID = $this.data("item-id");
            var fanName = $this.data("fan-name");
            var possessiveName = fanName[fanName.length - 1].toLowerCase === "s" ? fanName + "'" : fanName + "'s";
            Dialog.alert("Remove", "Are you sure you want to remove " + Text.escapeHtml(possessiveName) + " text? This action cannot be reversed.", onConfirm, true)
        }
        function moreReviews() {
            $(this).fadeOut(200).queue(function(next) {
                renderMoreReviews(this);
                next()
            });
            return false
        }
        function renderMoreReviews(src) {
            var container = $(src).closest(".collected-by");
            var template = "fan/collection/grid/also_collected_by_review_innards";
            var i = hash.max_reviews;
            for (var len = hash.reviews.length; i < len; i++) {
                var fanHash = {
                    review: hash.reviews[i],
                    loop_index: i - hash.max_reviews,
                    member_of_current_band: !!censorCallback,
                    from_parm: window.TralbumFans ? "fanthanks" : "alsocollect",
                    show_tooltips: true
                };
                var html = $(Templ.render(template, fanHash));
                $("div.writing:last", container).after(html)
            }
            $("img.lazy", container).lazyload({
                threshold: 500,
                effect: "fadeIn",
                effectspeed: 100
            });
            CollectedBy.initTooltips(container)
        }
        function moreThumbs() {
            $(this).fadeOut(200).queue(function(next) {
                renderMoreThumbs(this);
                next()
            });
            return false
        }
        function renderMoreThumbs(src) {
            var thumbsDiv = $(src).closest(".no-writing");
            var template = "fan/collection/grid/also_collected_by_no_review_innards";
            var i = hash.max_thumbs;
            for (var len = hash.no_reviews.length; i < len; i++) {
                var fanHash = {
                    fan: hash.no_reviews[i],
                    loop_index: i - hash.max_thumbs,
                    from_parm: window.TralbumFans ? "fanthanks" : "alsocollect",
                    show_tooltips: true
                };
                var html = $(Templ.render(template, fanHash));
                $(thumbsDiv).append(html)
            }
            $("img.lazy", thumbsDiv).lazyload({
                threshold: 500,
                effect: "fadeIn",
                effectspeed: 100
            });
            CollectedBy.initTooltips(thumbsDiv)
        }
        function moreEverything() {
            $(this).fadeOut(200).queue(function(next) {
                if ($(this).data("more-reviews"))
                    renderMoreReviews(this);
                if ($(this).data("more-thumbs"))
                    renderMoreThumbs(this);
                next()
            });
            return false
        }
        if (!$.isArray(excludeFanIDs))
            excludeFanIDs = [excludeFanIDs];
        var max_reviews = options && options.max_reviews ? options.max_reviews : MAX_REVIEWS;
        var max_thumbs = options && options.max_thumbs ? options.max_thumbs : MAX_THUMBS;
        var single_toggle = options && options.single_toggle ? options.single_toggle : SINGLE_TOGGLE;
        var show_tooltips = !options || !options.hide_tooltips;
        var hash = {
            reviews: [],
            no_reviews: [],
            member_of_current_band: !!censorCallback,
            from_parm: window.TralbumFans ? "fanthanks" : "alsocollect",
            max_reviews: max_reviews,
            max_thumbs: max_thumbs,
            single_toggle: single_toggle,
            show_tooltips: show_tooltips
        };
        Iter.each(collectors, function(fan) {
            if ($.inArray(fan.fan_id, excludeFanIDs) < 0)
                hash[fan.why ? "reviews" : "no_reviews"].push(fan)
        });
        if (single_toggle) {
            if (hash.reviews.length - max_reviews + (hash.no_reviews.length - max_thumbs) < MEATY_REVEAL) {
                hash.max_reviews = hash.reviews.length;
                hash.max_thumbs = hash.no_reviews.length
            }
        } else {
            if (hash.no_reviews.length > MAX_THUMBS)
                hash.max_thumbs = PREVIEW_THUMBS;
            if (hash.reviews.length > MAX_REVIEWS)
                hash.max_reviews = PREVIEW_REVIEWS
        }
        $(container$$0).slideUp(100).queue(function(next) {
            $(this).renderLiquid("fan/collection/grid/also_collected_by_deets", hash);
            $("img.lazy", this).lazyload({
                threshold: 500,
                effect: "fadeIn",
                effectspeed: 100
            });
            $(this).find(".more-writing").click(moreReviews).end().find(".more-thumbs").click(moreThumbs).end().find(".more-everything").click(moreEverything).end().find("a.censor").click(doCensor).end().addClass("populated").end();
            if (showLess)
                $(this).find(".show-less.close").fadeIn("slow").on("click", showLess);
            CollectedBy.initTooltips(this);
            next()
        }).slideDown(100)
    }
}
)();
if ('undefined' === typeof window.Templ) {
    Log.server('Premature template registration: ' + ["_share_tralbum_phone"], 'warn');
} else {
    Templ.register({
        "_share_tralbum_phone": [{
            "nodelist": [{
                "blocks": [{
                    "attachment": [{
                        "nodelist": ["omg best track ever:"],
                        "type": "translate"
                    }, " "],
                    "expression": "is_track ",
                    "type": "ncondition"
                }, {
                    "attachment": [{
                        "nodelist": ["omg best album ever:"],
                        "type": "translate"
                    }, " "],
                    "type": "else_ncondition"
                }],
                "type": "ef"
            }],
            "to": "tweet_text",
            "type": "capture"
        }, "\n", {
            "nodelist": [{
                "nodelist": ["", {
                    "filters": [],
                    "name": "title",
                    "type": "variable"
                }, " by ", {
                    "filters": [],
                    "name": "artist",
                    "type": "variable"
                }, ":"],
                "type": "translate"
            }],
            "to": "email_text",
            "type": "capture"
        }, "\n<ul class=\"share-dialog social-controls\" data-url=\"", {
            "filters": [["a", []]],
            "name": "linkback",
            "type": "variable"
        }, "\">\n    <li class=\"facebook-share-ctrl\" data-stat=\"facebook_mobile\">\n        <a class=\"facebook-link compound-button\">", {
            "nodelist": ["Facebook"],
            "type": "translate"
        }, "</a>\n    </li>\n    <li class=\"twitter-ctrl\" data-text=\"", {
            "filters": [["a", []]],
            "name": "tweet_text",
            "type": "variable"
        }, "\" data-stat=\"twitter_mobile\">\n        <a class=\"twitter-link compound-button\">", {
            "nodelist": ["Twitter"],
            "type": "translate"
        }, "</a>\n    </li>\n    <li class=\"email-ctrl\" data-text=\"", {
            "filters": [["a", []]],
            "name": "email_text",
            "type": "variable"
        }, "\" data-stat=\"email_mobile\">\n        <a class=\"email-link compound-button\">", {
            "nodelist": ["Email"],
            "type": "translate"
        }, "</a>\n    </li>\n</ul>\n"]
    });
}
;(function(window, $, ko) {
    var CollectorsAPI = {
        doPost: function(url, parms) {
            var d = $.Deferred();
            if (Url.isCustomDomain())
                url = siteroot_https + url;
            var args = {
                type: "POST",
                url: url,
                data: parms,
                dataType: Url.isCustomDomain() && !$.support.cors ? "jsonp" : "json",
                xhrFields: {
                    withCredentials: true
                },
                success: function(response) {
                    if (response.error)
                        return d.reject();
                    else
                        return d.resolve(response)
                },
                error: function(jqXHR, errorType, exception) {
                    return d.reject()
                }
            };
            Crumb.ajax(args);
            return d.promise()
        },
        get: function(tralbumType, tralbumId, token, count, type, excludeFanIds, excludeGifters, includeReviewers) {
            var d = $.Deferred();
            var data$$0 = {
                "tralbum_type": tralbumType,
                "tralbum_id": tralbumId,
                "token": token,
                "count": count
            };
            if (excludeFanIds)
                data$$0.exclude_fan_ids = excludeFanIds;
            if (type === "thumbs") {
                if (excludeGifters)
                    data$$0.exclude_gifters = true;
                if (includeReviewers)
                    data$$0.include_reviewers = true
            }
            $.post("/api/tralbumcollectors/2/" + type, ko.toJSON(data$$0)).then(function(data) {
                if (data.error)
                    return d.reject();
                else
                    return d.resolve(data.results, data.more_available)
            }, function() {
                return d.reject()
            });
            return d.promise()
        },
        getInitial: function(tralbumType, tralbumId, reviewsCount, thumbsCount, excludeFanIds) {
            var d = $.Deferred();
            var data$$0 = {
                "tralbum_type": tralbumType,
                "tralbum_id": tralbumId,
                "reviews_count": reviewsCount,
                "thumbs_count": thumbsCount
            };
            if (excludeFanIds)
                data$$0.exclude_fan_ids = excludeFanIds;
            $.post("/api/tralbumcollectors/2/initial", ko.toJSON(data$$0)).then(function(data) {
                if (data.error)
                    return d.reject();
                else
                    return d.resolve(data.reviews, data.more_reviews_available, data.thumbs, data.more_thumbs_available)
            }, function() {
                return d.reject()
            });
            return d.promise()
        },
        getReviews: function(tralbumType, tralbumId, token, count, excludeFanIds) {
            return this.get(tralbumType, tralbumId, token, count, "reviews", excludeFanIds)
        },
        getThumbs: function(tralbumType, tralbumId, token, count, excludeFanIds, excludeGifters, includeReviewers) {
            return this.get(tralbumType, tralbumId, token, count, "thumbs", excludeFanIds, includeReviewers)
        },
        getBandThumbs: function(bandId, count, includeReviewers) {
            var d = $.Deferred();
            var data$$0 = {
                "band_id": bandId,
                "count": count
            };
            if (includeReviewers)
                data$$0.include_reviewers = true;
            $.post("/api/tralbumcollectors/2/band_thumbs", ko.toJSON(data$$0)).then(function(data) {
                if (data.error)
                    return d.reject();
                else
                    return d.resolve(data.results)
            }, function() {
                return d.reject()
            });
            return d.promise()
        },
        censorReview: function(fanId, itemType, itemId) {
            var d = $.Deferred();
            var params = {
                fan_id: fanId,
                item_type: itemType[0],
                item_id: itemId
            };
            this.doPost("/censor_fan_review", params).then(function(data) {
                if (data && data.ok)
                    return d.resolve();
                else
                    return d.reject()
            });
            return d.promise()
        }
    };
    window.CollectorsAPI = CollectorsAPI
}
)(window, jQuery, ko);
(function(window, $, ko) {
    var MIN_FETCH_TIME = 900;
    var pagedata = $("#pagedata").data("blob") || {};
    var cfg = pagedata.cfg || {};
    var FanTralbumCollectors = function(container, tralbumType, tralbumId, context, options) {
        var self = this;
        self.$container = container instanceof jQuery ? container : $(container);
        self.tralbumType = tralbumType;
        self.tralbumId = tralbumId;
        self.initialized = false;
        self.reviews = [];
        self.shownReviews = [];
        self.thumbs = [];
        self.shownThumbs = [];
        self.shownFanIds = {};
        self.options = options || {};
        self.lastReviewToken = null;
        self.lastThumbToken = null;
        self.loadingThumbs = false;
        self.loadingReviews = false;
        self.context = context ? context : "collection";
        self.isPhone = MediaView.mode === "phone";
        self.fanId = self.context === "collection" && FanData && FanData.fan_id ? FanData.fan_id : null;
        self.isOwnCollection = context === "collection" && self.fanId && Identities.fan() && Identities.fan().id === self.fanId;
        self.memberOfBand = self.context === "tralbum" && (Identities.isPageBandMember() || Identities.isAdmin());
        self.MAX_REVIEWS = 6;
        self.PREVIEW_REVIEWS = 3;
        self.MAX_THUMBS = 80;
        self.PREVIEW_THUMBS = 60;
        self.REVIEWS_BATCH_SIZE = 10;
        self.THUMBS_BATCH_SIZE = 100;
        if (self.context === "tralbum" && self.isPhone)
            self.THUMBS_BATCH_SIZE = 60;
        else if (self.context === "collection" && self.isPhone && !self.isOwnCollection) {
            self.MAX_REVIEWS = 4;
            self.PREVIEW_REVIEWS = 3;
            self.MAX_THUMBS = 10;
            self.PREVIEW_THUMBS = 6;
            self.PREVIEW_THUMBS_NO_COMMENTS = 6;
            self.THUMBS_BATCH_SIZE = 60
        } else if (self.context === "collection") {
            self.MAX_THUMBS = 66;
            self.PREVIEW_THUMBS = 60;
            self.PREVIEW_THUMBS_NO_COMMENTS = 24;
            self.THUMBS_BATCH_SIZE = 60
        } else if (self.context === "feed") {
            self.MAX_THUMBS = 14;
            self.PREVIEW_THUMBS = 7;
            self.PREVIEW_THUMBS_NO_COMMENTS = 7;
            self.THUMBS_BATCH_SIZE = 70
        } else if (self.context === "save_the_fans")
            self.MAX_THUMBS = 70;
        else if (self.context === "delete_account")
            self.MAX_THUMBS = 115;
        if (self.options.maxReviews)
            self.MAX_REVIEWS = self.options.maxReviews;
        if (self.options.previewReviews)
            self.PREVIEW_REVIEWS = self.options.previewReviews;
        if (self.options.maxThumbs)
            self.max_thumbs = self.options.maxThumbs;
        if (self.options.previewThumbs)
            self.PREVIEW_THUMBS = self.options.previewThumbs;
        self.$showMoreReviewsEl = null;
        self.$showMoreThumbsEl = null;
        self.$loadingReviewsEl = null;
        self.$loadingThumbsEl = null
    };
    FanTralbumCollectors.prototype.initTooltips = function() {
        if (MediaView.mode === "phone")
            return;
        this.$container.bc_tooltips({
            itemSelector: "a.pic"
        })
    }
    ;
    FanTralbumCollectors.prototype.updateTokens = function() {
        this.lastReviewToken = this.reviews.length > 0 ? this.reviews[this.reviews.length - 1].token : null;
        this.lastThumbToken = this.thumbs.length > 0 ? this.thumbs[this.thumbs.length - 1].token : null
    }
    ;
    FanTralbumCollectors.prototype.showMoreReviews = function() {
        var self = this;
        if (!self.initialized || self.loadingReviews)
            return;
        var excludeFanIds = [];
        if (self.fanId && self.context === "collection")
            excludeFanIds.push(self.fanId);
        self.loadingReviews = true;
        self.$showMoreReviewsEl.hide();
        self.$loadingReviewsEl.show();
        var token = self.lastReviewToken;
        var count = self.REVIEWS_BATCH_SIZE - (self.reviews.length - self.shownReviews.length);
        var startTime = new Date;
        CollectorsAPI.getReviews(self.tralbumType, self.tralbumId, token, count, excludeFanIds).then(function(results, moreAvailable) {
            var endTime = new Date;
            var elapsedTime = endTime - startTime;
            var delayTime = 0;
            if (elapsedTime < MIN_FETCH_TIME)
                delayTime = MIN_FETCH_TIME - elapsedTime;
            setTimeout(function() {
                self.$loadingReviewsEl.hide();
                self.reviews = self.reviews.concat(results);
                self.updateTokens();
                var template = "fan/collection/grid/also_collected_by_review_innards";
                for (var i = self.shownReviews.length; i < self.reviews.length; i++) {
                    var fanHash = {
                        review: self.reviews[i],
                        loop_index: i - self.shownReviews.length,
                        member_of_current_band: self.memberOfBand,
                        from_parm: "fanthanks",
                        show_tooltips: true,
                        cfg: cfg
                    };
                    if (!self.shownFanIds[fanHash.review.fan_id]) {
                        var html = $(Templ.render(template, fanHash));
                        self.$container.find(".writing:last").after(html);
                        self.shownFanIds[fanHash.review.fan_id] = true
                    }
                }
                self.shownReviews = self.reviews;
                self.$container.find("img.lazy").lazyload({
                    threshold: 500,
                    effect: "fadeIn",
                    effectspeed: 100
                });
                self.initTooltips();
                self.loadingReviews = false;
                if (moreAvailable)
                    self.$showMoreReviewsEl.fadeIn(200)
            }, delayTime)
        }, function() {
            self.$loadingReviewsEl.hide();
            self.loadingReviews = false
        })
    }
    ;
    FanTralbumCollectors.prototype.showMoreThumbs = function() {
        var self = this;
        if (!self.initialized || self.loadingThumbs)
            return;
        self.loadingThumbs = true;
        self.$showMoreThumbsEl.hide();
        self.$loadingThumbsEl.show();
        var token = self.lastThumbToken;
        var count = self.THUMBS_BATCH_SIZE - (self.thumbs.length - self.shownThumbs.length);
        var startTime = new Date;
        CollectorsAPI.getThumbs(self.tralbumType, self.tralbumId, token, count).then(function(results, moreAvailable) {
            var endTime = new Date;
            var elapsedTime = endTime - startTime;
            var delayTime = 0;
            if (elapsedTime < MIN_FETCH_TIME)
                delayTime = MIN_FETCH_TIME - elapsedTime;
            setTimeout(function() {
                self.$loadingThumbsEl.hide();
                self.thumbs = self.thumbs.concat(results);
                self.updateTokens();
                var thumbsDiv = $(".no-writing", self.$container);
                var template = "fan/collection/grid/also_collected_by_no_review_innards";
                for (var i = self.shownThumbs.length; i < self.thumbs.length; i++) {
                    var fanHash = {
                        fan: self.thumbs[i],
                        loop_index: i - self.shownThumbs.length,
                        max_thumbs: self.MAX_THUMBS,
                        from_parm: "fanthanks",
                        show_tooltips: true,
                        cfg: cfg
                    };
                    if (!self.shownFanIds[fanHash.fan.fan_id]) {
                        var html = $(Templ.render(template, fanHash));
                        $(thumbsDiv).append(html);
                        self.shownFanIds[fanHash.fan.fan_id] = true
                    } else
                        ;
                }
                self.shownThumbs = self.thumbs;
                $("img.lazy", thumbsDiv).lazyload({
                    threshold: 500,
                    effect: "fadeIn",
                    effectspeed: 100
                });
                self.initTooltips();
                self.loadingThumbs = false;
                if (moreAvailable)
                    self.$showMoreThumbsEl.fadeIn(200)
            }, delayTime)
        }, function() {
            self.$loadingThumbsEl.hide();
            self.loadingThumbs = false
        })
    }
    ;
    FanTralbumCollectors.prototype.renderFull = function(optionalDataBlob) {
        var self = this;
        var d = $.Deferred();
        var doRender = function(reviews, moreReviewsAvailable, thumbs, moreThumbsAvailable) {
            self.initialized = true;
            if (reviews.length === 0 && thumbs.length === 0)
                return;
            self.reviews = reviews;
            self.thumbs = thumbs;
            self.updateTokens();
            var hash = {
                reviews: reviews,
                more_reviews_available: moreReviewsAvailable,
                thumbs: thumbs,
                more_thumbs_available: moreThumbsAvailable,
                from_parm: "fanthanks",
                member_of_current_band: self.memberOfBand,
                show_tooltips: true,
                cfg: cfg
            };
            self.shownThumbs = thumbs;
            self.shownReviews = reviews;
            self.shownFanIds = {};
            if (reviews && moreReviewsAvailable) {
                hash.reviews = hash.reviews.slice(0, self.PREVIEW_REVIEWS);
                self.shownReviews = self.shownReviews.slice(0, self.PREVIEW_REVIEWS)
            }
            if (thumbs && moreThumbsAvailable) {
                var previewThumbs = reviews && reviews.length > 0 ? self.PREVIEW_THUMBS_NO_COMMENTS : self.PREVIEW_THUMBS;
                hash.thumbs = hash.thumbs.slice(0, previewThumbs);
                self.shownThumbs = self.shownThumbs.slice(0, previewThumbs)
            }
            if (hash.thumbs) {
                var deduped = [];
                Iter.each(hash.thumbs, function(t) {
                    if (!self.shownFanIds[t.fan_id]) {
                        self.shownFanIds[t.fan_id] = true;
                        deduped.push(t)
                    }
                });
                hash.thumbs = deduped
            }
            self.$container.renderLiquid("tralbum_common/tralbum_collectors", hash);
            self.$container.addClass("populated");
            self.bindToDOM();
            self.initTooltips();
            d.resolve()
        };
        if (optionalDataBlob)
            doRender(optionalDataBlob.reviews, optionalDataBlob.more_reviews_available, optionalDataBlob.thumbs, optionalDataBlob.more_thumbs_available);
        else {
            var excludeFanIds = [];
            if (self.fanId && self.context === "collection")
                excludeFanIds.push(self.fanId);
            self.$container.show();
            var startTime = new Date;
            CollectorsAPI.getInitial(self.tralbumType, self.tralbumId, self.MAX_REVIEWS, self.MAX_THUMBS, excludeFanIds).then(function(reviews, moreReviewsAvailable, thumbs, moreThumbsAvailable) {
                var endTime = new Date;
                var elapsedTime = endTime - startTime;
                var delayTime = 0;
                if (elapsedTime < MIN_FETCH_TIME)
                    delayTime = MIN_FETCH_TIME - elapsedTime;
                setTimeout(function() {
                    doRender(reviews, moreReviewsAvailable, thumbs, moreThumbsAvailable)
                }, delayTime)
            })
        }
        return d.promise()
    }
    ;
    FanTralbumCollectors.prototype.set = function(blob) {
        var self = this;
        blob = blob || {};
        self.reviews = blob.reviews || [];
        self.thumbs = blob.thumbs || [];
        self.shownReviews = blob.shown_reviews || [];
        self.shownThumbs = blob.shown_thumbs || [];
        self.moreReviewsAvailable = blob.more_reviews_available;
        self.moreThumbsAvailable = blob.more_thumbs_available;
        self.shownFanIds = {};
        Iter.each(self.shownThumbs, function(t) {
            if (!self.shownFanIds[t.fan_id])
                self.shownFanIds[t.fan_id] = true
        });
        self.updateTokens()
    }
    ;
    FanTralbumCollectors.prototype.bindToDOM = function() {
        var self = this;
        self.$showMoreReviewsEl = $(".more-writing", self.$container);
        self.$showMoreThumbsEl = $(".more-thumbs", self.$container);
        self.$loadingReviewsEl = $(".loading-writing", self.$container);
        self.$loadingThumbsEl = $(".loading-thumbs", self.$container);
        self.$showMoreReviewsEl.click(function() {
            self.showMoreReviews()
        });
        self.$showMoreThumbsEl.click(function() {
            self.showMoreThumbs()
        });
        $("a.censor", self.$container).click(function() {
            self.doCensor(this)
        });
        self.initTooltips();
        self.$container.find("img.lazy").lazyload({
            threshold: 500,
            effect: "fadeIn",
            effectspeed: 100
        });
        self.initialized = true
    }
    ;
    FanTralbumCollectors.prototype.renderNano = function(optionalDataBlob, maxThumbs, fromParm, targetBlank) {
        var self = this;
        maxThumbs = maxThumbs || self.MAX_THUMBS;
        var doRender = function(collectors) {
            var hash = {
                collectors: !maxThumbs ? collectors : collectors.slice(0, maxThumbs),
                from_parm: fromParm,
                target_blank: targetBlank
            };
            self.$container.renderLiquid("fan/collection/grid/also_collected_by_nano", hash)
        };
        if (optionalDataBlob)
            doRender(optionalDataBlob.collectors);
        else if (self.context === "delete_account" && self.options.bandId) {
            self.$container.show();
            CollectorsAPI.getBandThumbs(self.options.bandId, maxThumbs, true).then(function(results) {
                doRender(results)
            })
        } else {
            self.$container.show();
            CollectorsAPI.getThumbs(self.tralbumType, self.tralbumId, null, maxThumbs, null, true, true).then(function(results) {
                doRender(results)
            })
        }
    }
    ;
    FanTralbumCollectors.prototype.doCensor = function(el) {
        var $el = $(el);
        var $reviewEl = $el.closest(".writing");
        var fanID = $el.data("fan-id");
        var itemType = $el.data("item-type");
        var itemID = $el.data("item-id");
        var fanName = $el.data("fan-name");
        var possessiveName = fanName[fanName.length - 1].toLowerCase === "s" ? fanName + "'" : fanName + "'s";
        NuDialog.alert("Remove", "Are you sure you want to remove " + possessiveName + " text? This action cannot be reversed.", {
            buttons: {
                "OK": function() {
                    CollectorsAPI.censorReview(fanID, itemType, itemID).then(function() {
                        $reviewEl.slideToggleBool(false)
                    });
                    $(this).dialog("close")
                },
                "Cancel": function() {
                    $(this).dialog("close")
                }
            }
        })
    }
    ;
    window.FanTralbumCollectors = FanTralbumCollectors
}
)(window, jQuery, ko);
(function(window, $, ko) {
    $(document).ready(function() {
        var collectorsBlob = $("#collectors-data").data("blob");
        if (collectorsBlob) {
            $(".collected-by").show();
            $(".collected-by .message").show();
            var collectors = new FanTralbumCollectors($(".collected-by .deets")[0],TralbumData.current.type[0],TralbumData.current.id,"tralbum");
            collectors.set(collectorsBlob);
            collectors.bindToDOM()
        }
    })
}
)(window, jQuery, ko);
var VideoElementWrapper = function() {
    function VideoElementWrapper(elem) {
        function eventhandler(name) {
            return function() {
                self.handleEvent(name)
            }
        }
        this.element = elem;
        this.state = "init";
        var eventnames = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "stalled", "suspend", "waiting"];
        var self = this;
        for (var i = 0; i < eventnames.length; i++)
            this.element.addEventListener(eventnames[i], eventhandler(eventnames[i]));
        this.$blackout = $('\x3cdiv class\x3d"wrapped-video-blackout"\x3e');
        this.$poster = $('\x3cimg class\x3d"wrapped-video-poster"\x3e');
        this.$play = $('\x3cdiv class\x3d"wrapped-video-play video-play-button"\x3e');
        this.$loading = $('\x3cdiv class\x3d"wrapped-video-loading video-loading-indicator"\x3e');
        $(elem).after(this.$blackout, this.$poster, this.$play, this.$loading);
        this.changeState("loading");
        this.$poster.add(this.$play).click(function() {
            elem.play()
        });
        var posterUrl = $(elem).attr("poster");
        if (posterUrl) {
            this.setPoster(posterUrl);
            this.changeState("ready")
        }
        this._stateTransitions = {
            "init": {
                "canplay": "ready",
                "playing": "playing",
                "ended": "ready",
                "error": "error",
                "progress": "ready"
            },
            "error": {
                "abort": "init",
                "emptied": "init",
                "suspend": "init"
            },
            "ready": {
                "play": "loading",
                "playing": "playing",
                "emptied": "loading"
            },
            "playing": {
                "emptied": "loading",
                "ended": "ended",
                "waiting": "loading",
                "error": "error"
            },
            "ended": {
                "play": "loading",
                "playing": "playing",
                "emptied": "loading"
            },
            "loading-playing": {
                "abort": "init",
                "playing": "playing",
                "ended": "ready",
                "error": "error"
            },
            "loading-notplaying": {
                "abort": "init",
                "canplay": "ready",
                "suspend": "ready",
                "ended": "ready",
                "error": "error"
            }
        }
    }
    VideoElementWrapper.prototype.changeState = function(state) {
        if (state && this.state != state) {
            $(this.element).parent().removeClass("state-" + this.state);
            Log.debug("new state: " + state);
            this.state = state;
            $(this.element).parent().addClass("state-" + this.state)
        }
    }
    ;
    VideoElementWrapper.prototype.handleEvent = function(eventName) {
        var currentState = this.state;
        if (currentState == "loading")
            if (this.element.paused)
                currentState = "loading-notplaying";
            else
                currentState = "loading-playing";
        Log.debug("videoevent: " + eventName + " in " + currentState);
        var transitionMap = this._stateTransitions[currentState];
        this.changeState(transitionMap && transitionMap[eventName])
    }
    ;
    VideoElementWrapper.prototype.setPoster = function(url) {
        this.$poster.attr("src", url)
    }
    ;
    return VideoElementWrapper
}();
(function(window, $) {
    function VideoPlayer(trackinfo, genericContainerSelector, properties) {
        this.init(trackinfo, genericContainerSelector, properties)
    }
    window.VideoPlayer = VideoPlayer;
    $.extend(VideoPlayer.prototype, {
        videoId: null,
        sourceType: null,
        prev_sourceType: null,
        properties: null,
        genericContainerSelector: null,
        genericIFrameElem: null,
        genericPlayer: null,
        captionText: null,
        trackinfo: null,
        musicPlaylist: null,
        currOnTrackPlayed: null,
        state: null,
        postAnimateFn: null,
        featuredId: null,
        init: function(trackinfo, genericContainerSelector, properties) {
            if (this.isPhone())
                return;
            var hasGeneric = false;
            if (trackinfo) {
                this.trackinfo = trackinfo;
                for (var i = 0; i < trackinfo.length && !hasGeneric; i++)
                    if (trackinfo[i].video_source_type == "t")
                        hasGeneric = true
            }
            if (genericContainerSelector)
                this.genericContainerSelector = genericContainerSelector;
            this.properties = properties || {};
            if (!this.properties.root_class_name)
                this.properties.root_class_name = "video-player";
            if (!this.properties.siteroot)
                this.properties.siteroot = siteroot_current;
            if (this.properties.guideElem && this.properties.parallelElem) {
                var self = this;
                var originalPadding = $(self.properties.parallelElem).css("padding-top");
                var postAnimateFn = function(doExpand) {
                    if (doExpand)
                        $(self.properties.parallelElem).css("padding-top", "" + ($(self.properties.guideElem).offset().top - $(self.properties.parallelElem).offset().top) + "px");
                    else
                        $(self.properties.parallelElem).css("padding-top", originalPadding)
                };
                this.postAnimateFn = postAnimateFn
            }
            if (this.properties.featuredSelector) {
                var featuredId = $(this.properties.featuredSelector).attr("data-id");
                if (featuredId)
                    this.featuredId = featuredId
            }
            $(this.genericContainerSelector + " video.native-video-player").on("ended", function() {
                this.currentTime = 0
            })
        },
        doVideo: function(sourceType, videoId, caption, autoplay, autoscroll) {
            if (this.isPhone())
                return;
            if (this.trackinfo && this.featuredId == videoId) {
                this.justHide();
                this.state = null;
                if (autoscroll) {
                    $("html, body").animate({
                        scrollTop: $(".featured-video-wrapper").offset().top - 20
                    }, 500);
                    var iframe = $(".featured-video-wrapper iframe")[0];
                    var video = $(".featured-video-wrapper video.native-video-player")[0];
                    if (iframe) {
                        Log.debug("posting play message to featured iframe");
                        iframe.contentWindow.postMessage("play", "*")
                    }
                    if (video) {
                        if (!VideoPlayer.featuredWrapper)
                            VideoPlayer.featuredWrapper = new VideoElementWrapper(video);
                        video.load();
                        video.play()
                    }
                }
                return
            }
            if (this.state == "open" && this.sourceType == sourceType && this.videoId == videoId) {
                this.justHide();
                this.state = null;
                return
            }
            this.state = "open";
            this.preLoad(sourceType);
            this.sourceType = sourceType;
            this.videoId = videoId;
            this.captionText = caption;
            if (sourceType == "t")
                this.do23(videoId, autoplay, autoscroll)
        },
        _loadVideo: function(frameElem, videoElem, videoId, playIt) {
            if (frameElem) {
                var message = playIt ? "startvideo" : "loadvideo";
                var msg = {
                    message: message,
                    id: videoId,
                    from: this.musicPlaylist ? "a" : "t"
                };
                Log.debug("posting message to videoframe: " + JSON.stringify(msg));
                frameElem.contentWindow.postMessage(msg, "*")
            } else if (videoElem) {
                if (!VideoPlayer.wrapper)
                    VideoPlayer.wrapper = new VideoElementWrapper(videoElem);
                var attrs = null;
                for (var i = 0; i < TralbumData.trackinfo.length; i++)
                    if (TralbumData.trackinfo[i].video_id == videoId) {
                        var video_url = TralbumData.trackinfo[i].video_mobile_url;
                        video_url = video_url.replace("video_mobile_high", "video_hd");
                        attrs = {
                            src: "http://bandcamp.23video.com/" + video_url,
                            poster: "//bandcamp.23video.com/" + TralbumData.trackinfo[i].video_poster_url
                        };
                        break
                    }
                if (attrs) {
                    videoElem.pause();
                    Log.debug("loading video with url " + attrs.src);
                    VideoPlayer.wrapper.setPoster(attrs.poster);
                    $(videoElem).attr(attrs)
                } else
                    Log.error("do not have a video url for video id " + videoId)
            }
        },
        do23: function(videoId, autoplay, autoscroll) {
            var self = this;
            var iframeElem = $(this.genericContainerSelector + " iframe");
            var frame = iframeElem[0];
            var videoElem = $(this.genericContainerSelector + " video.native-video-player");
            var video = videoElem[0];
            if (!frame && !video)
                return;
            var newUrl = this.properties.siteroot + "/videoframe?video_id\x3d" + videoId;
            if (autoplay)
                newUrl += "\x26autoplay\x3d1";
            if (BandData && BandData.id)
                newUrl += "\x26band_id\x3d" + BandData.id;
            if (this.musicPlaylist)
                newUrl += "from\x3d'a'";
            else
                newUrl += "from\x3d't'";
            this.genericIFrameElem = iframeElem;
            this.postLoad("t");
            $(this.genericContainerSelector).addClass(this.properties.root_class_name + "-viz");
            this.showCaption();
            var scrollPosSelector = this.genericContainerSelector;
            var transition = !(this.prev_sourceType || this.properties.noAnimation);
            if (transition) {
                $("#bio-container").addClass("anim-hidden");
                $(this.genericContainerSelector).slideDown({
                    complete: function() {
                        if (self.state == "open")
                            self._loadVideo(frame, video, videoId, autoplay);
                        else {
                            frame.contentWindow.location.replace(newUrl);
                            self._loadVideo(null, video, videoId, autoplay)
                        }
                        if (self.postAnimateFn)
                            self.postAnimateFn(true);
                        if (autoscroll) {
                            var topView = $(window).scrollTop();
                            var topElement = $(scrollPosSelector).offset().top;
                            if (topElement < topView) {
                                var scrollPos = $(scrollPosSelector).offset().top - 20;
                                $("html, body").animate({
                                    scrollTop: scrollPos
                                }, 500)
                            }
                        }
                        $("#bio-container").removeClass("anim-hidden");
                        return
                    }
                })
            } else {
                $(this.genericContainerSelector).show();
                if (self.state == "open")
                    self._loadVideo(frame, video, videoId, autoplay);
                else {
                    frame.contentWindow.location.replace(newUrl);
                    self._loadVideo(null, video, videoId, autoplay)
                }
                if (this.postAnimateFn)
                    this.postAnimateFn(true);
                if (autoscroll) {
                    var topView = $(window).scrollTop();
                    var topElement = $(scrollPosSelector).offset().top;
                    if (topElement < topView) {
                        var scrollPos = $(scrollPosSelector).offset().top - 20;
                        $("html, body").animate({
                            scrollTop: scrollPos
                        }, 500)
                    }
                }
            }
            $(this.genericContainerSelector).removeClass(this.properties.root_class_name + "-hidden")
        },
        preLoad: function() {
            if (this.prev_sourceType == "t")
                ;
        },
        postLoad: function(sourceType) {
            if (!this.prev_sourceType || this.prev_sourceType == sourceType)
                return;
            var containerSelector = this.genericContainerSelector;
            this.justHide(containerSelector, false);
            this.state = null
        },
        justHide: function(containerSelector, transition) {
            var self = this;
            if (!(this.sourceType && this.videoId))
                return;
            if (!containerSelector)
                containerSelector = this.genericContainerSelector;
            if (this.captionText) {
                var captionElem = $("." + this.properties.root_class_name + "-caption");
                captionElem.html("");
                captionElem.hide();
                this.captionText = null
            }
            if (transition)
                $(containerSelector).slideUp({
                    complete: function() {
                        if (self.postAnimateFn)
                            self.postAnimateFn(false)
                    }
                });
            else {
                $(containerSelector).hide();
                this.postAnimateFn(false)
            }
            $(containerSelector).removeClass(this.properties.root_class_name + "-viz");
            $(containerSelector).addClass(this.properties.root_class_name + "-hidden");
            var iframeElem = $(containerSelector + " iframe");
            var frame = iframeElem[0];
            var videoElem = $(containerSelector + " video.native-video-player");
            var video = videoElem[0];
            if (frame) {
                Log.debug("posting stop message to player iframe");
                frame.contentWindow.postMessage("stop", "*")
            }
            if (video) {
                Log.debug("pausing video element");
                video.pause()
            }
        },
        _playTrackListener: function(tracknum, self) {
            var ti = null;
            if (!self)
                self = this;
            ++tracknum;
            for (var i = 0; i < self.trackinfo.length; i++)
                if (self.trackinfo[i].track_num == tracknum) {
                    ti = TralbumData.trackinfo[i];
                    break
                }
            if (!ti || !ti.video_id) {
                this.justHide(null, true);
                this.state = null;
                return
            }
            Log.debug("queuing video track: " + tracknum);
            this.doVideo(ti.video_source_type, ti.video_id, ti.video_caption, false, false)
        },
        setPlaylistListeners: function(playlist) {
            if (this.isPhone())
                return;
            var self = this;
            playlist.ontrackplayed(function(tracknum) {
                if (tracknum == self.currOnTrackPlayed)
                    return;
                self.currOnTrackPlayed = tracknum;
                Log.debug("VideoPlayer: ontrackplayed: " + tracknum);
                self._playTrackListener(tracknum, self)
            });
            this.musicPlaylist = playlist
        },
        showCaption: function() {
            var shown = false;
            var captionElem = $("." + this.properties.root_class_name + "-caption");
            var rootElem = $("." + this.properties.root_class_name);
            if (this.captionText) {
                captionElem.html(this.captionText);
                captionElem.show();
                if (rootElem)
                    rootElem.addClass("caption-viz");
                shown = true
            } else if (captionElem) {
                captionElem.hide();
                if (rootElem)
                    rootElem.removeClass("caption-viz")
            }
            return shown
        },
        isPhone: function() {
            return window.MediaView && MediaView.mode == "phone"
        },
        xxx: null
    });
    var TralbumPageVideoPlayer = {
        _hiddenForDialogs: [],
        init: function(playlist, noAnimation) {
            if (window.Browser && Browser.make == "safari" && Browser.platform == "iphone") {
                $(document).on("bc_dialog_open", function(arg, arg2) {
                    Log.debug("hiding video for IOS while dialog is open");
                    TralbumPageVideoPlayer._hiddenForDialogs.push($("video:visible").hide())
                });
                $(document).on("bc_dialog_close", function(arg, arg2) {
                    var hid = TralbumPageVideoPlayer._hiddenForDialogs;
                    $.each(hid, function(i, $elems) {
                        Log.debug("restoring hidden video because dialog is closing");
                        $elems.show()
                    });
                    TralbumPageVideoPlayer._hiddenForDialogs = []
                })
            }
            $("video.native-video-player").each(function() {
                if ($(this).parents(".featured-video-wrapper")[0]) {
                    if (!VideoPlayer.featuredWrapper)
                        VideoPlayer.featuredWrapper = new VideoElementWrapper(this)
                } else if (!VideoPlayer.wrapper)
                    VideoPlayer.wrapper = new VideoElementWrapper(this)
            });
            if (!window.tracklistVideoPlayer) {
                var tracklistVideoPlayer = new VideoPlayer(window.TralbumData.trackinfo,".middleColumn .video-wrapper",{
                    root_class_name: "video-wrapper",
                    parallelElem: "#rightColumn",
                    guideElem: "#tralbumArt",
                    noAnimation: !!noAnimation,
                    featuredSelector: ".featured-video-wrapper"
                });
                window.tracklistVideoPlayer = tracklistVideoPlayer
            }
            if (playlist)
                window.tracklistVideoPlayer.setPlaylistListeners(playlist)
        }
    };
    window.TralbumPageVideoPlayer = TralbumPageVideoPlayer
}
)(window, jQuery);
var CrossFrame = function() {
    function CrossFrame(thisWindow, targetWindow, domain) {
        function callMethod(name, arg, serial) {
            function callFailure(err) {
                targetWindow.postMessage({
                    message: "crossframe_call_fail",
                    serial: serial,
                    error: err
                }, self.domain)
            }
            function callSuccess(result) {
                targetWindow.postMessage({
                    message: "crossframe_call_result",
                    serial: serial,
                    result: result
                }, self.domain)
            }
            var h = self.methodHandlers[name];
            if (h)
                try {
                    h(arg).then(function(result) {
                        callSuccess(result)
                    }).fail(function(err) {
                        callFailure(err)
                    })
                } catch (e) {
                    callFailure(err)
                }
            else
                callFailure("no such method")
        }
        function emitEvent(name, arg) {
            var handlers = self.eventHandlers[name];
            if (!handlers) {
                Log.debug("no handlers for " + name);
                return
            }
            for (var i = 0; i < handlers.length; i++) {
                Log.debug("calling handler for " + name + " with arg " + JSON.stringify(arg));
                try {
                    handlers[i].call(this, arg)
                } catch (e) {
                    Log.debug("caught exception in handler: " + e)
                }
            }
        }
        function popDeferred(serial) {
            var p = self.deferred[serial];
            if (p)
                delete self.deferred[serial];
            else
                Log.debug("hmm, didn't find a promise for call " + serial);
            return p
        }
        function resolveCall(serial, result) {
            var p = popDeferred(serial);
            if (p)
                p.resolve(result);
            else
                Log.debug("hmm, didn't find a promise for call " + serial)
        }
        function failCall(serial, err) {
            var p = popDeferred(serial);
            if (p)
                p.fail(err);
            else
                Log.debug("hmm, didn't find a promise for failed call " + serial)
        }
        function handleMessage(data) {
            switch (data.message) {
            case "crossframe_call":
                callMethod(data.name, data.arg, data.serial);
                break;
            case "crossframe_emit":
                emitEvent(data.name, data.arg);
                break;
            case "crossframe_call_result":
                resolveCall(data.serial, data.result);
                break;
            case "crossframe_call_fail":
                failCall(data.serial, data.error);
                break
            }
        }
        this.serial = 1;
        this.domain = domain;
        this.deferred = [];
        this.methodHandlers = {};
        this.eventHandlers = {};
        this.thisWindow = thisWindow;
        if (domain == "*")
            Log.error("warning: using * for CrossFrame domain; you should specify a specific domain");
        var self = this;
        this.call = function(name, arg) {
            var msg = {
                message: "crossframe_call",
                name: name,
                arg: arg,
                serial: this.serial++
            };
            var d = $.Deferred();
            this.deferred[msg.serial] = d;
            targetWindow.postMessage(msg, this.domain);
            return d.promise()
        }
        ;
        this.emit = function(name, arg) {
            var msg = {
                message: "crossframe_emit",
                name: name,
                arg: arg
            };
            targetWindow.postMessage(msg, this.domain)
        }
        ;
        this.messageListener = function(event) {
            if (self.domain == "*" || self.domain == event.origin)
                handleMessage(event.data);
            else
                ;
        }
        ;
        thisWindow.addEventListener("message", this.messageListener);
        this.handlers = {}
    }
    CrossFrame.prototype.handleMethod = function(name, handler) {
        this.methodHandlers[name] = handler
    }
    ;
    CrossFrame.prototype.on = function(name, cb) {
        var handlers = this.eventHandlers[name];
        if (!handlers) {
            handlers = [];
            this.eventHandlers[name] = handlers
        }
        handlers.push(cb)
    }
    ;
    CrossFrame.prototype.destroy = function() {
        this.thisWindow.removeEventListener("message", this.messageListener);
        this.methodHandlers = null;
        this.eventHandlers = null
    }
    ;
    return CrossFrame
}();
var TralbumLimits = function() {
    function isOwned() {
        var is_it = window.FanControls && window.FanControls.is_owned;
        return is_it
    }
    function isCapped(trackinfo) {
        if (!trackinfo)
            return false;
        var cap = TralbumData.play_cap_data;
        var is_capped = cap && cap.streaming_limits_enabled && !trackinfo.has_free_download ? trackinfo.play_count >= cap.streaming_limit : false;
        return is_capped
    }
    function willBeCapped(track_id) {
        var cap = null;
        var will_be_capped = false;
        var trackinfo = trackinfoForId(track_id);
        if (trackinfo)
            will_be_capped = (cap = TralbumData.play_cap_data) && cap.streaming_limits_enabled && !trackinfo.has_free_download && trackinfo.play_count + 1 >= cap.streaming_limit;
        return will_be_capped
    }
    function trackinfoForId(track_id) {
        var trackinfo = null;
        for (var i = 0; TralbumData.trackinfo && i < TralbumData.trackinfo.length; i++)
            if (TralbumData.trackinfo[i].id == track_id) {
                trackinfo = TralbumData.trackinfo[i];
                break
            }
        return trackinfo
    }
    function triggerNag(track_id) {
        if (already_nagging || $(".ui-dialog-content").dialog("isOpen") === true)
            return;
        nagDialog = NuDialog.showTemplate("limits/band_play_limits_dialog", {
            band_name: BandData.name,
            band_image_id: BandData.image_id,
            fan_name: FanData.name,
            fan_image_id: FanData.image_id,
            tralbum_title: TralbumData.current.title,
            tralbum_art_id: TralbumData.art_id,
            purchase_type: TralbumData.item_type,
            is_mobile: MediaView.mode != "desktop",
            logged_in: FanData.logged_in
        }, {
            draggable: false,
            width: "35em",
            buttons: [],
            closeOnEscape: false,
            dialogClass: "nu-dialog no-title"
        });
        already_nagging = true;
        $("#play-limits-dialog-buy-btn", nagDialog).click(function(ev) {
            ev.preventDefault();
            nagDialog.dialog("close");
            already_nagging = false;
            if (is_crowdfunding || !is_album && !trackinfoForId(track_id).is_downloadable)
                if (TralbumData.album_url) {
                    var comm = new Cookie.CommChannel("playlist");
                    comm.send("stop");
                    var url = Url.addQueryParams(TralbumData.album_url, {
                        action: "download",
                        from: "ltngtpbn"
                    });
                    window.top.location.href = url
                } else {
                    Stats.record({
                        kind: "click",
                        click: nag_stat_base + "_buy_now" + (!FanData.image_id || !BandData.image_id ? "_sans_image" : "")
                    });
                    Log.error("Streaming limit reached but track is not purchasable")
                }
            else {
                Stats.record({
                    kind: "click",
                    click: nag_stat_base + "_buy_now" + (!FanData.image_id || !BandData.image_id ? "_sans_image" : "")
                });
                TralbumDownload.showPurchaseOptionsFooter = true;
                TralbumDownload.begin(ev)
            }
        });
        $("#play-limits-dialog-cancel-btn", nagDialog).click(function() {
            Stats.record({
                kind: "click",
                click: nag_stat_base + "_no_thanks" + (!FanData.image_id || !BandData.image_id ? "_sans_image" : "")
            });
            if ($(".play-limits-dialog-header").length) {
                $(".play-limits-dialog-button-pane \x3e button").unbind("click").attr("disabled", "disabled");
                $("#play-limits-dialog-fan-img").animate({
                    left: ["-\x3d50px", "linear"],
                    opacity: 0
                }, 150);
                $("#play-limits-dialog-band-img").animate({
                    right: ["-\x3d50px", "linear"],
                    opacity: 0
                }, 150);
                $(".play-limits-dialog-perks, .play-limits-dialog-button-pane, .play-limits-dialog-footer").animate({
                    opacity: 0
                }, 250);
                $(".play-limits-dialog \x3e h2").animate({
                    opacity: .25
                }, 250);
                var heart = $("#play-limits-dialog-heart-img");
                var gifsrc = $(heart).attr("src");
                if (gifsrc.indexOf(".png") > -1) {
                    gifsrc = gifsrc.replace(".png", ".gif");
                    $(heart).attr("src", gifsrc + "?g\x3d" + Math.random()).load(function() {
                        setTimeout("TralbumLimits.closeNag();", 2100)
                    }).error(function() {
                        nagDialog.dialog("close")
                    })
                }
            } else
                nagDialog.dialog("close");
            already_nagging = false
        });
        Stats.record({
            kind: "click",
            click: nag_stat_base
        })
    }
    var is_album = false;
    var already_nagging = false;
    var nag_stat_base = null;
    var is_crowdfunding = false;
    var nagDialog = null;
    return {
        onPlayerInit: function(playlist) {
            is_album = TralbumData.item_type == "album";
            is_crowdfunding = TralbumData.on_crowdfunding_page;
            nag_stat_base = TralbumData.item_type == "album" ? "limited_tralbum_nag_ap" : "limited_tralbum_nag_tp";
            playlist.ontrackchanged(function(trackinfo) {
                if ($.inArray(playlist.get_state(), ["PLAYING", "BUFFERING"]) < 0)
                    return;
                if (willBeCapped(trackinfo.id))
                    triggerNag(trackinfo.id)
            });
            playlist.onscrubbedback(function(track_id) {
                Log.debug("scrubbed back for track_id " + track_id);
                if (willBeCapped(track_id))
                    triggerNag(track_id)
            });
            playlist.ontrackcapped(triggerNag);
            playlist.oncompletedplay(function(track_id, scrubback) {
                if (!isOwned() && TralbumData.play_cap_data && TralbumData.play_cap_data.streaming_limits_enabled) {
                    var trackinfo = null;
                    var cap = null;
                    if (trackinfo = trackinfoForId(track_id)) {
                        trackinfo.play_count += 1;
                        $.ajax({
                            url: (Url.isCustomDomain() ? siteroot_https : "") + "/capture_play",
                            type: "post",
                            data: {
                                track_id: track_id,
                                phase: "complete",
                                client_id_sig: TralbumData.client_id_sig
                            },
                            dataType: Url.isCustomDomain() && !$.support.cors ? "jsonp" : "json",
                            xhrFields: Url.isCustomDomain() ? {
                                withCredentials: true
                            } : null
                        });
                        if (isCapped(trackinfo)) {
                            trackinfo.is_capped = true;
                            playlist.cap_playback_for_track(track_id)
                        }
                    }
                }
            })
        },
        closeNag: function() {
            nagDialog.dialog("close")
        },
        updatePlayCounts: function(data) {
            if (!isOwned() && window.TralbumData.play_cap_data && TralbumData.play_cap_data.streaming_limits_enabled) {
                TralbumData.client_id_sig = data.client_id_sig;
                var counts = data.play_counts;
                for (var i = 0; i < TralbumData.trackinfo.length; i++) {
                    var ti = TralbumData.trackinfo[i];
                    ti.play_count = counts[ti.id] ? counts[ti.id].play_count : 0;
                    ti.is_capped = ti.play_count >= TralbumData.play_cap_data.streaming_limit
                }
            }
        }
    }
}();
(function(window, $, ko) {
    window.OwnerStreaming = {
        init: function(streamUrls) {
            var $el = $(".inline_player");
            TralbumData.is_purchased = true;
            Iter.each(TralbumData.trackinfo, function(trk) {
                if (!trk.file && streamUrls[trk.id])
                    trk.file = streamUrls[trk.id];
                else if (trk.file && streamUrls[trk.id] && streamUrls[trk.id]["mp3-v0"])
                    trk.file["mp3-v0"] = streamUrls[trk.id]["mp3-v0"]
            });
            if (window.Player) {
                TralbumData.is_purchased = true;
                Player.update(TralbumData);
                $el.removeClass("hidden")
            }
        }
    }
}
)(window, jQuery, ko);
(function(window, $, ko) {
    var FanControls2 = {
        isWishlisted: function(itemType, itemId) {
            var tralbumLookup = FanControls.getTralbumLookup(itemType + itemId);
            return tralbumLookup && !tralbumLookup.purchased
        },
        isFollowedFan: function(fanId) {
            return FanControls.isFollowedFan(fanId)
        },
        wishlist: function(itemType, itemId, bandId, collectData) {
            var self = this;
            if (!Identities.fan())
                return;
            if (window.TralbumData && TralbumData.current && TralbumData.current.id)
                FanControls.collectItem(Identities.fan().id, TralbumData.current.id, TralbumData.current.type, TralbumData.current.band_id);
            else {
                var params = {
                    fan_id: Identities.fan().id,
                    item_type: itemType,
                    item_id: itemId,
                    band_id: bandId,
                    purchased: null
                };
                if (collectData)
                    $.each(collectData, function(k, v) {
                        if (collectData[k])
                            params[k] = v
                    });
                var allContainers = $('.collect-item[data-collect-item\x3d"' + itemType + itemId + '"]');
                $.merge(allContainers, $('.collection-item-container[data-tralbumid\x3d"' + itemId + '"][data-tralbumtype\x3d"' + itemType + '"]'));
                var toggle = function() {
                    FanControls.toggleItem(params);
                    allContainers.toggleClass("wishlisted")
                };
                FanControls._started = false;
                FanControls.start();
                FanControls.initializeItems();
                FanControls.getData().then(function() {
                    var wishlisted = self.isWishlisted(itemType, itemId);
                    if (!wishlisted && params.stat_token)
                        Stats.record({
                            kind: "click",
                            click: params.stat_token
                        });
                    toggle();
                    FanControls.doPost(wishlisted ? "/uncollect_item_cb" : "/collect_item_cb", params, function(data) {
                        if (data.ok === true)
                            Log.note("item " + (wishlisted ? "removed" : "added") + " from wishlist");
                        else
                            toggle()
                    })
                })
            }
        },
        followBand: function(bandId, fromSignup) {
            var BandData = window.BandData || null;
            if (BandData)
                BandFollow.followUnfollow(Identities.fan().id, BandData.id, TralbumData.current ? TralbumData.current.id : null, TralbumData.current ? TralbumData.current.type : null, fromSignup);
            else {
                var params = {
                    band_id: bandId,
                    fan_id: Identities.fan().id,
                    action: "follow"
                };
                var allContainers = $('.follow-band[data-follow-band\x3d"' + bandId + '"]');
                $.merge(allContainers, $("#follow-unfollow-band_" + bandId));
                var toggle = function() {
                    $(".following-msg", allContainers).html(TM("Following"));
                    allContainers.toggleClass("following")
                };
                FanControls._started = false;
                FanControls.start();
                FanControls.initializeItems();
                FanControls.getData().then(function() {
                    toggle();
                    FanControls.doPost("/fan_follow_band_cb", params, function(data) {
                        if (data.ok === true)
                            Log.note("fan " + "followed");
                        else
                            toggle()
                    })
                })
            }
        },
        followFan: function(fanId, followData) {
            var self = this;
            var params = {
                fan_id: Identities.fan().id,
                follow_id: fanId
            };
            if (followData)
                $.each(followData, function(k, v) {
                    if (followData[k])
                        params[k] = v
                });
            var allContainers = $('.follow-fan[data-follow-fan\x3d"' + fanId + '"]');
            $.merge(allContainers, $("#follow-unfollow_" + fanId));
            FanControls._started = false;
            FanControls.start();
            allContainers.addClass("following");
            FanControls.getData().then(function() {
                FanControls.initializeItems();
                allContainers.addClass("following");
                var following = self.isFollowedFan(fanId);
                if (!following && params.stat_token)
                    Stats.record({
                        kind: "click",
                        click: params.stat_token
                    });
                FanControls.toggleFan(params);
                FanControls.doPost("/fan_follow_cb", params, function(data) {
                    if (data.ok === true)
                        Log.note("fan " + (following ? "followed" : "unfollowed"));
                    else
                        ;
                })
            })
        }
    };
    window.FanControls2 = FanControls2
}
)(window, $, ko);
(function() {
    function RecommendationsPlayer(rootNode) {
        var self = this;
        var $node = $(rootNode);
        self.stateChangeCallback = function(arg) {
            if (arg.newstate === "COMPLETED" || arg.newstate === "PAUSED")
                $node.find(".album-art-container").removeClass("playing")
        }
        ;
        self.playlist = new Player.Playlist(new WrapperSoundPlayer,"recommendations_footer",null,{
            no_trackstate: true
        });
        self.playlist.onstatechanged(self.stateChangeCallback);
        self.currentItem = null;
        self.playpauseItem = function(item) {
            if (self.currentItem && self.currentItem.featuredTrack.id == item.featuredTrack.id)
                self.playlist.playpause();
            else {
                self.currentItem = item;
                self.playlist.load([item.featuredTrack]);
                self.playlist.play(1);
                var playClick = self.currentItem.featuredTrack.clickType;
                Stats.record({
                    kind: "click",
                    click: playClick
                })
            }
        }
    }
    function RecommendationsFooter(rootNode) {
        var $node = $(rootNode);
        $node.find(".album-art-container").on("mouseenter", function() {
            $node.find(".recommended-album").removeClass("selected");
            $(this.parentNode).addClass("selected");
            $node.find(".first-row").addClass("expanded")
        });
        $node.find(".title-and-artist").on("mouseenter", function() {
            $node.find(".recommended-album").removeClass("selected");
            $(this.parentNode).addClass("selected");
            $node.find(".first-row").addClass("expanded")
        });
        $node.find(".first-row").on("mouseleave", function() {
            $node.find(".first-row").removeClass("expanded");
            $node.find(".recommended-album").removeClass("selected")
        });
        $node.find(".bcw-image").on("mouseenter", function() {
            $node.find(".bcw-blurb").addClass("img-hover")
        });
        $node.find(".bcw-image").on("mouseleave", function() {
            $node.find(".bcw-blurb").removeClass("img-hover")
        });
        var player = new RecommendationsPlayer(rootNode);
        $node.find(".album-art-container .play-button").on("click", function() {
            $(this).parent().children(".recommended-album .album-art").click()
        });
        $node.find(".recommended-album .album-art").on("click", function() {
            var selector = "#" + this.parentNode.parentNode.id + ".recommended-album";
            var track_id = $node.find(selector).data("trackid");
            var audio_url = $node.find(selector).data("audiourl");
            var audio_duration = $node.find(selector).data("duration");
            var from = $node.find(selector).data("from");
            var clickType;
            if (from.startsWith("footer-ar"))
                clickType = "footer_artist_rec_play";
            else if (from.startsWith("footer-cc"))
                clickType = "footer_cc_rec_play";
            else if (from.startsWith("footer-nn"))
                clickType = "footer_nn_rec_play";
            else if (from.startsWith("footer-aotd"))
                clickType = "footer_aotd_rec_play";
            else if (from.startsWith("footer-bcw"))
                clickType = "footer_bcw_rec_play";
            var item = {
                "featuredTrack": {
                    "id": track_id,
                    "file": audio_url,
                    "duration": audio_duration,
                    "clickType": clickType
                }
            };
            $node.find(".album-art-container").removeClass("playing");
            $(this).parent().addClass("playing");
            player.playpauseItem(item)
        });
        $node.find(".title-and-artist p").bcTruncate(TruncateProfile.get("footer_four"));
        $node.find(".comment-contents").bcTruncate(TruncateProfile.get("footer_fan_comment"));
        $node.find(".artist-recs \x3e .section-title").bcTruncate(TruncateProfile.get("footer_two"));
        $node.find(".comment-author").bcTruncate(TruncateProfile.get("footer_one"));
        if ($("body").hasClass("has-rec-footer"))
            Stats.record({
                kind: "click",
                click: "footer_created_clientside"
            });
        $node.find(".recommended-album.footer-ar .album-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_artist_rec_click"
            })
        });
        $node.find(".recommended-album.footer-cc .album-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_cc_rec_click"
            })
        });
        $node.find(".recommended-album.footer-nn .album-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_nn_rec_click"
            })
        });
        $node.find(".recommended-album.footer-aotd .album-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_aotd_rec_click"
            })
        });
        $node.find(".recommended-album.footer-bcw .album-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_bcw_rec_click"
            })
        });
        $node.find(".recommended-story.artist-related .daily-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_artist_article_click"
            })
        });
        $node.find(".recommended-story.genre-related .daily-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_genre_article_click"
            })
        });
        $node.find(".recommended-story.fallback .daily-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_fallback_article_click"
            })
        });
        $node.find(".recommended-story.override .daily-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_override_article_click"
            })
        });
        $node.find(".bc-weekly-section .bcw-link").on("click", function() {
            Stats.record({
                kind: "click",
                click: "footer_bcw_click"
            })
        });
        var footerSeenImage = $node.find("img.lazy.first-row-beacon");
        if (footerSeenImage && footerSeenImage.length > 0) {
            var firstRowClicks = footerSeenImage.data("clicks");
            footerSeenImage.lazyload({
                appear: function() {
                    Stats.record({
                        kind: "click batch",
                        clicks: firstRowClicks
                    })
                }
            })
        }
        var editorialSeenImage = $node.find("img.lazy.editorial-seen-beacon");
        if (editorialSeenImage && editorialSeenImage.length > 0) {
            var editorialClicks = editorialSeenImage.data("clicks");
            editorialSeenImage.lazyload({
                appear: function() {
                    Stats.record({
                        kind: "click batch",
                        clicks: editorialClicks
                    })
                }
            })
        }
    }
    $(document).ready(function() {
        RecommendationsFooter($(".recommendations-container")[0])
    })
}
)();
