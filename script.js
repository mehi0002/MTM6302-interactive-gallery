const images = [
    {
        name:   'Sumac',
        index:  '01',
        alt:    'A hanging branch of a Sumac with leaves beginning to turn red.'
    },
    {
        name:   'Toronto',
        index:  '02',
        alt:    'The word TORONTO and a maple leaf lit up and reflected in the skating rink at Nathan Philips Square at night.'
    },
    {
        name:   'Canada Goose',
        index:  '03',
        alt:    'A Canada Goose spreading its wings with its back to the camera in a marsh with fall folliage.'
    },
    {
        name:   'Antique',
        index:  '04',
        alt:    'A dark cup with hand painted gold decoration and matching saucer sitting on a dusty, cluttered, wooden shelf.'
    },
    {
        name:   'Winter Green #1',
        index:  '05',
        alt:    'Snow laden moss growing on an outcropping of rock.'
    },
    {
        name:   'Winter Green #2',
        index:  '06',
        alt:    'Tiny plants growing in and around a fallen, weathered leaf and rocks. '
    },
    {
        name:   'Festival of Lights #1',
        index:  '07',
        alt:    'Trees lit up with christmas lights'
    },
    {
        name:   'Festival of Lights #2',
        index:  '08',
        alt:    'Low angle shot of strings of indigo and white decorative lights forming a christmas tree.'
    },
    {
        name:   'Florals',
        index:  '09',
        alt:    'Bright firey red flowers back lit by the sun, rising up out of green and yellow leaves.'
    },
    {
        name:   'Water Lily',
        index:  '10',
        alt:    'Pink water lily growing up out of calm water surrounding by lily pads.'
    },
    {
        name:   'Into the Woods',
        index:  '11',
        alt:    'A woman with bright red hair and a red mediveval gown looking off to the right, while standing on the knarled braches of a dead fallen tree surrounded by a forest with yellow and green leaves.'
    },
    {
        name:   'Mount Pleasent Cemetery',
        index:  '12',
        alt:    'A statue under a round stone roof held up by pillars in a misty, snow laden cemetery. The entire scene is cast in tones of blue.'
    },
    {
        name:   'Blossums',
        index:  '13',
        alt:    'A branch of 3 small blossums, each consisting of 5 round white petals and light pink stamen.'
    },
    {
        name:   'Chimpmunk',
        index:  '14',
        alt:    'A shot from behind a bright yellow, 2 person, single engine plane. In the background, light is coming through the hanger doors. On the doors are are repeating grid of airplane silhouettes and the words "Friends of Flight". '
    },
    {
        name:   'Vintage Cameras',
        index:  '15',
        alt:    'Close up shot of a display with various types of vintage cameras.'
    },
    {
        name:   'Brian',
        index:  '16',
        alt:    'A shot of a person from behind with a light blue coat and umbrella surrounded by trees and yellow fall leaves. They are mid spin, with their arms extended and coat billowing out.'
    },
    {
        name:   'Uyghur Mosque',
        index:  '17',
        alt:    'Interior an old Christian church. The pews have been replaced with carpet featuring repeated arches in rows. In the background, a light blue flag with a white cresent moon and star hangs from the balcony.'
    },
    {
        name:   'Games We Play #1',
        index:  '18',
        alt:    'Ultra close up shot of a bubblegum pink 20 sided die with black numbers. The side with the number 1 is facing the camera.'
    },
    {
        name:   'Games We Play #2',
        index:  '19',
        alt:    'Macro shot of a glass marble with a pattern of red blotches covering the surface. Light is shining through from behind, causing the marble light up in a way that is reminiscent of lava.'
    }
]

const $gallery = document.getElementById('gallery')             // image gallery 
const $fullSize = document.getElementById('fullSize')           // the full sized view
const fullSourceSet = $fullSize.children                        // screen dependant image source set

{/* <picture>
<img src="images/thumbnail/portfolio-thumbnail-01.jpg" alt="alt test" data-index="01" class="thumbnail">
</picture> */}
images.forEach(function(image){
    
    const newImage = document.createElement('img')
    newImage.setAttribute('src',`images/thumbnail/portfolio-thumbnail-${image.index}.jpg`)
    newImage.setAttribute('alt', image.alt)
    newImage.setAttribute('data-index', image.index)

    $gallery.appendChild(newImage)
});

/****** Viewing the high res version of an image ********/
$gallery.addEventListener('click', function(e){

    if(e.target.classList.contains('thumbnail') && $gallery.classList.contains('deactivated') == false){               // Check if a thumbnail has been clicked
        index = e.target.dataset.index

        // Update image source sets
        fullSourceSet[0].setAttribute('srcset', `images/desktop/portfolio-desktop-${index}.jpg`)
        fullSourceSet[1].setAttribute('srcset', `images/tablet/portfolio-tablet-${index}.jpg`)
        fullSourceSet[2].setAttribute('src', `images/mobile/portfolio-mobile-${index}.jpg`)

        $fullSize.classList.remove('hidden')                    // Show full sized image on top of gallery
        $gallery.classList.toggle('deactivated')                //deactivate gallery thumbnails
    }
})

/* ****** Hiding the high res version of an image ******/
    $fullSize.addEventListener('click', function(){
        $fullSize.classList.add('hidden')                       //hide when high res image is clicked
        $gallery.classList.toggle('deactivated')                //re-activate gallery thumbnails
    })
