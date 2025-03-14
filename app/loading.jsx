export default function Loading() {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" hlp-text-center hlp-margintop-40 ">
        {/* Círculo girando */}
        <div className="hlp-marginBottom-15 flex justify-center items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-spin"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="#0074c4"
              strokeWidth="4"
              fill="none"
              strokeDasharray="125"
              strokeDashoffset="0"
            />
          </svg>
        </div>

        {/* Texto de carga */}
        <p className="com-title-section-m">Cargando...</p>
      </div>
    </div>
  );
}
