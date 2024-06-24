const detectOS = () => {
  const { platform } = window.navigator;
  const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
  const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];

  if (macosPlatforms.includes(platform)) {
    return "macOS";
  } else if (windowsPlatforms.includes(platform)) {
    return "Windows";
  } else {
    return "Other";
  }
};

export default detectOS;
