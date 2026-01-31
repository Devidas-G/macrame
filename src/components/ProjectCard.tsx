interface Props {
  title: string
  text: string
  image: string
  reverse?: boolean
}

export default function ProjectCard({ title, text, image, reverse }: Props) {
  return (
    <div className={`project-card ${reverse ? "reverse" : ""}`}>
      <div className="project-text">
        <h2>{title}</h2>
        <p>{text}</p>
        <button className="btn outline">View Project</button>
      </div>
      <img src={image} alt={title} />
    </div>
  )
}
