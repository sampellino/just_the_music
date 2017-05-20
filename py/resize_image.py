from PIL import Image
from resizeimage import resizeimage
originalImageName = 'boombox'
with open(originalImageName+'.png', 'r+b') as f:
    with Image.open(f) as image:
        cover = resizeimage.resize_cover(image, [128, 128])
        cover.save(originalImageName+'_128.png', image.format)
        cover = resizeimage.resize_cover(image, [48, 48])
        cover.save(originalImageName+'_48.png', image.format)
        cover = resizeimage.resize_cover(image, [16, 16])
        cover.save(originalImageName+'_16.png', image.format)