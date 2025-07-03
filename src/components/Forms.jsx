import React, { useActionState } from "react";

const Forms = () => {
  const submitForms = (prevstate , formData) => {
    const name = formData.get("username");
    const description = formData.get("description");
    const isChecked = formData.get("isChecked");

    console.log("check name and all", name, description, isChecked);


    return {
        data : {
            username : name ,
            description,
            isChecked 
        },
        error :{}
    }
  };
    const [state, formAction, isPending] = useActionState(submitForms, {
    data: {},
    error: null,
  });

  

  return (
    <div>
      submit your name and number
      <form action={formAction}>
        <div>
          <input name="username" />
        </div>
        <div>
          <textarea name="description" />
        </div>
        <div>
          <input name="isChecked" type="checkbox" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>{state.data?.username ?? ""}</div>&&&
      <div>{state.data?.description ?? ""}</div>

    </div>
  );
};

export default Forms;
