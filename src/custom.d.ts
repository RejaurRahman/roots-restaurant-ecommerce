declare module "*.jpg"
declare module "*.png"
declare module "*.webp"
declare module "*.mp4" {
  const src: string

  export default src
}
