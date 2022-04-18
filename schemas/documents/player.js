export default {
  title: "Player",
  type: "document",
  name: "player",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Position",
      name: "position",
      type: "string",
      options: {
        list: [
          { title: "Forward", value: "forward" },
          { title: "Midfield", value: "midfield" },
          { title: "Back", value: "back" },
          { title: "Goal keeper", value: "goal-keeper" },
        ],
      },
    },
  ],
};
