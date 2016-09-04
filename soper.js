/*
  Written by Graeme McLaren on 3rd Sept 2016
*/

;(function(global, $){
    
    var soper = function(){
        return new soper.init();
    }
    
    var soperValues = [];
    var randValue = '';
    var delay = 5000;
    
    soper.prototype = {
        selectValues: function(selector){
            if(!selector){
                throw "No selector passed";
            }
            $(selector).hide();
            $(selector).each(function(index){
                soperValues.push($(this).text());
            });
            return this;
        },
        
        randomise: function(){
            randValue = soperValues[Math.floor(Math.random() * soperValues.length)];
            return this;
        },
        
        setValue: function(selector){
            if(!selector){
                throw "No selector passed";
            }            
            this.selector = selector;
            $(this.selector).text(randValue);
            return this;
        },
        
        refresh: function(delay) {
            var self=this;
            this.delay = delay || 5000;
            this.selectValues(this.selector);
            this.randomise();
            this.setValue(this.selector);
            $(this.selector).show();
            setTimeout(function() { 
                self.refresh(self.delay);
                $(self.selector).show();
            }, delay);
        },
        
        log: function(){
            console.log('log')
            // as all functions are chained (except refresh) you can log output here
        }
        
        
    };
    
    soper.init = function(){
        var self = this;
        if(!$) {
            throw "jQuery not loaded";
        }
    }
    
    soper.init.prototype = soper.prototype;
    
    global.soper = global.g$ = soper;
    
}(window, jQuery));