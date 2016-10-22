<?php

class ffUserRoleManager extends ffBasicObject {
/**********************************************************************************************************************/
/* OBJECTS
/**********************************************************************************************************************/

/**********************************************************************************************************************/
/* PRIVATE VARIABLES
/**********************************************************************************************************************/
    /**
     * @var ffUserRoleFactory
     */
    private $_userRoleFactory = null;

    private $_actionSetupThemeHasBeenFired = null;
/**********************************************************************************************************************/
/* CONSTRUCT
/**********************************************************************************************************************/
    public function __construct( ffUserRoleFactory $userRoleFactory ) {
        $this->_setUserRoleFactory($userRoleFactory);
    }
/**********************************************************************************************************************/
/* PUBLIC FUNCTIONS
/**********************************************************************************************************************/
    public function getUserRoleByName( $name ) {

    }

    public function getUserRoleByDisplayName( $displayName ) {

    }

    public function createUserRole() {
        $userRole = $this->_getUserRoleFactory()->createUserRole();

        return $userRole;
    }

    public function addUserRole( ffUserRole $userRole ) {

    }


/**********************************************************************************************************************/
/* PUBLIC PROPERTIES
/**********************************************************************************************************************/

/**********************************************************************************************************************/
/* PRIVATE FUNCTIONS
/**********************************************************************************************************************/

/**********************************************************************************************************************/
/* PRIVATE GETTERS & SETTERS
/**********************************************************************************************************************/
    /**
     * @return ffUserRoleFactory
     */
    private function _getUserRoleFactory()
    {
        return $this->_userRoleFactory;
    }

    /**
     * @param ffUserRoleFactory $userRoleFactory
     */
    private function _setUserRoleFactory($userRoleFactory)
    {
        $this->_userRoleFactory = $userRoleFactory;
    }

}
