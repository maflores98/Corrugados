(function($)
{
    $.fn.inputNoTabindex = function()
    {
        this.each(function()
        {
            $(this).attr('readonly','true');
            $(this).attr('tabindex',-1);
        });
    };
    
    $.fn.inputTabindex = function()
    {
        var n = 1;
        this.each(function()
        {
            $(this).attr('required','true');
            $(this).attr('tabindex',n++);
        });
    };
})(jQuery);

$(document).ready(function()
{
    $('[readonly]').inputNoTabindex();
    $('.readonly').inputNoTabindex();
    $('.tabindex').inputTabindex();
});