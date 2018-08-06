<?php

class montereysigns_constants extends page_base {

    public function build(output $output) {
        $this->response = $this->setup_constants();
        $output->format($this->response, output::angular);
    }

    // --- helpers ---
    private function setup_constants() {
        $return = array(
            'Default'        => array(
                'Year' => date('Y'),
            ),
            'Infrastructure' => array(
                'Result' => cst_infrastructure::result,
                'Pass'   => cst_infrastructure::pass,
                'Fail'   => cst_infrastructure::fail,
            ),
            'P'              => array(
            ),
            'list_navbar'    => cst_montereysigns::list_navbar,
            'list_subnav'    => cst_montereysigns::list_subnav,
            'Url'            => array(
            ),
        );
        return $return;
    }

}
