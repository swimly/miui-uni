
export function getMonthDaysArray(year, month) {
  // 获取上月，本月，下月三个月的数据
  const firstDay = getFirstDay(year, month)
  const curMonthDay = getMonthLength(year, month)
  const preMonthDay = getMonthLength(year, month - 1)
  // const nextMonthDay = getMonthLength(year, month + 1)
  let dayArr = []
  var row = Math.ceil((firstDay + curMonthDay) / 7)
  for (var i = 0; i < row; i++) {
    let arr = []
    for (var j = 0; j < 7; j++) {
      let m
      let y
      let day = i * 7 + j - firstDay + 1
      if (day <= 0) {
        m = month - 1
        y = m == 0 ? year - 1 : year
        day = day + preMonthDay
      } else if (day > curMonthDay) {
        y = y == 12 ? year + 1 : year
        day = day - curMonthDay
        m = month + 1
      } else {
        m = month
        y = year
      }
      var weekday = (new Date(`${y}/${m}/${day}`)).getDay()
      weekday = weekday > 0 ? weekday : 7
      arr.push({
        year: y,
        month: m,
        week: getWeekOfYear(y, m, day),
        day: day,
        weekday: weekday
      })
    }
    dayArr.push(arr)
  }
  return dayArr
}

export function getRangeMonthDays(date, range) {
  var time = new Date(date)
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  var data = []
  for (var i = 0; i < range; i++) {
    data.push({
      year: year,
      month: month,
      days: getMonthDaysArray(year, month)
    })
    month++
    if (month > 12) {
      month = 1
      year += 1
    }
  }
  return data
}

export function get3MonthDays(date) {
  var data = []
  var time = new Date(date)
  var weekday = time.getDay()
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  weekday = weekday == 0 ? 7 : weekday;
  var lm = month > 1 ? month - 1 : 12
  var ly = month > 1 ? year : year - 1;
  var nm = month < 12 ? month + 1 : 1;
  var ny = month < 12 ? year : year + 1
  var arr = [[ly, lm], [year, month], [ny, nm]]
  arr.map((item) => {
    data.push({
      year: item[0],
      month: item[1],
      days: getMonthDaysArray(item[0], item[1])
    })
  })
  return data
}

export function get3WeekDays(date) {
  var data = []
  var time = new Date(date)
  var year = time.getFullYear()
  var month = time.getMonth() + 1
  var day = time.getDate()
  var weekday = time.getDay()
  weekday = weekday == 0 ? 7 : weekday;
  // 当前是第几周
  var cweek = getWeekOfYear(year, month, day)
  // 今年一共多少周
  var weeks = getWeekOfYear(year, 12, 31)
  // 去年一共多少周
  var lweeks = getWeekOfYear(year - 1, 12, 31)
  // 今年最后一天是周几
  var ldw = (new Date(`${year}/12/31`)).getDay()
  // 今年第一天是周几
  var fdw = (new Date(`${year}/1/1`)).getDay()
  var ly = cweek > 1 ? year : year - 1
  var lw = cweek > 1 ? cweek - 1 : fdw == 1 ? lweeks : lweeks - 1;
  var ny = cweek < weeks ? year : year + 1;
  var nw = cweek < weeks ? cweek + 1 : ldw == 0 ? 1 : 2
  var arr = [[ly, weekday > 1 ? lw - 1 : lw], [year, weekday > 1 ? cweek - 1 : cweek], [ny, weekday > 1 ? nw - 1 : nw]]
  arr.map((item) => {
    data.push({
      year: item[0],
      week: item[1],
      days: getWeekDaysArray(item[0], item[1])
    })
  })
  return data
}

export function getWeekDaysArray(year, week) {
  var d = new Date(year, 0, 1 + (week) * 7)
  var new_Date = new Date(d)
  var timesStamp = new_Date.getTime();
  var currenDay = new_Date.getDay();
  var dates = [];
  for (var i = 0; i < 7; i++) {
    var dateString = dateFormat('YYYY/MM/DD', new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)))
    var dateArr = dateString.split('/')
    var weekday = (new Date(`${dateArr[0]}/${dateArr[1]}/${dateArr[2]}`)).getDay()
    weekday = weekday > 0 ? weekday : 7,
    dates.push({
      year: parseInt(dateArr[0]),
      month: parseInt(dateArr[1]),
      week: getWeekOfYear(parseInt(dateArr[0]), parseInt(dateArr[1]), parseInt(dateArr[2])),
      day: parseInt(dateArr[2]),
      weekday: weekday
    });
  }
  return dates
}

