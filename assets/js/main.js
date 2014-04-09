$(document).ready(function(){

    var firstCta = new Cohorts.Test({
        name: 'pro-vs-team-cta',
        sample: 1, // we want to include all visitors in the test
        cohorts: {
            pro: {
                onChosen: function() {
                    $('.buy-team-cta').addClass('hide')
                    $('.buy-pro-cta').removeClass('hide')
                }
            },
            team: {
                onChosen: function() {
                    $('.buy-team-cta').removeClass('hide')
                    $('.buy-pro-cta').addClass('hide')
                }
            }
        }
    });

    $('a').click(function() {
        firstCta.event('Clicked on link');
    });

})
