require([], function () {
  var GlobalObject = chrome.extension.getBackgroundPage().GlobalObject;

  Popup = {};

  Popup.optionsTab = {};

  Popup.optionsTab.init = function (context) {

    function onBlurInput() {
      var key = this.id;
      Popup.optionsTab.saveOption(key, $(this).val());
    }

    $('#maxTabs').keyup(_.debounce(onBlurInput, 200));

    Popup.optionsTab.loadOptions();
  };

  Popup.optionsTab.loadOptions = function () {
    $('#maxTabs').val(GlobalObject.settings.get('maxTabs'));
  };

  Popup.optionsTab.saveOption = function (key, value) {
    $('#status').html();

    GlobalObject.settings.set(key, value);

    $('#status').removeClass('invisible').css('opacity', '100');
    $('#status').html('Saving...').delay(50).animate({opacity: 0});
  };

  $(document).ready(function () {
    $('a[data-toggle="tab"]').on('show', function (e) {
      var tabId = e.target.hash;
      switch (tabId) {
        case '#tabOptions' :
          Popup.optionsTab.init($('div#tabOptions'));
          break;
      }
    });

    $('a[href="#tabOptions"]').click();
  });

});
