wallpaper_dir="/home/manjack/Pictures/drive-download-20230810T161548Z-001"

wallpaper=$(ls $wallpaper_dir | shuf -n 1)

feh --bg-fill "$wallpaper_dir/$wallpaper"
