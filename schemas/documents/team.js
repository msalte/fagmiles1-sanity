export default {
  title: "Team",
  type: "document",
  name: "team",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: "Manager",
      name: "manager",
      type: "reference",
      to: [{ type: "manager" }],
    },
    {
      title: "Players",
      name: "players",
      type: "array",
      of: [{ type: "reference", to: [{ type: "player" }] }],
    },
  ],
};
