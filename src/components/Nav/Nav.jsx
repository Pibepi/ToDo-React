import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';
import Swal from 'sweetalert2';
import './Nav.css';

const Nav = forwardRef(({ addTask, projects }, ref) => {
  const [isPaddingStyle, setIsPaddingStyle] = useState(false);
  const [selectedProject, setSelectedProject] = useState('Select Project');

  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {
      edge: 'left',
      preventScrolling: false,
      onCloseEnd: () => {
        if (window.innerWidth > 992) {
          setIsPaddingStyle(false);
        }
      }
    });

    if (isPaddingStyle) {
      document.body.classList.add('body-padding');
      document.getElementById('myMenu').style.display = 'none';
    } else {
      document.body.classList.remove('body-padding');
      document.getElementById('myMenu').style.display = 'block';
    }
  }, [isPaddingStyle]);

  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdowns);
  }, []);

  const toggleSidenav = () => {
    const sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
    sidenavInstance.close();
    setIsPaddingStyle(prevState => !prevState);
  };

  const addTaskLi = () => {
    Swal.fire({
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Enter task name...">
        <textarea id="descriptionTaskInput" class="swal2-input" placeholder="Enter description..."></textarea>
        <input id="dateInput" class="swal2-input" type="date" placeholder="Enter date...">
        <input id="tagsInput" class="swal2-input" placeholder="Enter tags (comma-separated)...">
        <input id="priorityInput" class="swal2-input" type="number" placeholder="Enter priority (1-5)...">
        <a id="projectDropdown" class='dropdown-trigger btn' href='#' data-target='dropdown1'>${selectedProject}</a>
        <ul id='dropdown1' class='dropdown-content'>
          ${projects.map(project => `<li onclick="document.getElementById('projectInput').value='${project}'; window.selectProject('${project}')">${project}</li>`).join('')}
        </ul>
        <input id="projectInput" type="hidden">
      `,
      didOpen: () => {
        const dropdowns = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdowns);
        window.selectProject = (project) => {
          setSelectedProject(project);
          document.getElementById('projectDropdown').innerText = project;
        };
      },
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Add",
      customClass: {
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button'
      },
      buttonsStyling: false,
      backdrop: false
    }).then((result) => {
      if (result.isConfirmed) {
        const taskName = document.getElementById('swal-input1').value.trim();
        const taskDescription = document.getElementById('descriptionTaskInput').value.trim();
        const dateInput = document.getElementById('dateInput').value;
        const tags = document.getElementById('tagsInput').value.split(',').map(tag => tag.trim()).filter(tag => tag);
        const priority = document.getElementById('priorityInput').value;
        const project = document.getElementById('projectInput').value;

        if (!taskName  || !dateInput  ) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all fields correctly! Date... && Task name...!',
            customClass: {
              popup: 'swal-error-popup',
              title: 'swal-error-title',
              text: 'swal-error-text',
              confirmButton: 'swal-error-confirm-button', // Custom class for confirm button
              cancelButton: 'swal-error-cancel-button'  // Custom class for cancel button
            }
          });
          
          return;
        }

        const newTask = {
          name: taskName,
          description: taskDescription,
          date: dateInput,
          tags: tags,
          priority: parseInt(priority, 10),
          project: project
        };

        addTask(newTask);
      }
    });
  };

  useImperativeHandle(ref, () => ({
    addTaskLi,
  }));

  return (
    <div>
      <a data-target="slide-out" className="sidenav-trigger show-on-medium-and-down" href="#">
        <i className="material-icons myMenu" id="myMenu" onClick={toggleSidenav}>menu</i>
      </a>

      <ul id="slide-out" className="sidenav">
        <li><i className="material-icons myMenu" onClick={toggleSidenav}>menu</i></li>
        <li className="nav-item addTaskLi" onClick={addTaskLi}>
          <i className="material-icons addTaskBtn">add</i>Add task
        </li>
        <li><NavLink to="/" className="nav-item" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/project" className="nav-item" activeClassName="active">Project</NavLink></li>
      </ul>

      <ul className="sidenav hide-on-med-and-down">
        <li><NavLink to="/" className="nav-item" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/project" className="nav-item" activeClassName="active">Project</NavLink></li>
      </ul>
    </div>
  );
});

export default Nav;
