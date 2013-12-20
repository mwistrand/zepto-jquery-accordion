!function(a,b){"use strict";b.u$||(b.u$={});var c={collapsedClass:"is-collapsed",eventNamespace:null,events:null,expandedClass:"is-expanded",foldClass:"js-fold",multiOpen:!0,setAriaAttributes:!0,togglerClass:"js-toggler"},d=function(){var b={toggle:function(b){var c=this.$togglers.index(b.currentTarget),d=this.getFold(a(b.currentTarget),c);b.preventDefault(),this.toggle(d,c)},keyToggle:function(c){var d=a(c.currentTarget);13!==c.which&&32!==c.which||!d.hasClass(this.options.togglerClass)||(c.preventDefault(),b.toggle.call(this,c))}};return function(c,d,e,f){var g=this.options.eventNamespace||"",h=g+"Accordion."+c+"Event",i=a.proxy(b[c],this);d.on((f||"click")+"."+h,e,i)}}(),e={options:c,initialize:function(b,c){this.options=a.extend({},this.options,c||null),this.$container=b,this.reset(),this.attach(b)},reset:function(){var a=this.options;this.$togglers=this.$container.find("."+a.togglerClass),this.$folds=this.$container.find("."+a.foldClass),this.options.setAriaAttributes?this.setAriaAttributes(this.$togglers):this.options.setAriaAttributes=!0},setAriaAttributes:function(b){var c=(this.options.eventNamespace||"")+"-accordion-";b.each(function(b,d){var e=c+b.toString(),f=a(d),g=this.getFold(f,b),h=!g.hasClass(this.options.collapsedClass);f.attr("aria-controls",e),f.attr("role","tab"),f.attr("aria-selected","false"),f.attr("tabindex","-1"),g.attr("aria-labelledby",e),g.attr("role","tabpanel"),g.attr("aria-expanded",h),g.attr("aria-hidden",!h)}.bind(this))},attach:function(b){var c=this.options.togglerClass,e=a.isFunction(c)?null:"."+c;d.call(this,"toggle",b,e),d.call(this,"keyToggle",b,e,"keyup")},detach:function(a){var b,c=(this.options.eventNamespace||"")+"Accordion";a&&a.length?(a.removeClass(this.options.togglerClass),this.$togglers=this.$togglers.not(a)):b=u$.detach(this,c,"$container","$togglers","$folds"),b||(b=[a]),b.unshift("detach"),this.emit.apply(this,b)},toggle:function(a,b){var c=a.hasClass(this.options.expandedClass)?"collapse":this.options.url?"load":"expand";this[c](a,b)},expand:function(a,b){var c=a.data("maxheight")||a.css("max-height"),d=this.options;this.emit("beforeShow",a,this.$togglers,b),a.removeClass(d.collapsedClass).addClass(d.expandedClass),u$.slideDown(a,c),this.options.multiOpen||this.collapseAll(a),this.emit("show",a,this.$togglers,b)},collapseAll:function(b){this.$folds.each(function(c,d){b&&d!==b.get(0)&&this.collapse(a(d),c)}.bind(this))},collapse:function(a,b){this.emit("beforeHide",a,this.$togglers,b),a.slideUp({complete:function(){var b=this.options;a.css("display","none").removeClass(b.expandedClass).addClass(b.collapsedClass)}.bind(this)}),this.emit("hide",a,this.$togglers,b)},getFold:function(b,c){var d=b.data("foldid");return d?a("#"+d):this.$folds.eq(c)},emit:function(b){var c=this.options.events,d=c?0:1,e=c?this.trigger:this.options["on"+b.charAt(0).toUpperCase()+b.slice(1)];a.isFunction(e)&&e.apply(this,[].slice.call(arguments,d))}},f=a.extend(Object.create(e),u$.cacheMixin,u$.loaderMixin,{options:a.extend({},c,{cache:!0}),render:function(a,b,c){"json"===this.options.responseType?u$.renderJSON(b,a,this.options.template):b.html(a),this.expand(b,c)},load:function(b,c){var d,e=this.options.query||"";a.isFunction(e)&&(e=e(b,c,this.$togglers)),d=this.getCache(e),d?this.render(d,b,c):this.send(e,b,c)},send:function(b,c,d){a.ajax({url:this.options.url,data:b,beforeSend:function(a,b){this.showLoader(),this.emit("beforeSend",c,this.$togglers,d,a,b)}.bind(this),success:function(a,e,f){this.hideLoader(),this.setCache(b,f.responseText),this.render(f.responseText,c,d)}.bind(this),error:function(a,b,e){this.emit("ajaxError",c,this.$togglers,d,a,b,e)}.bind(this)})}});u$.accordion=function(b,c){var d,g=e;return u$.is$(b)||(c=b,b=null),c&&c.url&&(g=f),d=Object.create(g),c&&c.events&&a.extend(d,c.events),d.initialize(b&&b.eq(0),c),d}}(window.Zepto||window.jQuery,window,document);