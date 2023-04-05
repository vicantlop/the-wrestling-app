import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const isSameDay = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isSameMonth = (date1, date2) => {
    return (
      date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear()
    );
  };

  const isToday = (date) => {
    const today = new Date();
    return isSameDay(date, today);
  };

  const isSelectedDate = (date) => {
    return isSameDay(date, selectedDate);
  };

  const onDatePress = (date) => {
    setSelectedDate(date);
  };

  const onPrevMonthPress = () => {
    const currentMonth = selectedDate.getMonth();
    const prevMonth = new Date(selectedDate.getFullYear(), currentMonth - 1, 1);
    setSelectedDate(prevMonth);
  };

  const onNextMonthPress = () => {
    const currentMonth = selectedDate.getMonth();
    const nextMonth = new Date(selectedDate.getFullYear(), currentMonth + 1, 1);
    setSelectedDate(nextMonth);
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={onPrevMonthPress}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.month}>{`${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}</Text>
        <TouchableOpacity onPress={onNextMonthPress}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderDaysOfWeek = () => {
    return (
      <View style={styles.daysOfWeek}>
        {daysOfWeek.map((dayOfWeek) => (
          <Text key={dayOfWeek} style={styles.dayOfWeek}>
            {dayOfWeek}
          </Text>
        ))}
      </View>
    );
  };

  const renderCalendarRows = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();

    const calendarRows = [];
    let calendarRow = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendarRow.push(<View key={`blank-${i}`} style={styles.day} />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      const isDisabled = !isSameMonth(dayOfMonth, selectedDate);
      const isSelected = isSelectedDate(dayOfMonth);
      const isTodayDate = isToday(dayOfMonth);

      calendarRow.push(
        <TouchableOpacity
          key={`day-${i}`}
          onPress={() => onDatePress(dayOfMonth)}
          style={[
            styles.day,
            isDisabled && styles.disabledDay,
            isSelected && styles.selectedDay,
            isTodayDate && styles.today,
          ]}
          disabled={isDisabled}>
          <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>
            {i}
          </Text>
        </TouchableOpacity>
      );

      if (calendarRow.length === 7) {
        calendarRows.push(
          <View key={`row-${calendarRows.length}`} style={styles.weekRow}>
            {calendarRow}
          </View>
        );
        calendarRow = [];
      }
    }

    if (calendarRow.length > 0) {
      while (calendarRow.length < 7) {
        calendarRow.push(<View key={`blank-${calendarRow.length}`} style={styles.day} />);
      }
      calendarRows.push(
        <View key={`row-${calendarRows.length}`} style={styles.weekRow}>
          {calendarRow}
        </View>
      );
    }

    return <View>{calendarRows}</View>;
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderDaysOfWeek()}
      {renderCalendarRows()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  daysOfWeek: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dayOfWeek: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  day: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  dayText: {
    fontSize: 14,
  },
  disabledDay: {
    opacity: 0.3,
  },
  selectedDay: {
    backgroundColor: '#1A73E8',
  },
  selectedDayText: {
    color: 'white',
  },
  today: {
    borderWidth: 1,
    borderColor: '#1A73E8',
  },
});

export default Calendar;