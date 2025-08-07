import { createClient } from "@supabase/supabase-js"

const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZldnFsenNhYXF2eW96bm1kZ2dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMjc1MTAsImV4cCI6MjA2OTgwMzUxMH0.60LOlUWNF7o-mZ8BVhDA0NDaUnZMrS6xhUti6yVT12A"
const url = "https://vevqlzsaaqvyoznmdggi.supabase.co"
const supabase = createClient(url, key)


export default function uploadFile(file){
    const promise = new Promise(

        (resolve, reject) => {
        if (file == null) {
            reject("No file selected");
            return;
        }

        const timeStamp = new Date().getTime();
        const fileName = timeStamp + "_" + file.name;

        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: '3600',
            upsert: false
        }).then(
            ()=> {
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch(() => {
            reject("Failed to upload file. Please try again.");
        })
    }
)
return promise;
}