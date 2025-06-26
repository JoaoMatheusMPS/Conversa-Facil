function baixaOAplicativo() {
  const APK = "https://gofile.io/d/HnbvZc"; // <-- link direto aqui

  const link = document.createElement("a");
  link.href = APK;
  link.download = "conversa-facil.apk";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}