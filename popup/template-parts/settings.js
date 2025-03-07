Satus.prototype.menu.main.settings = {
    type: 'directory',
    icon: '<svg viewBox="0 0 24 24"><path d="M19.4 13l.1-1v-1l2-1.6c.2-.2.3-.5.2-.7l-2-3.4c-.2-.3-.4-.3-.6-.3l-2.5 1-1.7-1-.4-2.6c0-.2-.3-.4-.5-.4h-4c-.3 0-.5.2-.5.4l-.4 2.7c-.6.2-1.1.6-1.7 1L5 5c-.2-.1-.4 0-.6.2l-2 3.4c0 .3 0 .5.2.7l2 1.6a8 8 0 0 0 0 2l-2 1.6c-.2.2-.3.5-.2.7l2 3.4c.2.3.4.3.6.3l2.5-1 1.7 1 .4 2.6c0 .2.2.4.5.4h4c.3 0 .5-.2.5-.4l.4-2.7c.6-.2 1.1-.6 1.7-1l2.5 1c.2.1.4 0 .6-.2l2-3.4c0-.2 0-.5-.2-.7l-2-1.6zM12 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"></svg>',

    appearance: {
        type: 'directory',
        icon: '<svg viewBox="0 0 24 24"><path d="M7 16c.6 0 1 .5 1 1a2 2 0 0 1-2 2h-.5a4 4 0 0 0 .5-2c0-.6.5-1 1-1M18.7 3a1 1 0 0 0-.7.3l-9 9 2.8 2.7 9-9c.3-.4.3-1 0-1.4l-1.4-1.3a1 1 0 0 0-.7-.3zM7 14a3 3 0 0 0-3 3c0 1.3-1.2 2-2 2 1 1.2 2.5 2 4 2a4 4 0 0 0 4-4 3 3 0 0 0-3-3z"></svg>',

        improvedtube_youtube_icon: {
            label: 'improvedtubeIconOnYoutube',
            type: 'select',
            options: [{
                label: 'disabled',
                value: 'disabled'
            }, {
                label: 'youtubeHeaderLeft',
                value: 'header_left'
            }, {
                label: 'youtubeHeaderRight',
                value: 'header_right'
            }, {
                label: 'draggable',
                value: 'draggable'
            }, {
                label: 'belowPlayer',
                value: 'below_player'
            }]
        },
        improvedtube_browser_icon: {
            label: 'improvedtubeIconInBrowser',
            type: 'select',

            options: [{
                label: 'onlyActiveOnYoutube',
                value: 'youtube'
            }, {
                label: 'alwaysActive',
                value: 'always'
            }]
        }
    },
    languages: {
        type: 'directory',
        icon: '<svg viewBox="0 0 24 24"><path d="M12.9 15l-2.6-2.4c1.8-2 3-4.2 3.8-6.6H17V4h-7V2H8v2H1v2h11.2c-.7 2-1.8 3.8-3.2 5.3-1-1-1.7-2.1-2.3-3.3h-2c.7 1.6 1.7 3.2 3 4.6l-5.1 5L4 19l5-5 3.1 3.1.8-2zm5.6-5h-2L12 22h2l1.1-3H20l1.1 3h2l-4.5-12zm-2.6 7l1.6-4.3 1.6 4.3H16z"></svg>',
        language: {
            label: 'improvedtubeLanguage',
            type: 'select',
            options: [{
                value: "en",
                label: "English"
            }, {
                value: "es",
                label: "Español (España)"
            }, {
                value: "es-419",
                label: "Español (Latinoamérica)"
            }, {
                value: "es-US",
                label: "Español (US)"
            }, {
                value: "ru",
                label: "Русский"
            }, {
                value: "de",
                label: "Deutsch"
            }, {
                value: "pt-PT",
                label: "Português"
            }, {
                value: "pt",
                label: "Português (Brasil)"
            }, {
                value: "fr",
                label: "Français"
            }, {
                value: "pl",
                label: "Polski"
            }, {
                value: "ja",
                label: "日本語"
            }, {
                value: "af",
                label: "Afrikaans"
            }, {
                value: "az",
                label: "Azərbaycan"
            }, {
                value: "id",
                label: "Bahasa Indonesia"
            }, {
                value: "ms",
                label: "Bahasa Malaysia"
            }, {
                value: "bs",
                label: "Bosanski"
            }, {
                value: "ca",
                label: "Català"
            }, {
                value: "cs",
                label: "Čeština"
            }, {
                value: "da",
                label: "Dansk"
            }, {
                value: "et",
                label: "Eesti"
            }, {
                value: "eu",
                label: "Euskara"
            }, {
                value: "fil",
                label: "Filipino"
            }, {
                value: "fr-CA",
                label: "Français (Canada)"
            }, {
                value: "gl",
                label: "Galego"
            }, {
                value: "hr",
                label: "Hrvatski"
            }, {
                value: "zu",
                label: "IsiZulu"
            }, {
                value: "is",
                label: "Íslenska"
            }, {
                value: "it",
                label: "Italiano"
            }, {
                value: "sw",
                label: "Kiswahili"
            }, {
                value: "lv",
                label: "Latviešu valoda"
            }, {
                value: "lt",
                label: "Lietuvių"
            }, {
                value: "hu",
                label: "Magyar"
            }, {
                value: "nl",
                label: "Nederlands"
            }, {
                value: "no",
                label: "Norsk"
            }, {
                value: "uz",
                label: "O‘zbek"
            }, {
                value: "ro",
                label: "Română"
            }, {
                value: "sq",
                label: "Shqip"
            }, {
                value: "sk",
                label: "Slovenčina"
            }, {
                value: "sl",
                label: "Slovenščina"
            }, {
                value: "sr-Latn",
                label: "Srpski"
            }, {
                value: "fi",
                label: "Suomi"
            }, {
                value: "sv",
                label: "Svenska"
            }, {
                value: "vi",
                label: "Tiếng Việt"
            }, {
                value: "tr",
                label: "Türkçe"
            }, {
                value: "be",
                label: "Беларуская"
            }, {
                value: "bg",
                label: "Български"
            }, {
                value: "ky",
                label: "Кыргызча"
            }, {
                value: "kk",
                label: "Қазақ Тілі"
            }, {
                value: "mk",
                label: "Македонски"
            }, {
                value: "mn",
                label: "Монгол"
            }, {
                value: "sr",
                label: "Српски"
            }, {
                value: "uk",
                label: "Українська"
            }, {
                value: "el",
                label: "Ελληνικά"
            }, {
                value: "hy",
                label: "Հայերեն"
            }, {
                value: "iw",
                label: "עברית"
            }, {
                value: "ur",
                label: "اردو"
            }, {
                value: "ar",
                label: "العربية"
            }, {
                value: "fa",
                label: "فارسی"
            }, {
                value: "ne",
                label: "नेपाली"
            }, {
                value: "mr",
                label: "मराठी"
            }, {
                value: "hi",
                label: "हिन्दी"
            }, {
                value: "bn",
                label: "বাংলা"
            }, {
                value: "pa",
                label: "ਪੰਜਾਬੀ"
            }, {
                value: "gu",
                label: "ગુજરાતી"
            }, {
                value: "ta",
                label: "தமிழ்"
            }, {
                value: "te",
                label: "తెలుగు"
            }, {
                value: "kn",
                label: "ಕನ್ನಡ"
            }, {
                value: "ml",
                label: "മലയാളം"
            }, {
                value: "si",
                label: "සිංහල"
            }, {
                value: "th",
                label: "ภาษาไทย"
            }, {
                value: "lo",
                label: "ລາວ"
            }, {
                value: "my",
                label: "ဗမာ"
            }, {
                value: "ka",
                label: "ქართული"
            }, {
                value: "am",
                label: "አማርኛ"
            }, {
                value: "km",
                label: "ខ្មែរ"
            }, {
                value: "zh-CN",
                label: "中文 (简体)"
            }, {
                value: "zh-TW",
                label: "中文 (繁體)"
            }, {
                value: "zh-HK",
                label: "中文 (香港)"
            }, {
                value: "ko",
                label: "한국어"
            }]
        },
        youtube_language: {
            label: 'youtubeLanguage',
            type: 'select',
            options: [{
                value: "en",
                label: "English"
            }, {
                value: "es",
                label: "Español (España)"
            }, {
                value: "es-419",
                label: "Español (Latinoamérica)"
            }, {
                value: "es-US",
                label: "Español (US)"
            }, {
                value: "ru",
                label: "Русский"
            }, {
                value: "de",
                label: "Deutsch"
            }, {
                value: "pt-PT",
                label: "Português"
            }, {
                value: "pt",
                label: "Português (Brasil)"
            }, {
                value: "fr",
                label: "Français"
            }, {
                value: "pl",
                label: "Polski"
            }, {
                value: "ja",
                label: "日本語"
            }, {
                value: "af",
                label: "Afrikaans"
            }, {
                value: "az",
                label: "Azərbaycan"
            }, {
                value: "id",
                label: "Bahasa Indonesia"
            }, {
                value: "ms",
                label: "Bahasa Malaysia"
            }, {
                value: "bs",
                label: "Bosanski"
            }, {
                value: "ca",
                label: "Català"
            }, {
                value: "cs",
                label: "Čeština"
            }, {
                value: "da",
                label: "Dansk"
            }, {
                value: "et",
                label: "Eesti"
            }, {
                value: "eu",
                label: "Euskara"
            }, {
                value: "fil",
                label: "Filipino"
            }, {
                value: "fr-CA",
                label: "Français (Canada)"
            }, {
                value: "gl",
                label: "Galego"
            }, {
                value: "hr",
                label: "Hrvatski"
            }, {
                value: "zu",
                label: "IsiZulu"
            }, {
                value: "is",
                label: "Íslenska"
            }, {
                value: "it",
                label: "Italiano"
            }, {
                value: "sw",
                label: "Kiswahili"
            }, {
                value: "lv",
                label: "Latviešu valoda"
            }, {
                value: "lt",
                label: "Lietuvių"
            }, {
                value: "hu",
                label: "Magyar"
            }, {
                value: "nl",
                label: "Nederlands"
            }, {
                value: "no",
                label: "Norsk"
            }, {
                value: "uz",
                label: "O‘zbek"
            }, {
                value: "ro",
                label: "Română"
            }, {
                value: "sq",
                label: "Shqip"
            }, {
                value: "sk",
                label: "Slovenčina"
            }, {
                value: "sl",
                label: "Slovenščina"
            }, {
                value: "sr-Latn",
                label: "Srpski"
            }, {
                value: "fi",
                label: "Suomi"
            }, {
                value: "sv",
                label: "Svenska"
            }, {
                value: "vi",
                label: "Tiếng Việt"
            }, {
                value: "tr",
                label: "Türkçe"
            }, {
                value: "be",
                label: "Беларуская"
            }, {
                value: "bg",
                label: "Български"
            }, {
                value: "ky",
                label: "Кыргызча"
            }, {
                value: "kk",
                label: "Қазақ Тілі"
            }, {
                value: "mk",
                label: "Македонски"
            }, {
                value: "mn",
                label: "Монгол"
            }, {
                value: "sr",
                label: "Српски"
            }, {
                value: "uk",
                label: "Українська"
            }, {
                value: "el",
                label: "Ελληνικά"
            }, {
                value: "hy",
                label: "Հայերեն"
            }, {
                value: "iw",
                label: "עברית"
            }, {
                value: "ur",
                label: "اردو"
            }, {
                value: "ar",
                label: "العربية"
            }, {
                value: "fa",
                label: "فارسی"
            }, {
                value: "ne",
                label: "नेपाली"
            }, {
                value: "mr",
                label: "मराठी"
            }, {
                value: "hi",
                label: "हिन्दी"
            }, {
                value: "bn",
                label: "বাংলা"
            }, {
                value: "pa",
                label: "ਪੰਜਾਬੀ"
            }, {
                value: "gu",
                label: "ગુજરાતી"
            }, {
                value: "ta",
                label: "தமிழ்"
            }, {
                value: "te",
                label: "తెలుగు"
            }, {
                value: "kn",
                label: "ಕನ್ನಡ"
            }, {
                value: "ml",
                label: "മലയാളം"
            }, {
                value: "si",
                label: "සිංහල"
            }, {
                value: "th",
                label: "ภาษาไทย"
            }, {
                value: "lo",
                label: "ລາວ"
            }, {
                value: "my",
                label: "ဗမာ"
            }, {
                value: "ka",
                label: "ქართული"
            }, {
                value: "am",
                label: "አማርኛ"
            }, {
                value: "km",
                label: "ខ្មែរ"
            }, {
                value: "zh-CN",
                label: "中文 (简体)"
            }, {
                value: "zh-TW",
                label: "中文 (繁體)"
            }, {
                value: "zh-HK",
                label: "中文 (香港)"
            }, {
                value: "ko",
                label: "한국어"
            }]
        }
    },
    backup_and_reset: {
        type: 'directory',
        label: 'backupAndReset',
        icon: '<svg viewBox="0 0 24 24"><path d="M13.3 3A9 9 0 0 0 4 12H2.2c-.5 0-.7.5-.3.8l2.7 2.8c.2.2.6.2.8 0L8 12.8c.4-.3.1-.8-.3-.8H6a7 7 0 1 1 2.7 5.5 1 1 0 0 0-1.3.1 1 1 0 0 0 0 1.5A9 9 0 0 0 22 11.7C22 7 18 3.1 13.4 3zm-.6 5c-.4 0-.7.3-.7.8v3.6c0 .4.2.7.5.9l3.1 1.8c.4.2.8.1 1-.2.2-.4.1-.8-.2-1l-3-1.8V8.7c0-.4-.2-.7-.7-.7z"></svg>',

        import_settings: {
            type: 'button',
            label: 'importSettings',
            onclick: function(satus, component) {
                try {
                    let input = document.createElement('input');

                    input.type = 'file';
                    input.accept = '.json';

                    input.addEventListener('change', function() {
                        let file_reader = new FileReader();

                        file_reader.onload = function() {
                            let data = JSON.parse(this.result);

                            for (var i in data) {
                                self.storage.set(i, data[i]);
                            }

                            satus.components.dialog.create({
                                type: 'dialog',

                                message: {
                                    type: 'text',
                                    label: 'successfullyImportedSettings',
                                    styles: {
                                        'width': '100%',
                                        'opacity': '.8'
                                    }
                                },
                                section: {
                                    type: 'section',
                                    class: 'controls',
                                    styles: {
                                        'justify-content': 'flex-end'
                                    },

                                    cancel: {
                                        type: 'button',
                                        label: 'cancel',
                                        onclick: function() {
                                            let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                            scrim[scrim.length - 1].click();
                                        }
                                    },
                                    ok: {
                                        type: 'button',
                                        label: 'OK',
                                        onclick: function() {
                                            let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                            scrim[scrim.length - 1].click();
                                        }
                                    }
                                }
                            });
                        };

                        file_reader.readAsText(this.files[0]);
                    });

                    input.click();
                } catch (err) {
                    chrome.runtime.sendMessage({
                        name: 'dialog-error',
                        value: err
                    });
                }
            }
        },
        export_settings: {
            type: 'button',
            label: 'exportSettings',
            onclick: function(satus, component) {
                chrome.runtime.sendMessage({
                    name: 'download',
                    filename: 'improvedtube-settings',
                    value: satus.storage.get()
                });
            }
        },
        reset_all_settings: {
            type: 'button',
            label: 'resetAllSettings',
            onclick: function(satus, component) {
                satus.components.dialog.create({
                    type: 'dialog',

                    message: {
                        type: 'text',
                        label: 'thisWillResetAllSettings',
                        styles: {
                            'width': '100%',
                            'opacity': '.8'
                        }
                    },
                    section: {
                        type: 'section',
                        class: 'controls',
                        styles: {
                            'justify-content': 'flex-end'
                        },

                        cancel: {
                            type: 'button',
                            label: 'cancel',
                            onclick: function() {
                                let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                scrim[scrim.length - 1].click();
                            }
                        },
                        accept: {
                            type: 'button',
                            label: 'accept',
                            onclick: function() {
                                let scrim = document.querySelectorAll('.satus-dialog__scrim');

                                satus.storage.clear();

                                scrim[scrim.length - 1].click();
                            }
                        }
                    }
                });
            }
        }
    },
    date_and_time: {
        type: 'directory',
        label: 'dateAndTime',
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-.2-13c-.5 0-.8.3-.8.7v4.7c0 .4.2.7.5.9l4.1 2.5c.4.2.8 0 1-.3.2-.3.1-.7-.2-1l-3.9-2.2V7.7c0-.4-.3-.7-.7-.7z"></svg>',

        use_24_hour_format: {
            type: 'switch',
            label: 'use24HourFormat',
            value: true
        }
    },
    about: {
        type: 'directory',
        icon: '<svg viewBox="0 0 24 24"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></svg>',

        extension_section: {
            type: 'section',
            label: 'extension',
            styles: {
                'flex-direction': 'column',
                'flex': '0'
            },

            version: {
                type: 'text',
                label: 'version',
                value: chrome.runtime.getManifest().version
            },
            permissions: {
                type: 'text',
                value: chrome.runtime.getManifest().permissions.join(', ')
            },
        },

        browser_section: {
            type: 'section',
            label: 'browser',
            styles: {
                'flex-direction': 'column',
                'flex': '0'
            },

            name: {
                type: 'text',
                label: 'name',
                value: function(satus, component) {
                    //console.log(satus.modules.user.get());
                    return satus.modules.user.get().browser.name;
                }
            },
            version: {
                type: 'text',
                label: 'version',
                value: function(satus, component) {
                    return satus.modules.user.get().browser.version;
                }
            },
            platform: {
                type: 'text',
                label: 'platform',
                value: function(satus, component) {
                    return satus.modules.user.get().browser.platform;
                }
            },
            video_formats: {
                type: 'text',
                label: 'videoFormats',
                value: function(satus, component) {
                    var formats = satus.modules.user.get().browser.video,
                        container = document.createElement('span');

                    for (var i in formats) {
                        if (formats[i]) {
                            var format = document.createElement('span');

                            format.innerText = i;
                            format.dataset.status = formats[i];

                            format.style.margin = '0 4px 0 0';
                            format.style.cursor = 'pointer';

                            format.addEventListener('click', function(event) {
                                window.open('https://en.m.wikipedia.org/wiki/' + this.innerText, '_blank', 'left=' + (screen.width / 2 - 200) + ',top=' + (screen.height / 2 - 200) + ',height=400,width=400');
                            });

                            container.appendChild(format);
                        }
                    }

                    return container;
                }
            },
            audio_formats: {
                type: 'text',
                label: 'audioFormats',
                value: function(satus, component) {
                    var formats = satus.modules.user.get().browser.audio,
                        container = document.createElement('span');

                    for (var i in formats) {
                        if (formats[i]) {
                            var format = document.createElement('span');

                            format.innerText = i;
                            format.dataset.status = formats[i];

                            format.style.margin = '0 4px 0 0';
                            format.style.cursor = 'pointer';

                            format.addEventListener('click', function(event) {
                                window.open('https://en.m.wikipedia.org/wiki/' + this.innerText, '_blank', 'left=' + (screen.width / 2 - 200) + ',top=' + (screen.height / 2 - 200) + ',height=400,width=400');
                            });

                            container.appendChild(format);
                        }
                    }

                    return container;
                }
            },
            flash: {
                type: 'text',
                label: 'flash',
                value: function(satus, component) {
                    return satus.modules.user.get().browser.flash ? true : false;
                }
            }
        },

        os_section: {
            type: 'section',
            label: 'os',
            styles: {
                'flex-direction': 'column',
                'flex': '0'
            },

            os_name: {
                type: 'text',
                label: 'name',
                value: function(satus, component) {
                    return satus.modules.user.get().os.name;
                }
            },

            os_type: {
                type: 'text',
                label: 'type',
                value: function(satus, component) {
                    return satus.modules.user.get().os.type;
                }
            }
        },

        device_section: {
            type: 'section',
            label: 'device',
            styles: {
                'flex-direction': 'column',
                'flex': '0'
            },

            screen: {
                type: 'text',
                label: 'screen',
                value: function(satus, component) {
                    return satus.modules.user.get().device.screen;
                }
            },
            cores: {
                type: 'text',
                label: 'cores',
                value: function(satus, component) {
                    return satus.modules.user.get().device.cores;
                }
            },
            gpu: {
                type: 'text',
                label: 'gpu',
                value: function(satus, component) {
                    return satus.modules.user.get().device.gpu;
                }
            },
            ram: {
                type: 'text',
                label: 'ram',
                value: function(satus, component) {
                    return satus.modules.user.get().device.ram;
                }
            }
        }
    }
};