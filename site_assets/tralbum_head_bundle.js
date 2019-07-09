/* 
    concatenation of 

    cart_head.js, 
    truncate.js, 
    truncate_profiles.js 

*/
var Cart = {
    init_data: null,
    writeCart: true,
    contentsScriptLoad: function() {
        if (window.ClientID) {
            var params = {
                client_id: ClientID,
                bust: (new Date).getTime()
            };
            var pageData = $("#pagedata").data("blob");
            if (pageData && pageData.localize_page)
                params.localize_page = pageData.localize_page;
            if (window.MediaView)
                params.mm = MediaView.mode;
            var url = Url.addQueryParams(siteroot_current + "/cart/contents.js", params);
            document.write('\x3cscript type\x3d"text/javascript" src\x3d"' + url + '"\x3e\x3c/scr' + "ipt\x3e")
        }
    },
    renderInitial: function(html) {
        if (Cart.writeCart == false)
            return;
        if (window.MediaView && MediaView.mode == "phone") {
            var newNavCartIcon = $("#menubar #cart-item")[0];
            if (newNavCartIcon) {
                Log.note("inserting mobile cart after element #menubar");
                $("#menubar").after(html);
                $("#sidecartHeader").remove();
                var cartLink = $("a", newNavCartIcon)[0];
                if (cartLink) {
                    Log.note("hijacking click on cart element '#menubar #cart-item a':");
                    $(cartLink).on("click", false)
                }
                if (Cart.init_data && Cart.init_data.items && Cart.init_data.items.length) {
                    $("#menubar").removeClass("extended");
                    $("#cart-item").show().find(".cart-number").text(Cart.init_data.items.length)
                }
            } else
                $("#propOpenWrapper").prepend(html)
        } else
            document.write(html)
    }
};
(function($) {
    var elapsed = 0;
    var elemCount = 0;
    $.fn.bcTruncate = function(opt, moreText, lessText) {
        function truncateDo(action, elems) {
            elems = elems.filter(function() {
                return $(this).data("bcTruncate")
            }).toArray();
            $.each(elems, function(i, elem) {
                var wrapper = $(elem).find(".bcTruncateMore");
                var ellipsis = $(elem).find(".bcTruncateEllipsis");
                if (!wrapper) {
                    Log.debug("truncate more wrapper not found");
                    return
                }
                if (action == "toggle")
                    action = wrapper.css("display") == "none" ? "expand" : "collapse";
                if (action == "expand") {
                    $(wrapper).show();
                    $(ellipsis).hide();
                    Log.debug("bcTruncate: external expand " + ellipsis.html(), elem)
                } else {
                    $(wrapper).hide();
                    $(ellipsis).show();
                    Log.debug("bcTruncate: external collapse", elem)
                }
            })
        }
        function textNodeIterator(startNode, fn, constrained, backward) {
            var node = startNode;
            var stopNode = constrained ? node : document;
            var sibling = backward ? "previousSibling" : "nextSibling";
            for (var child = backward ? "lastChild" : "firstChild"; node; ) {
                if (node.nodeType == 1) {
                    var display = $(node).css("display");
                    if (display == "inline" || node === startNode)
                        if (node[child]) {
                            node = node[child];
                            continue
                        }
                } else if (node.nodeType == 3) {
                    var result = fn(node);
                    if (result === false)
                        return
                }
                if (node === stopNode)
                    return;
                for (; !node[sibling]; ) {
                    node = node.parentNode;
                    if (node === stopNode)
                        return
                }
                node = node[sibling]
            }
        }
        function charIterator(node$$0, offset, fn, backward) {
            var str;
            var len;
            var c;
            var loopTest = backward ? function() {
                return c >= 0
            }
            : function() {
                return c < len
            }
            ;
            var loopNext = backward ? function() {
                c--
            }
            : function() {
                c++
            }
            ;
            textNodeIterator(node$$0, function(node) {
                str = node.nodeValue;
                len = str.length;
                for (c = offset !== null ? offset : backward ? len - 1 : 0; loopTest(); loopNext()) {
                    var result = fn(str.charAt(c), node, c);
                    if (result === false)
                        return result
                }
                offset = null
            }, false, backward)
        }
        function lineIterator(root, fn) {
            var lineIndex = 0;
            var line = [];
            var prevRect = null;
            var result = null;
            textNodeIterator(root, function(node) {
                range$$0.selectNode(node);
                var rects = range$$0.getClientRects();
                $.each(rects, function(i, rect) {
                    if (prevRect && !isSameLine(rect, prevRect)) {
                        result = fn(lineIndex, line);
                        lineIndex++;
                        line = []
                    }
                    if (result !== false) {
                        line.push({
                            rect: rect,
                            node: node,
                            nodeRects: rects
                        });
                        if (rect.height > 0)
                            prevRect = rect
                    }
                    return result
                });
                return result
            }, true);
            if (line.length)
                fn(lineIndex, line)
        }
        function lineToFirstChar(line) {
            var first = line[0];
            var rect = first.rect;
            var node = first.node;
            var nodeRects = first.nodeRects;
            var nodeWidthPx = 0;
            var priorLinesWidthPx = 0;
            var foundRect = false;
            $.each(nodeRects, function(i, thisRect) {
                nodeWidthPx += thisRect.width;
                if (!foundRect)
                    if (thisRect !== rect)
                        priorLinesWidthPx += thisRect.width;
                    else
                        foundRect = true
            });
            var charCount = node.nodeValue.replace(/\s{2,}/g, " ").length;
            var offset = Math.floor(priorLinesWidthPx / (nodeWidthPx / charCount));
            return [node, offset]
        }
        function isSameLine(rectA, rectB) {
            var result = rectA.top >= rectB.top && rectA.bottom <= rectB.bottom || rectB.top >= rectA.top && rectB.bottom <= rectA.bottom;
            return result
        }
        function backupToSplitPoint(root, node$$0, offset$$0, minDistance, maxDistance) {
            var hardLoc;
            var softLoc;
            var distance = 0;
            charIterator(node$$0, offset$$0, function(chr, node, offset) {
                var element = node.parentNode;
                if (element !== root && !$.contains(root, element))
                    return false;
                if (distance > maxDistance)
                    return false;
                if (distance == minDistance)
                    hardLoc = [node, offset];
                if (distance >= minDistance) {
                    var isWordTerminator = chr.search(/[\s\-\.,;\u3001\u3002]/) != -1;
                    if (isWordTerminator)
                        softLoc = [node, offset];
                    else if (softLoc)
                        return false
                }
                distance++
            }, true);
            return softLoc || hardLoc
        }
        function surroundRange(newParent, range) {
            newParent.appendChild(range.extractContents());
            range.insertNode(newParent)
        }
        function truncate(root) {
            var lines = [];
            lineIterator(root, function(lineIndex, line) {
                lines.push(line);
                if (lineIndex == opt.splitTrigger) {
                    var wrapper = $('\x3cspan class\x3d"bcTruncateMore" style\x3d"display:none"\x3e');
                    var more = $(opt.textHints ? "\x3cspan\x3e\x26nbsp; \x3ca\x3e" + opt.moreHTML + "\x3c/a\x3e\x3c/span\x3e" : "");
                    var ellipsis = $("\x3cspan\x3e" + opt.ellipsisHTML + "\x3c/span\x3e");
                    var loc = lineToFirstChar(lines[opt.splitDisplay]);
                    var lastLineSlop = opt.lastLineSlop !== null ? opt.lastLineSlop : more.text().length + ellipsis.text().length + 2;
                    loc = backupToSplitPoint(root, loc[0], loc[1], lastLineSlop, 100);
                    if (loc) {
                        range$$0.selectNode(root.lastChild);
                        range$$0.setStart(loc[0], loc[1]);
                        surroundRange(wrapper.get(0), range$$0);
                        wrapper.before(ellipsis).after(more);
                        var target;
                        if (more.find("a").length > 0)
                            target = more;
                        else
                            target = $(root);
                        if (opt.click)
                            target.toggle(function() {
                                $([wrapper, ellipsis]).toggle();
                                more.find("a").html(opt.lessHTML);
                                Log.debug("bcTruncate: expand", root)
                            }, function() {
                                $([wrapper, ellipsis]).toggle();
                                more.find("a").html(opt.moreHTML);
                                if (isPhone)
                                    Dom.scrollToElement(root, null, true);
                                Log.debug("bcTruncate: collapse", root)
                            })
                    }
                    return false
                }
            })
        }
        function doWork(elem, deferred) {
            var msec = TimeIt(function() {
                truncate(elem)
            });
            elapsed += msec;
            $(elem).data("bcTruncate", true);
            Log.debug("bcTruncate " + ++elemCount + " (" + (deferred ? "deferred; " : "") + msec + "ms; total: " + elapsed + "ms): ", elem)
        }
        function finishWork() {
            range$$0.detach();
            range$$0 = null
        }
        if (typeof opt == "string") {
            truncateDo(opt, this);
            return this
        }
        var isPhone = window.MediaView && MediaView.mode == "phone";
        if (moreText == "" || lessText == "")
            Log.server("bcTruncate - null strings for more/less more [" + moreText + "] less [" + lessText + "]", "error");
        if (typeof moreText === "undefined" || moreText == "")
            moreText = isPhone ? "see\x26nbsp;more" : "more";
        if (typeof lessText === "undefined" || lessText == "")
            lessText = isPhone ? "see\x26nbsp;less" : "less";
        opt = opt || {};
        opt = $.extend({
            truncate: true,
            click: true,
            textHints: true,
            splitTrigger: 16,
            splitDisplay: 12,
            lastLineSlop: null,
            ellipsisHTML: "\x3cspan class\x3d'bcTruncateEllipsis'\x3e...\x3c/span\x3e",
            moreHTML: moreText,
            lessHTML: lessText
        }, opt);
        if (!opt.truncate)
            return;
        if (opt.noLess)
            opt.lessHTML = "";
        if (opt.noMore)
            opt.moreHTML = "";
        if (!window.Capabilities || !Capabilities.hasCSSOM()) {
            Log.info("bcTruncate: browser doesn't have Range and ClientRect support; aborting");
            return
        }
        var elems = this.filter(function() {
            return !$(this).data("bcTruncate")
        }).toArray();
        var deferredElems = [];
        var deferredCount = 0;
        var range$$0 = document.createRange();
        $.each(elems, function(i, elem) {
            if (elapsed > 25)
                deferredElems.push(elem);
            else
                doWork(elem)
        });
        deferredCount = deferredElems.length;
        if (deferredCount)
            $(document).ready(function() {
                var tid = setInterval(function() {
                    var elem = deferredElems.shift();
                    doWork(elem, true);
                    if (!deferredElems.length) {
                        clearInterval(tid);
                        finishWork()
                    }
                }, 0)
            });
        else
            finishWork();
        return this
    }
}
)(jQuery);
var TruncateProfile = {
    buyItem: {
        desktop: {},
        phone: {
            splitTrigger: 8,
            splitDisplay: 5
        }
    },
    bio: {
        desktop: {
            splitTrigger: 12,
            splitDisplay: 7
        },
        phone: {
            splitTrigger: 10,
            splitDisplay: 7
        }
    },
    nmm: {
        desktop: {
            splitTrigger: 18,
            splitDisplay: 14
        },
        phone: {
            splitTrigger: 10,
            splitDisplay: 7
        }
    },
    tralbum_long: {
        desktop: {
            truncate: false
        },
        phone: {
            splitTrigger: 14,
            splitDisplay: 10
        }
    },
    tralbum_about: {
        desktop: {
            splitTrigger: 23,
            splitDisplay: 20,
            noLess: true
        },
        phone: {
            splitTrigger: 14,
            splitDisplay: 10
        }
    },
    fan_bio: {
        desktop: {
            truncate: false
        },
        phone: {
            textHints: false,
            splitTrigger: 5,
            splitDisplay: 3
        }
    },
    fan_bio_2017: {
        desktop: {
            splitTrigger: 5,
            splitDisplay: 3,
            noLess: true
        },
        phone: {
            splitTrigger: 5,
            splitDisplay: 3,
            noLess: true
        }
    },
    fan_why: {
        desktop: {
            truncate: false
        },
        phone: {
            textHints: false,
            click: false,
            splitTrigger: 6,
            splitDisplay: 3
        }
    },
    fan_why_mini: {
        desktop: {
            splitTrigger: 2,
            splitDisplay: 2
        },
        phone: {
            splitTrigger: 2,
            splitDisplay: 2
        }
    },
    subscribe: {
        desktop: {
            splitTrigger: 10,
            splitDisplay: 6
        },
        phone: {
            splitTrigger: 4,
            splitDisplay: 4
        }
    },
    footer_four: {
        desktop: {
            splitTrigger: 4,
            splitDisplay: 4,
            noLess: true,
            moreHTML: "",
            lastLineSlop: 2
        }
    },
    footer_two: {
        desktop: {
            splitTrigger: 2,
            splitDisplay: 2,
            noLess: true,
            noMore: true,
            lastLineSlop: 3
        }
    },
    footer_one: {
        desktop: {
            splitTrigger: 1,
            splitDisplay: 1,
            noLess: true,
            noMore: true
        }
    },
    footer_fan_comment: {
        desktop: {
            splitTrigger: 4,
            splitDisplay: 4,
            noLess: true,
            noMore: true,
            lastLineSlop: 30
        }
    },
    get: function(type) {
        var mode = window.MediaView && MediaView.mode || "desktop";
        return this[type][mode]
    }
};
