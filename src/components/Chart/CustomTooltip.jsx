const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'red', color: "white", padding: '10px', width: 'fit-content', height: '50px', display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;