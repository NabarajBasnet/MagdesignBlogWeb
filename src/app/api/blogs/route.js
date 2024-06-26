import BlogPost from "@/components/lib/BlogsModel/blogschema";
import connectionStr from "@/components/lib/DB";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async (req, content) => {
    const url = new URL(req.url);
    const searchQuery = url.searchParams.get('search')
    const currentPage = url.searchParams.get('page');
    const blogsPerPage = url.searchParams.get('limit');

    console.log('Search Query: ', searchQuery)


    try {
        if (searchQuery) {
            console.log('Query? ', true)
            const searchedQueryData = await BlogPost.find({ title: searchQuery });
            console.log('Response from searched query')
            return NextResponse.json({ result: searchedQueryData, success: true })
        }
        else {
            await mongoose.connect(connectionStr);
            const blogPosts = await BlogPost.find().skip(currentPage).limit(blogsPerPage);
            console.log('Response from default query')
            return NextResponse.json({ result: blogPosts, success: true, ok: true, request: req });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
};


export const POST = async (req) => {
    try {
        await mongoose.connect(connectionStr);
        const blogPayload = await req.json();
        const newData = new BlogPost(blogPayload);
        const finalBogPost = newData.save();
        return NextResponse.json({ result: finalBogPost, success: true })
    }
    catch (error) {
        console.log(error)
    }
}


