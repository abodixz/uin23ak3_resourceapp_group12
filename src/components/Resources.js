import resourcesData from "../resources/ressurser";

export default function Resources({ category }) {
  const filteredResources = resourcesData.filter(
    (resource) => resource.category === category
  );
  

  return (
    <section>
        {<h1>{category}</h1>}
      <ul>
        {filteredResources.map((resource) => (
          <li key={resource.id}>
            <a href={resource.url}>{resource.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}