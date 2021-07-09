const years = 1000 * 60 * 60 * 24 * 30 * 365 // Years in milliseconds
const months = 1000 * 60 * 60 * 24 * 30 // Months in milliseconds
const days = 1000 * 60 * 60 * 24// Days in milliseconds
const hours = 1000 * 60 * 60 // Hours in milliseconds
const minutes = 1000 * 60 // Seconds in milliseconds
const seconds = 1000 // Minutes in milliseconds

// Returns a prefix (singular / plural)
function getPrefix(duration, val) {

    let obj = {
        year: ['year', 'years'],
        month: ['month', 'months'],
        day: ['day', 'days'],
        hour: ['hour', 'hours'],
        minute: ['minute', 'minutes'],
        second: ['second', 'seconds']
    }

    let offset = 0

    offset = val > 1 ? 1 : 0

    return obj[duration][offset]

}

/*
- Accepts an integer such as years, months, etc
- Displays a partial output such as 1 year or 2 years, etc using getPrefix()
*/
function getPartial(duration, val) {

    let prefix = getPrefix(duration, val)

    return val + ' ' + prefix
}

const funcs = {
    // Returns a single output such as 1 years / 2 months / 24 minutes
    getSingle(x) {

        let values = {
            yr: 0,
            mo: 0,
            da: 0,
            hr: 0,
            mi: 0,
            se: 0
        }

        let y = x // The remainder

        let map = [
            {
                type: 'year',
                duration: years,
                variable: 'yr'
            },
            {
                type: 'month',
                duration: months,
                variable: 'mo'
            },
            {
                type: 'day',
                duration: days,
                variable: 'da'
            },
            {
                type: 'hour',
                duration: hours,
                variable: 'hr'
            },
            {
                type: 'minute',
                duration: minutes,
                variable: 'mi'
            },
            {
                type: 'second',
                duration: seconds,
                variable: 'se'
            }
        ]

        let type = '' // The duration type to be displayed, I.e year, month, etc

        map.some(v => {

            if (y % v.duration < y) {

                values[v.variable] = Math.floor(y / v.duration)

                y -= values[v.variable] * v.duration

                type = v.type

                return true
            }
        })

        let obj = {
            year: values.yr,
            month: values.mo,
            day: values.da,
            hour: values.hr,
            minute: values.mi,
            second: values.se
        }

        let result = ''

        if (type == '') {

            result = 'A moment ago'
        } else {

            result = getPartial(type, obj[type])
        }

        return result
    },

    // Returns a full output such as 1 years, 2 months, 24 minutes
    getFull(x) {

        let values = {
            yr: 0,
            mo: 0,
            da: 0,
            hr: 0,
            mi: 0,
            se: 0
        }

        let y = x // The remainder

        let map = [
            {
                duration: years,
                variable: 'yr'
            },
            {
                duration: months,
                variable: 'mo'
            },
            {
                duration: days,
                variable: 'da'
            },
            {
                duration: hours,
                variable: 'hr'
            },
            {
                duration: minutes,
                variable: 'mi'
            },
            {
                duration: seconds,
                variable: 'se'
            }
        ]

        map.some(v => {

            if (y % v.duration < y) {

                values[v.variable] = Math.floor(y / v.duration)

                y -= values[v.variable] * v.duration

            }
        })

        let obj = {
            year: values.yr,
            month: values.mo,
            day: values.da,
            hour: values.hr,
            minute: values.mi,
            second: values.se
        }

        let result = []

        for (var i in obj) {
            if(obj[i]) result.push(getPartial(i, obj[i]))
        }

        return result.join(', ')
    }
}


// These functions may be useful..

// function getYears(x) {
//     let r = x / years      
//     return Math.round(r)
// }

// function getMonths(x) {
//     let r = x / months      
//     return Math.round(r)
// }

// function getDays(x) {
//     let r = x / days
//     return Math.round(r)
// }

// function getMinutes(x) {
//     let r = x / minutes
//     return Math.round(r)
// }

// function getSeconds(x) {
//     let r = x / seconds
//     return Math.round(r)
// }

export default funcs;
