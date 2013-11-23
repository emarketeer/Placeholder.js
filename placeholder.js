/**
 * Placeholder.js
 *
 * Replicates HTML5 placeholder attribute on non placeholder browsers.
 * Use data-rel="placeholder" on any input element with a placeholder for use.
 * Requires jQuery.
 * You should only call this script on < IE9.
 *
 * Version 0.1
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013 Richard Denton / eMarketeer Australia
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * @package    Placeholder.js
 * @author     Richard Denton <richard [-at-] emarketeer.com.au>
 * @copyright  2013 Richard Denton / eMarketeer Australia
 * @license    http://opensource.org/licenses/MIT
 * @version    0.1
 * @link       https://github.com/emarketeer/Placeholder.js
 */
 
(function ( $ ) {
	$(document).ready(function(){
	
		//On window load.
		$("[data-rel=placeholder]").each(function(){
			var placeholder = $(this).attr("placeholder");
			//Set the value to the placeholder for now.
			$(this).addClass("legacy-placeholder");
			$(this).val(placeholder);
		});
		
		$("[data-rel=placeholder]").focus(function(e){
			//Check if the value is default placeholder value.
			var placeholder = $(this).attr("placeholder");
			var thevalue = $(this).val();
			if ( thevalue === placeholder ) {
				//Change to blank.
				$(this).removeClass("legacy-placeholder");
				$(this).val("");
			}
		});
		
		$("[data-rel=placeholder]").blur(function(){
			//Check if there is a value.
			var thevalue = $(this).val();
			
			if (! thevalue ) {
				var placeholder = $(this).attr("placeholder");
				//Set the value to the placeholder for now.
				$(this).addClass("legacy-placeholder");
				$(this).val(placeholder);
			}
			
		});
		
	});
}( jQuery ));
