!function(){this.init_submit_continue=function(){var t;return $("#submit_continue_button").click(submit_and_continue),$("form").change(function(){return $(this).attr("data-changes-made",!0)}),(t=$("#continue_editing")).length>0&&"no-prompt"!==t.attr("rel")&&$("#editor_switch a").click(function(t){return $("form[data-changes-made]").length>0&&!confirm("es, confirm_changes")?t.preventDefault():void 0}),$("input[id=page_custom_slug]").change(function(){return $("#submit_continue_button").remove()})}}.call(this);