! function(e) {
    var t = {};

    function n(l) {
        if(t[l]) return t[l].exports;
        var r = t[l] = {
            i: l,
            l: !1,
            exports: {}
        };
        return e[l].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, l) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: l
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if(1 & t && (e = n(e)), 8 & t) return e;
        if(4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if(n.r(l), Object.defineProperty(l, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for(var r in e) n.d(l, r, function(t) {
                return e[t]
            }.bind(null, r));
        return l
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/bundles/melvturnstile/", n(n.s = "wNoc")
}({
    "+t2p": function(e) {
        e.exports = JSON.parse('{"sw-settings-basic-information":{"captcha":{"label":{"cloudFlareTurnstile":"CloudFlare Turnstile","cloudFlareTurnstileSiteKey":"CloudFlare Turnstile site key","cloudFlareTurnstileSecretKey":"CloudFlare Turnstile secret key","cloudFlareTurnstileDescription":"Turnstile is CloudFlare\'s CAPTCHA alternative. It automatically chooses from a rotating suite of non-intrusive browser challenges based on telemetry and client behavior exhibited during a session."}}}}')
    },
    "R+yN": function(e) {
        e.exports = JSON.parse('{"sw-settings-basic-information":{"captcha":{"label":{"cloudFlareTurnstile":"CloudFlare Turnstile","cloudFlareTurnstileSiteKey":"CloudFlare Turnstile site key","cloudFlareTurnstileSecretKey":"CloudFlare Turnstile secret key","cloudFlareTurnstileDescription":"Turnstile is CloudFlare\'s CAPTCHA alternative. It automatically chooses from a rotating suite of non-intrusive browser challenges based on telemetry and client behavior exhibited during a session."}}}}')
    },
    wNoc: function(e, t, n) {
        "use strict";
        n.r(t);
        var l = n("+t2p"),
            r = n("R+yN"),
            s = Shopware,
            i = s.Component,
            c = s.Locale;
        c.extend("en-GB", l), c.extend("de-DE", r), i.override("sw-settings-captcha-select-v2", {
            template: `\n{% block sw_settings_captcha_select_v2_google_recaptcha_v2 %}\n    {% parent() %}\n    {% block sw_settings_captcha_select_v2_cloudflare_turnstile %}\n        <sw-container\n                v-if="currentValue.cloudFlareTurnstile && currentValue.cloudFlareTurnstile.isActive"\n                class="sw-settings-captcha-select-v2__cloudflare-turnstile"\n        >\n\n        \n            {% block sw_settings_captcha_select_v2_cloudflare_turnstile_description %}\n                <p class="sw-settings-captcha-select-v2__description sw-settings-captcha-select-v2__cloudflare-turnstile-description">\n                    {{ $tc(\'sw-settings-basic-information.captcha.label.cloudFlareTurnstileDescription\') }}\n                </p>\n            {% endblock %}\n\n            \n            {% block sw_settings_captcha_select_v2_cloudflare_turnstile_site_key %}\n                <sw-text-field\n                        v-model="currentValue.cloudFlareTurnstile.config.siteKey"\n                        name="cloudFlareTurnstileSiteKey"\n                        :label="$tc(\'sw-settings-basic-information.captcha.label.cloudFlareTurnstileSiteKey\')"\n        @blur="updateCaptchaConfig"\n                />\n            {% endblock %}\n\n            \n            {% block sw_settings_captcha_select_v2_cloudflare_turnstile_secret_key %}\n                <sw-text-field\n                        v-model="currentValue.cloudFlareTurnstile.config.secretKey"\n                        name="cloudFlareTurnstileSecretKey"\n                        :label="$tc(\'sw-settings-basic-information.captcha.label.cloudFlareTurnstileSecretKey\')"\n        @blur="updateCaptchaConfig"\n                />\n            {% endblock %}\n        </sw-container>\n    {% endblock %}\n{% endblock %}`,

            mounted() {
                if (!this.currentValue.cloudFlareTurnstile) {
                    this.currentValue.cloudFlareTurnstile = {
                        isActive: false,
                        config: {
                            siteKey: '',
                            secretKey: ''
                        }
                    };
                }
                console.log('currentValue.cloudFlareTurnstile:', this.currentValue.cloudFlareTurnstile);
            },

            methods: {
                // Test handler
                handleInput(event) {
                    console.log('input triggered:', event);
                },

                updateCaptchaConfig() {
                    this.$emit('input', this.currentValue.cloudFlareTurnstile.config);
                    console.log('Updated Captcha Config:', this.currentValue.cloudFlareTurnstile.config);
                }
            }
        });
    }
});