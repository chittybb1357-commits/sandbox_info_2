export default function StudyList({ items }) {
  console.log(items);

  return (
    <>
      <h2>학습 목록</h2>
      <section>
        {items.map(item => (
          <article key={item.id}>
            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <p>분류: {item.category}</p>
          </article>
        ))}
      </section>
    </>
  );
}
