export interface TransferableSkill {
  skill: string
  itApplication: string
}

export interface Experience {
  role: string
  period: string
  transferableSkills: TransferableSkill[]
}

export const experiences: Experience[] = [
  {
    role: "Hospitality Professional",
    period: "Previous Career",
    transferableSkills: [
      {
        skill: "Customer Communication",
        itApplication: "Help desk support, client-facing technical assistance, user training",
      },
      {
        skill: "Problem Solving Under Pressure",
        itApplication: "Incident response, troubleshooting critical issues, managing service outages",
      },
      {
        skill: "Teamwork & Collaboration",
        itApplication: "Cross-functional IT projects, knowledge sharing, documentation",
      },
      {
        skill: "Conflict Resolution",
        itApplication: "Managing difficult support tickets, de-escalation, user satisfaction",
      },
      {
        skill: "Adaptability",
        itApplication: "Learning new technologies, adapting to changing IT environments",
      },
      {
        skill: "Time Management",
        itApplication: "Ticket prioritization, SLA management, project deadlines",
      },
    ],
  },
]
