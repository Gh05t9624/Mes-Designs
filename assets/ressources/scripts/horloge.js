/*
    (R)
    By Therin.
    Coditeck Production.
    16/01/2020.
    Version 1.
*/

var date = new Date() ;
var seconde = date.getSeconds() ;
var minute = date.getMinutes() ;
var heure = date.getHours() ;

var s = seconde * 6 ;
var m = ( minute * 60 + seconde ) * 0.1 ;
var h = ( ( heure * 3600 ) + ( minute * 60 ) + ( seconde ) ) * 0.0083333333333333333333333333333333333333333333 ;
var heure_ ;

if( heure < 13 )
    {
        heure_ = heure -1
        if( heure_ === 0 )
            heure_ = 12 ;
        
        $( 'label.a' + heure ).css( {
            'color' : 'blue'
        });

        $( 'label.a' + heure_ ).css( {
            'color' : '#fff'
        });
    }

    else
    {
        heure = heure - 12 ;
        heure_ = heure -1
        if( heure_ === 0 )
            heure_ = 12 ;

        $( 'label.a' + heure ).css( {
            'color' : 'blue' ,
        });

        $( 'label.a' + heure_ ).css( {
            'color' : '#fff'
        });
}

$( 'div.seconde_cercle' ).css( {
    'transform' : 'rotate('+ s +'deg)'
});

$( 'div.minute_cercle' ).css( {
    'transform' : 'rotate('+ m +'deg)'
});

$( 'div.heure_cercle' ).css( {
    'transform' : 'rotate('+ h +'deg)'
});

function seconds()
{
    var date = new Date() ;
    seconde = date.getSeconds() ;
    s = seconde * 6 ;
    $( 'div.seconde_cercle' ).css( {
        'transform' : 'rotate('+ s +'deg)'
    });
    setTimeout(function() {
        seconds() ;
    }, 1000);
}

function min()
{
    var date = new Date() ;
    var minute = date.getMinutes() ;
    var m = ( minute * 60 + date.getSeconds() ) * 0.1 ;
    $( 'div.minute_cercle' ).css( {
        'transform' : 'rotate('+ m +'deg)'
    });
    setTimeout(function() {
        min() ;
    }, 1000);
}

function he()
{
    var date = new Date() ;
    var heure = date.getHours() ;
    if( heure < 13 )
    {
        heure_ = heure -1
        if( heure_ === 0 )
            heure_ = 12 ;
        
        $( 'label.a' + heure ).css( {
            'color' : 'blue'
        });

        $( 'label.a' + heure_ ).css( {
            'color' : '#fff'
        });
    }

    else
    {
        heure = heure - 12 ;
        heure_ = heure -1
        if( heure_ === 0 )
            heure_ = 12 ;

        $( 'label.a' + heure ).css( {
            'color' : 'blue'
        });

        $( 'label.a' + heure_ ).css( {
            'color' : '#fff'
        });
    }
    var h = ( ( heure * 3600 ) + ( date.getMinutes() * 60 ) + ( date.getSeconds() ) ) * 0.0083333333333333333333333333333333333333333333 ;
    $( 'div.heure_cercle' ).css( {
        'transform' : 'rotate('+ h +'deg)'
    });
    setTimeout(function() {
        he() ;
    }, 1000);
}

he() ;
min() ;
seconds() ;

var c_ms = 0 ;
var c_s = 0 ;
var c_m = 0 ;
var c_h = 0 ;
var start = 0 ;
function ms()
{
    if( start === 0 )
    {
        c_ms ++ ;
        $( 'label.m_scnd' ).text( c_ms ) ;
        if( c_ms === 99 )
        {
            c_ms = 0 ;
        }
        setTimeout(function() {
            ms() ;
        }, 1);
    }
}
function start_chrono()
{
    if( start === 0 )
    {
        c_s ++ ;
        $( 'label.scnd' ).text( c_s ) ;
        if( c_s === 60 )
        {
                c_m ++ ;
                $( 'label.min' ).text( c_m ) ;
                c_s = 0 ;
                if( c_m === 60 )
                {
                    c_m = 0 ;
                    c_h ++ ;
                    $( 'label.hours' ).text( c_h ) ;
                }
        }
        setTimeout(function() {
            start_chrono() ;
        }, 1000);
    }
}

$( 'div.bar14' ).click( function(){
    if( $( 'div.m_scnd' ).css( 'opacity' ) === '0' && start === 0 )
    {
        $( 'div.circle_c' ).css({
            'background-color' : 'rgba( 0 , 0 , 0, 0.6 )'
        });

        $( 'div.m_scnd' ).animate({
            'opacity' : 1
        } , 50 , function(){
            $( 'div.scnd' ).animate({
                'opacity' : 1
            } , 50 , function(){
                $( 'div.min' ).animate({
                    'opacity' : 1
                } , 50 , function(){
                    $( 'div.hours' ).animate({
                        'opacity' : 1
                    } , 50);
                    start_chrono() ;
                    ms() ;
                });
            });
        });
    }

    if( $( 'div.m_scnd' ).css( 'opacity' ) === '0' && start === 1 )
    {
        start = 0 ;
        $( 'div.circle_c' ).css({
            'background-color' : 'rgba( 0 , 0 , 0, 0.6 )'
        });

        $( 'div.m_scnd' ).animate({
            'opacity' : 1
        } , 50 , function(){
            $( 'div.scnd' ).animate({
                'opacity' : 1
            } , 50 , function(){
                $( 'div.min' ).animate({
                    'opacity' : 1
                } , 50 , function(){
                    $( 'div.hours' ).animate({
                        'opacity' : 1
                    } , 50);
                    start_chrono() ;
                    ms() ;
                });
            });
        });
    }

    else if( $( 'div.m_scnd' ).css( 'opacity' ) === '1' && start === 1 )
    {
        start = 0 ;
        start_chrono() ;
        ms() ;
    }

    else if( $( 'div.m_scnd' ).css( 'opacity' ) === '1' && start === 0 )
    {
        start = 1 ;
    }
});

$( 'div.bar18' ).click( function(){
    if( $( 'div.m_scnd' ).css( 'opacity' ) === '0' && start === 0 )
    {
        start = 0 ;
    }
    else
    {
        start = 1 ;
    }
    $( 'label.m_scnd' ).text( '00' ) ;
    $( 'label.scnd' ).text( '00' ) ;
    $( 'label.min' ).text( '00' ) ;
    $( 'label.hours' ).text( '00' ) ;
    c_ms = 0 ;
    c_s = 0 ;
    c_m = 0 ;
    c_h = 0 ;
});

$( 'div.bar22' ).click( function(){
    $( 'div.bar18' ).click() ;
    if( $( 'div.m_scnd' ).css( 'opacity' ) === '1' && start === 1 )
    {
        $( 'div.hours' ).animate({
                'opacity' : 0
            } , 50 , function(){
                $( 'div.min' ).animate({
                    'opacity' : 0
                } , 50 , function(){
                $( 'div.scnd' ).animate({
                    'opacity' : 0
                } , 50 , function(){
                    $( 'div.m_scnd' ).animate({
                        'opacity' : 0
                    } , 50);
                    $( 'div.circle_c' ).css({
                        'background-color' : 'rgba( 0 , 0 , 0, 0 )'
                    });
                });
            });
        });
    }
});