export function getMonthLength(year, month) {
  return new Date(year, month, 0).getDate()
}

export function getFirstDay(year, month) {
  return new Date(year, month - 1, 0).getDay()
}

// 获取今天是第几周
export function getWeekOfYear(y, m, d) {
  var today = new Date(`${y}/${m}/${d}`);
  var firstDay = new Date(today.getFullYear(), 0, 1);
  var dayOfWeek = firstDay.getDay();
  var spendDay = 1;
  if (dayOfWeek != 0) {
    spendDay = 7 - dayOfWeek + 1;
  }
  firstDay = new Date(today.getFullYear(), 0, 1 + spendDay);
  var day = Math.ceil((today.valueOf() - firstDay.valueOf()) / 86400000);
  var result = Math.ceil(day / 7);
  return result + 1;
}
// 获取某个月有多少天
export function getMonthDaysCount(year, month) {
  return [null, 31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}
// 是否是闰年
export function isLeapYear(year) {
  return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
}

export function getDates(year, week) {
  var d = new Date(year, 0, 1 + (week - 1) * 7)
  var new_Date = new Date(d)
  var timesStamp = new_Date.getTime();
  var currenDay = new_Date.getDay();
  var dates = [];
  for (var i = 0; i < 7; i++) {
    var dateString = new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).toLocaleDateString().replace(/\//g, '-')
    var dateArr = dateString.split('-')
    dates.push({
      year: dateArr[0],
      month: dateArr[1],
      day: dateArr[2]
    });
  }
  return dates
}
export function getDateOfWeek(year, weekNumber) {
  return new Date(year, 0, 1 + ((weekNumber - 1) * 7))
}

export function generateWeek(year, week) {
  return getDates(year, getDateOfWeek(year, week))
}

export function getDiffDate(targetDate) {
  let date1 = new Date(targetDate)
  let date2 = new Date()
  date1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate())
  date2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate())
  const diff = date2.getTime() - date1.getTime()
  const diffDate = diff / (24 * 60 * 60 * 1000)
  return diffDate
}

export function transformWeekToString(week) {
  return ['', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'][week]
}

export function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "M+": (date.getMonth() + 1).toString(),     // 月
    "D+": date.getDate().toString(),            // 日
    "h+": date.getHours().toString(),           // 时
    "m+": date.getMinutes().toString(),         // 分
    "s+": date.getSeconds().toString()          // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}

export function DisDate(time, dis) {
  var date1 = new Date(time)
  var date2 = new Date(date1);
  date2.setDate(date1.getDate() + dis);
  var time2 = date2.getFullYear() + "/" + (formatNumber(date2.getMonth() + 1)) + "/" + formatNumber(date2.getDate());
  return time2
}
function formatNumber (val) {
	return val >= 10 ? val : `0${val}`
}
/**
   **datestr:形如‘2017-06-12’的字符串
  **return Date 对象
   **/
function getDate(datestr) {
  var temp = datestr.split("/");
  if (temp[1] === '01') {
    temp[0] = parseInt(temp[0], 10) - 1;
    temp[1] = '12';
  } else {
    temp[1] = parseInt(temp[1], 10) - 1;
  }
  //new Date()的月份入参实际都是当前值-1
  var date = new Date(temp[0], temp[1], temp[2]);
  return date;
}
/**
***获取两个日期间的所有日期
***默认start<end
**/
export function getDiffDates(start, end) {
  var startTime = getDate(start);
  var endTime = getDate(end);
  var dateArr = [];
  while ((endTime.getTime() - startTime.getTime()) >= 0) {
    var year = startTime.getFullYear();
    var month = (startTime.getMonth() + 1).toString().length === 1 ? "0" + (parseInt(startTime.getMonth().toString(), 10) + 1) : (startTime.getMonth() + 1);
    var day = startTime.getDate().toString().length === 1 ? "0" + startTime.getDate() : startTime.getDate();
    dateArr.push(year + "/" + month + "/" + day);
    startTime.setDate(startTime.getDate() + 1);
  }
  return dateArr;
}