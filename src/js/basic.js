export default function getAttacks(obj) {
  const { special } = obj;
  special.forEach((attack) => {
    if (!Object.keys(attack).includes('description')) {
      attack.description = 'Описание недоступно';
    }
  });
  return special;
}
