import styles from "./CreativeSkills.module.css"

const skills = [
    {
        icon: '📦',
        title: 'Web Design Principles',
        description:
            'Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.',
    },
    {
        icon: '✨',
        title: 'User Interface - UI Design',
        description:
            'Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.',
    },
    {
        icon: '👥',
        title: 'User Experience - UX Design',
        description:
            'Understanding of user behavior and psychology to design seamless and enjoyable user experiences that meet user needs and goals.',
    },
    {
        icon: '🖥️',
        title: 'Responsive Web Design',
        description:
            'Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.',
    },
    {
        icon: '🖌️',
        title: 'Wireframing and Prototyping',
        description:
            'Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.',
    },
    {
        icon: '📱',
        title: 'Mobile-Friendly Optimization',
        description:
            'Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.',
    },
];


export default function CreativeSkills() {
    return (
        <section className={styles.creativeSkills}>
            <h2>Creative Skills</h2>
            <p className={styles.desc}>
                As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life
            </p>
            <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.skillCard}>
                        <div className={styles.skillIcon}>{skill.icon}</div>
                        <h3 className={styles.skillTitle}>{skill.title}</h3>
                        <p className={styles.skillDescription}>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
