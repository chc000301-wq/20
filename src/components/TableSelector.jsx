// Reuses the existing .floor-plan / .table-seat styling from style.css so the
// selected-table-turns-red behavior and mobile layout match the rest of the site.
const TABLE_LAYOUT = [
  { row: 'top-booth-row', variant: 'booth', ids: ['E5', 'E4', 'E3', 'E2', 'E1'] },
  { row: 'upper-table-row', variant: 'round', ids: ['D3', 'D2', 'D1', 'C2'] },
  { row: 'lower-table-row', variant: 'round', ids: ['B3', 'B2', 'B1', 'C1'] },
  { row: 'bottom-booth-row', variant: 'booth', ids: ['A5', 'A4', 'A3', 'A2', 'A1'] },
];

function TableButton({ id, selected, onSelect, variant }) {
  return (
    <button
      type="button"
      className={`table-seat ${variant === 'booth' ? 'booth-seat' : 'round-seat'} ${selected ? 'active' : ''}`}
      aria-pressed={selected}
      onClick={() => onSelect(id)}
    >
      {id}
    </button>
  );
}

export default function TableSelector({ selectedTable, onSelect, labels }) {
  const [topBooth, upperRound, lowerRound, bottomBooth] = TABLE_LAYOUT;

  return (
    <div className="floor-plan floor-plan-v2" aria-label={labels.floorPlanAria}>
      <div className="floor-main-area">
        <div className={`floor-plan-row booth-row ${topBooth.row}`}>
          {topBooth.ids.map((id) => (
            <TableButton key={id} id={id} variant={topBooth.variant} selected={selectedTable === id} onSelect={onSelect} />
          ))}
        </div>
        <div className="floor-table-area">
          <div className={`floor-plan-row table-row ${upperRound.row}`}>
            {upperRound.ids.map((id) => (
              <TableButton key={id} id={id} variant={upperRound.variant} selected={selectedTable === id} onSelect={onSelect} />
            ))}
          </div>
          <div className={`floor-plan-row table-row ${lowerRound.row}`}>
            {lowerRound.ids.map((id) => (
              <TableButton key={id} id={id} variant={lowerRound.variant} selected={selectedTable === id} onSelect={onSelect} />
            ))}
          </div>
        </div>
        <div className={`floor-plan-row booth-row ${bottomBooth.row}`}>
          {bottomBooth.ids.map((id) => (
            <TableButton key={id} id={id} variant={bottomBooth.variant} selected={selectedTable === id} onSelect={onSelect} />
          ))}
        </div>
      </div>
      <div className="floor-side-area">
        <div className="counter-label">{labels.counter}</div>
        <div className="entrance-label">{labels.entrance}</div>
      </div>
    </div>
  );
}
