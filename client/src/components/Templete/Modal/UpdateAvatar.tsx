import { Avatar, Button, Dialog, DialogContent,styled } from "@mui/material";
import { MyProfileDocument, MyProfileQuery, useUpdateAvatarMutation } from "../../../generated/graphql";

const UpdateAvatar = ({handleClose,avatar}) =>{
    const [updateAvatar] = useUpdateAvatarMutation()
    const Input = styled('input')({display: 'none',});
    const updateAvatarChange = async (e) => {
        const file = e.target.files[0]
        try{
            await updateAvatar({
                variables : { 
                    file : file   
                },
                update(cache,{data}){
                    if(data?.ChangeAvatar.success){
                        cache.writeQuery<MyProfileQuery>({
                            query : MyProfileDocument,
                            data : {MyProfile : data?.ChangeAvatar.user}
                        })
                    }
                },
              })
        }catch(e){
            console.log(JSON.stringify(e))
        }
        
          
        }

    return (
        <Dialog open={true} maxWidth="sm" scroll='body' onClose={handleClose}>
            <DialogContent>
                <div className="py-8 px-14 relative">
                    <p className="text-2xl pb-6">Edit Profile Picture</p>
                    <p>Image must be in jpg file format. File size must be less than 2MB.</p> 
                    <div className="flex justify-center items-center"><Avatar src={avatar} sx={{ width: 350, height: 350 }}/></div>
                    <div className="flex items-center justify-end pt-8">
                        <div className="px-2"><button className="px-8 py-2 border-2 rounded-full">Delete</button> </div>
                        <div>
                        <label htmlFor="contained-button-file">
                            <Input accept="image/*" id="contained-button-file" type="file" onChange={updateAvatarChange}/>
                            <Button className="text-white text-base px-6 py-2 bg-black rounded-full hover:bg-gray-700" style={{textTransform: 'none', fontWeight : 400}} variant="contained" component="span"><p>Change Photo</p></Button>
                        </label>
                        </div>
                    </div>
                    <div className="absolute top-4 right-8 cursor-pointer" onClick={handleClose}>
                        <img className="p-2 rounded-full bg-gray-100" src='/static/icons/exit2.svg'/>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default UpdateAvatar;