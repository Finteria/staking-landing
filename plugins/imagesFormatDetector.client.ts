export default defineNuxtPlugin(async () => {
  const isFormatSupported = (format: string, dataUri: string): Promise<boolean> =>
    new Promise<boolean>((resolve, reject) => {
      const image = new Image();
      image.src = `data:image/${format};base64,${dataUri}`;

      image.onload = () => {
        resolve(true);
      };

      image.onerror = () => {
        reject(`Format ${format} not supported`);
      };
    });

  const supportsEncode = async () => {
    const fallbackClass = "jpg";

    const supportsAvif = isFormatSupported(
      "avif",
      "AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="
    );

    const webpData = "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";

    return supportsAvif
      .then(() => "avif")
      .catch(async () => {
        const webpBlob = await fetch(webpData).then((r) => r.blob());
        return createImageBitmap(webpBlob).then(() => "webp");
      })
      .catch(() => fallbackClass);
  };

  const bodyClass = await supportsEncode();
  document.body.classList.add(bodyClass);
});
