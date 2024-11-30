import useWeather from "../../hooks/useWeather";
import { getCurrentLocalDateAr } from "../../utils/dateTimeFormatters";
import { formatArabicNumber } from "../../utils/textFormatters";
import { getWeatherIcon } from "../../utils/weather";
import calendarImg from "/calendar.png";

const DateWeatherComp = () => {
  const { weatherData, permissionError, error } = useWeather("7a575d9871d884b8aefb56cfad1d0713");
  const currentDate = getCurrentLocalDateAr(new Date());

  return (
    <div className="w-[266px] p-4 rounded-lg flex justify-between glassyEffect-sm text-white">
      <div className="flex flex-col justify-between">
        <div className="flex justify-between gap-3">
          <p className="font-bold">التقويم</p>
          <img alt="Image of a calender referring to the section showing current date" src={calendarImg} />
        </div>
        <p>{currentDate}</p>
      </div>
      <div className="items-stretch bg-white w-[1px]"></div>
      {weatherData || !error ? (
        <div className="flex flex-col justify-between">
          <div className="flex justify-between gap-3">
            <p className="font-bold">الطقس</p>
            {weatherData?.weather[0].icon && (
              <img alt="icon illustrating the current weather" className="w-[24px] h-[24px]" src={getWeatherIcon(weatherData?.weather[0].icon)} />
            )}
          </div>
          {weatherData && (
            <p>
              {formatArabicNumber(Math.round(weatherData?.main.temp_max))} <span className="text-xl">°</span> /{" "}
              {formatArabicNumber(Math.round(weatherData?.main.temp_min))} <span className="text-xl">°</span>
            </p>
          )}
        </div>
      ) : permissionError ? (
        <div className="text-red-900 text-sm font-bold font-CoconNext w-[50%]">
          <p>يتطلب التطبيق إذن الوصول إلى الموقع. يرجى تمكين الأذونات مرة أخرى.</p>
        </div>
      ) : (
        <p className="text-red-500 text-sm">حدث خطأ في تحميل البيانات</p>
      )}
    </div>
  );
};

export default DateWeatherComp;
