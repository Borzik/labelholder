do ($ = jQuery, window, document) ->
  pluginName = 'labelholder'

  defaults =
    events: 'keyup blur change'
    elements: 'input[type=text], input[type=date], textarea'

  Plugin = (@element, options) ->
    @settings = $.extend {}, defaults, options
    @_defaults = defaults
    @_name = pluginName
    @init()
    return

  Plugin.prototype =
    init: ->
      @$element = $(@element)
      @$element.addClass('has-labelholder')
      @$input = @$element.find @settings.elements
      @setDataPlaceholder()
      @$input.on @settings.events, (e) => @checkValue(e)
      @checkValue()

    setDataPlaceholder: ->
      label = @$input.attr 'placeholder'
      unless label
        label = 'You forgot to add placeholder attribute!'
      unless @$element.data 'label'
        @$element.attr 'data-label', label

    checkValue: (e) ->
      if e
        keyCode = e.keyCode or e.which
        if keyCode is 9
          return
      @$element.toggleClass 'floating', @$input.val() != ''

  $.fn[pluginName] = (options) ->
    @each ->
      unless $.data @, "plugin_#{pluginName}"
        $.data @, "plugin_#{pluginName}", new Plugin @, options