const colors = [
  { background: "#001f3f", foreground: "#f5f5f5" },
  { background: "#0074D9", foreground: "#f5f5f5" },
  { background: "#7FDBFF", foreground: "#363635" },
  { background: "#39CCCC", foreground: "#363635" },
  { background: "#3D9970", foreground: "#f5f5f5" },
  { background: "#2ECC40", foreground: "#363635" },
  { background: "#01FF70", foreground: "#363635" },
  { background: "#FFDC00", foreground: "#363635" },
  { background: "#FF851B", foreground: "#f5f5f5" },
  { background: "#FF4136", foreground: "#f5f5f5" },
  { background: "#85144b", foreground: "#f5f5f5" },
  { background: "#F012BE", foreground: "#363635" },
  { background: "#B10DC9", foreground: "#f5f5f5" }
];

class Practice {
  constructor(title, tagline, icon) {
    this.title = title;
    this.tagline = tagline;
    this.icon = icon;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
}

export default Practice;
