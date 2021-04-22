import React from 'react';

export default function Form(props) {
    const { values, submit, change, errors, disabled } = props;

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    };

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <button disabled={disabled}>submit</button>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
                <div>
                    <label>
                        Name
                    <input
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email
                    <input
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                    <input
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='text'
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Terms of Service
                    <input
                            checked={values.terms}
                            onChange={onChange}
                            name='terms'
                            type='checkbox'
                        />
                    </label>
                </div>
            </div>
        </form>
    );
}