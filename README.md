# Software Engineer Learning DAO

## Introduction

Welcome to the **Software Engineer Learning DAO**, a decentralized, community-driven platform where software engineers collaborate, learn, and grow together. By leveraging **blockchain technology**, we ensure **transparent governance, fair rewards, and member-led decision-making**.

## 🌟 Why a DAO?

Traditional learning communities often rely on centralized control, limiting participation and fairness. Our DAO introduces **decentralization, autonomy, and tokenized incentives**, ensuring:

- **Transparent Decision-Making** – Members vote on initiatives and group policies.
- **Token-Based Rewards** – Contributions (mentorship, content, projects) earn governance tokens.
- **Automated Processes** – Smart contracts handle governance, funding, and project execution.

## 🔑 Key Features

1. **Membership and Token Allocation**

- New members receive 10 WeGrowTogether tokens (WGT) upon joining.
- WGTs are used for participating in DAO activities.

2. **Role System**

- The DAO comprises three roles: Students, Graduates, and Mentors.
- Students: All members start as students. They are members who haven't completed the training program.
- Graduates: These are members who have completed the training program. They gain the right to vote on proposals. Any member can become a Graduate through a graduate function, which only a Mentor executes.
- Mentors: Graduates who are selected by the DAO become Mentors. They can both vote on and create proposals. An existing Mentor can assign the Mentor role to any Graduate member by creating a proposal. This proposal has to be approved by the DAO.

3. **Proposal Creation**

- Only **Mentors** are authorized to create proposals.
- To create a proposal, a **Mentor** must burn 1 WGT, which decreases their token balance.

4. **Voting System**

- Only Graduates and Mentors are allowed to vote.
- The voting power of a member is determined as follows:
- If the member is a **Student** - the voting power is set to 0 (**Student** don't have voting power).
- If the member is a **Graduate** - his voting power is directly equal to the number of WGT token they hold at the moment of voting.
- If the member is a **Mentor** - his voting power is equal to 5x the number of WGT tokens they hold at the moment of voting.

- A proposal is automatically accepted if the vote score reaches 100 or more. A proposal is automatically rejected if the vote score reaches -100 or less. A vote stays open as long as it's not approved or rejected.

- Approved proposals are automatically executed.

5. **Proposal Types**
   There are 2 types of proposals:

- `ChangeManifesto`: those proposals contain a text that if approved will be the new manifesto of the DAO.
  `AddMentor`: those proposals contain a Principal that if approved will become a mentor of the DAO.

## 📜 Conclusion

By integrating DAO principles, we create an **inclusive, self-sustaining learning ecosystem** where every member has a voice. Join us and redefine how developers **learn, build, and grow** together!

---

💡 _Together, we code, learn, and innovate!_
