export default function AvailabilityBadge({ copies }) {
  return (
    <span className={copies > 0 ? 'badge badge--available' : 'badge badge--unavailable'}>
      {copies > 0 ? 'Доступна' : 'Нет в наличии'}
    </span>
  );
}
