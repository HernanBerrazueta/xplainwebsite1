export const linkData = [
  { to: "/prisma", text: "Prisma ", subText: "- For Treasurers" },
  { to: "/lumina", text: "Lumina ", subText: "- For Fund Admins" },
  { to: "/aurea", text: "Aurea ", subText: "- For Auditors" },
  { to: "/about", text: "", subText: "About" },
  { to: "/insights", text: "", subText: "Insights" },
];

export const addressData = [
  { text: "Gridiron Building", marginBottom: 0.5 },
  { text: "1 Pancras Square", marginBottom: 0.5 },
  { text: "London N1C 4AG", marginBottom: 0.5 },
  { text: "Phone: +44 (0)2077869230", marginBottom: 0.5 },
  { text: "Email: contact@solum-financial.com", marginBottom: 0.5 },
];

export const getLinkProps = (text: string) => {
  if (text.includes("Email")) {
    return {
      href: "mailto:contact@solum-financial.com",
      target: "_blank",
      rel: "noreferrer noopener",
    };
  }
  if (text.includes("Phone")) {
    return {
      href: "tel:+4470207869230",
      target: "_blank",
      rel: "noreferrer noopener",
    };
  }
  return null;
};
